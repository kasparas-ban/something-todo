import { useRegisterSW } from 'virtual:pwa-register/react'

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r)
      setOfflineReady(true)
      r &&
        setInterval(() => {
          console.log('Updating SW')
          r.update()
        }, 20 * 1000)
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  console.log('PROMPT', offlineReady, needRefresh)

  return (
    (offlineReady || needRefresh) && (
      <div className="absolute bottom-16 flex flex-col gap-2 rounded-xl bg-gray-50 px-5 py-2 drop-shadow-md md:bottom-auto md:top-16">
        <div className="text-center">
          {offlineReady ? (
            <span>Ready to work offline!</span>
          ) : (
            <span>
              New content available, click on reload button to update.
            </span>
          )}
        </div>
        <div className="mx-auto flex gap-2">
          {needRefresh && (
            <button
              className="w-fit rounded-md bg-blue-300 px-3 py-1 font-medium hover:bg-accent"
              onClick={() => updateServiceWorker(true)}
            >
              Reload
            </button>
          )}
          <button
            className="w-fit rounded-md bg-gray-200 px-3 py-1 font-medium hover:bg-gray-300"
            onClick={() => close()}
          >
            Close
          </button>
        </div>
      </div>
    )
  )
}

export default ReloadPrompt
