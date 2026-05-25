'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error)
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-2xl p-6 text-center animate-fade-in"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--indigo)',
          boxShadow: '0 0 32px var(--indigo-glow)',
        }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'var(--indigo-muted)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--indigo)' }}>
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <p className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
          You&apos;re on the list.
        </p>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
          Check your email for confirmation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="volta-input flex-1 rounded-xl px-4 py-3.5 text-base"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className="volta-btn rounded-xl px-6 py-3.5 text-base whitespace-nowrap"
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
              </svg>
              Joining...
            </span>
          ) : (
            'Join Waitlist'
          )}
        </button>
      </div>
      {status === 'error' && message && (
        <p className="mt-3 text-sm" style={{ color: '#FF4455' }}>
          {message}
        </p>
      )}
      <p className="mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
        No spam. Just launch updates and early access invites.
      </p>
    </form>
  )
}
