'use client'

import { useEffect, useState } from 'react'

const LAUNCH_DATE = new Date('2026-12-01T00:00:00Z')

function getTimeLeft() {
  const now = new Date()
  const diff = LAUNCH_DATE.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

function Pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTime(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
          <div className="countdown-card rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center min-w-[56px] sm:min-w-[68px]">
            <div
              className="text-2xl sm:text-3xl font-black tabular-nums leading-none"
              style={{ color: 'var(--indigo)' }}
            >
              {Pad(unit.value)}
            </div>
            <div
              className="text-[10px] sm:text-xs font-medium mt-1 uppercase tracking-widest"
              style={{ color: 'var(--text-muted)' }}
            >
              {unit.label}
            </div>
          </div>
          {i < units.length - 1 && (
            <span
              className="text-xl font-bold mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
