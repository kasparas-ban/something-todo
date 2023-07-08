import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function StatusBadge() {
  const [isOnline, setIsOnline] = useState<boolean | null>(null)

  useEffect(() => {
    setIsOnline(navigator.onLine)

    const setOnline = () => setIsOnline(true)
    const setOffline = () => setIsOnline(false)
    window.addEventListener('online', setOnline)
    window.addEventListener('offline', setOffline)

    return () => {
      window.removeEventListener('online', setOnline)
      window.removeEventListener('offline', setOffline)
    }
  }, [])

  return (
    isOnline !== null && (
      <div
        className={clsx(
          'absolute right-4 top-14 z-10 mr-2 rounded border px-2.5 py-0.5 text-xs font-medium',
          isOnline
            ? 'border-green-400 bg-green-100 text-green-800'
            : 'border-red-400 bg-red-100 text-red-800'
        )}
      >
        {isOnline ? 'online' : 'offline'}
      </div>
    )
  )
}
