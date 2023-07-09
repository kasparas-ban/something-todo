import { useRegisterSW } from 'virtual:pwa-register/react'

const UPDATE_INTERVAL = 20 * 1000

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      setOfflineReady(true)
      r && setInterval(() => r.update(), UPDATE_INTERVAL)
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    (offlineReady || needRefresh) && (
      <div className="absolute bottom-16 z-10 flex flex-col gap-2 rounded-xl bg-gray-50 px-5 py-2 drop-shadow-md md:bottom-auto md:top-16">
        <div className="text-center">
          {needRefresh ? (
            <span>
              New content available, click on reload button to update.
            </span>
          ) : (
            <span>Ready to work offline!</span>
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
