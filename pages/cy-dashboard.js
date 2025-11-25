import { useEffect, useState } from 'react'
import { cySupabase } from '../supabase'

export default function CyDashboard() {
  const [cyUser, setCyUser] = useState(null)
  const [cyLoading, setCyLoading] = useState(true)
  console.log('CyDashboard render:', { cyUser, cyLoading })
    useEffect(() => {
    console.log('useEffect ran: starting cyCheckUser')

    const cyCheckUser = async () => {
      console.log('cyCheckUser: calling getSession')
      const { data, error } = await cySupabase.auth.getSession()
      console.log('cyCheckUser: result from getSession', { data, error })

      if (data?.session?.user) {
        console.log('cyCheckUser: found user', data.session.user)
        setCyUser(data.session.user)
      } else {
        console.log('cyCheckUser: no user')
        setCyUser(null)
      }

      setCyLoading(false)
      console.log('cyCheckUser: setCyLoading(false)')
    }

    cyCheckUser()
  }, [])

  if (cyLoading) {
    return <p className="p-6">Checking login...</p>
  }

  if (!cyUser) {
    return (
      <div className="p-6 max-w-sm mx-auto space-y-3">
        <h1 className="text-xl font-semibold">cy-dashboard</h1>
        <p>You are not logged in.</p>
        <a href="/cy-auth-test" className="text-blue-600 underline">
          Go to login page
        </a>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-sm mx-auto space-y-3">
      <h1 className="text-xl font-semibold">cy-dashboard</h1>
      <p>Welcome, {cyUser.email}</p>
      <p>This is protected content only visible when logged in.</p>
      <a href="/cy-auth-test" className="text-blue-600 underline">
        Manage account / logout
      </a>
    </div>
  )
}