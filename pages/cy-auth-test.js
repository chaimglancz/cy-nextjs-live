import { useState } from 'react'
import { cySupabase } from '../supabase'

export default function CyAuthTest() {
  const [cyEmail, setCyEmail] = useState('')
  const [cyPassword, setCyPassword] = useState('')
  const [cyUser, setCyUser] = useState(null)
  const [cyMessage, setCyMessage] = useState('')

  const cySignUp = async () => {
    try {
      const { error } = await cySupabase.auth.signUp({ email: cyEmail, password: cyPassword })
      setCyMessage(error ? `Signup Error: ${error.message}` : 'Signup OK, check your email.')
    } catch (err) {
      setCyMessage(`Signup failed: ${err.message}`)
    }
  }

  const cySignIn = async () => {
    const { data, error } = await cySupabase.auth.signInWithPassword({ email: cyEmail, password: cyPassword })
    if (error) setCyMessage(`Login Error: ${error.message}`)
    else {
      setCyUser(data.user)
      setCyMessage('Logged in.')
    }
  }

  const cySignOut = async () => {
    await cySupabase.auth.signOut()
    setCyUser(null)
    setCyMessage('Logged out.')
  }

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-4">Supabase Auth Demo</h1>

      <div className="space-y-3 mb-4">
        <input
          type="email"
          placeholder="Email"
          value={cyEmail}
          onChange={(e) => setCyEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={cyPassword}
          onChange={(e) => setCyPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={cySignUp} className="px-3 py-2 bg-blue-500 text-white rounded text-sm">
          Sign Up
        </button>
        <button onClick={cySignIn} className="px-3 py-2 bg-green-500 text-white rounded text-sm">
          Sign In
        </button>
        {cyUser && (
          <button onClick={cySignOut} className="px-3 py-2 bg-red-500 text-white rounded text-sm">
            Sign Out
          </button>
        )}
      </div>

      {cyUser && (
        <p className="mb-2 text-sm text-gray-700">Current user: {cyUser.email}</p>
      )}

      {cyMessage && (
        <p className="mt-2 p-2 bg-gray-100 rounded text-sm">{cyMessage}</p>
      )}
    </div>
  )
}