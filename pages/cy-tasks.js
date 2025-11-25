import { useEffect, useState } from 'react'
import { cySupabase } from '../supabase'

export default function CyTasksPage() {
  const [cyUser, setCyUser] = useState(null)
  const [cyLoading, setCyLoading] = useState(true)
  const [cyTasks, setCyTasks] = useState([])
  const [cyNewTitle, setCyNewTitle] = useState('')

  async function cyLoadTasks(cyUserId) {
    const { data, error } = await cySupabase
      .from('cy_tasks')
      .select('*')
      .eq('user_id', cyUserId)
      .order('created_at', { ascending: false })

    if (!error && data) {
      setCyTasks(data)
    }
  }

  useEffect(() => {
    const cyCheckUser = async () => {
      const { data } = await cySupabase.auth.getSession()

      if (data?.session?.user) {
        const cyCurrentUser = data.session.user
        setCyUser(cyCurrentUser)
        await cyLoadTasks(cyCurrentUser.id)
      } else {
        setCyUser(null)
        setCyTasks([])
      }

      setCyLoading(false)
    }

    cyCheckUser()
  }, [])

  const cyAddTask = async (event) => {
    event.preventDefault()

    if (!cyUser || !cyNewTitle.trim()) {
      return
    }

    const cyTitleToSave = cyNewTitle.trim()

    const { data, error } = await cySupabase
      .from('cy_tasks')
      .insert([
        {
          user_id: cyUser.id,
          cy_title: cyTitleToSave,
          cy_is_done: false,
        },
      ])
      .select()

    if (!error && data && data[0]) {
      setCyTasks((previous) => [data[0], ...previous])
      setCyNewTitle('')
    }
  }

  const cyDeleteTask = async (cyTaskId) => {
    if (!cyUser) {
      return
    }

    const { error } = await cySupabase
      .from('cy_tasks')
      .delete()
      .eq('id', cyTaskId)

    if (!error) {
      setCyTasks((previous) => previous.filter((cyTask) => cyTask.id !== cyTaskId))
    }
  }

  const cyToggleTaskDone = async (cyTask) => {
    if (!cyUser) {
      return
    }

    const cyNewDoneValue = !cyTask.cy_is_done

    const { data, error } = await cySupabase
      .from('cy_tasks')
      .update({ cy_is_done: cyNewDoneValue })
      .eq('id', cyTask.id)
      .select()
      .single()

    if (!error && data) {
      setCyTasks((previous) =>
        previous.map((previousTask) =>
          previousTask.id === cyTask.id ? data : previousTask
        )
      )
    }
  }

  if (cyLoading) {
    return <p>Checking login...</p>
  }

  if (!cyUser) {
    return (
      <div>
        <h1>cy-tasks</h1>
        <p>You are not logged in.</p>
        <a href="/cy-auth-test">Go to login page</a>
      </div>
    )
  }

  return (
    <div>
      <h1>cy-tasks</h1>
      <p>Welcome, {cyUser.email}</p>

      <form onSubmit={cyAddTask}>
        <input
          type="text"
          placeholder="New task title"
          value={cyNewTitle}
          onChange={(event) => setCyNewTitle(event.target.value)}
        />
        <button type="submit">Add task</button>
      </form>

      <ul>
        {cyTasks.map((cyTask) => (
          <li key={cyTask.id}>
            <span>
              {cyTask.cy_is_done ? '[x] ' : '[ ] '}
              {cyTask.cy_title}
            </span>
            <button type="button" onClick={() => cyToggleTaskDone(cyTask)}>
              toggle done
            </button>
            <button type="button" onClick={() => cyDeleteTask(cyTask.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
