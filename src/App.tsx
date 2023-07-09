import { Routes, Route, useLocation } from 'react-router-dom'
import ReloadPrompt from './ReloadPrompt/ReloadPrompt'
import RootLayout from './RootLayout/RootLayout'
import { tabs } from './RootLayout/tabs'

function App() {
  const location = useLocation()

  return (
    <RootLayout>
      <ReloadPrompt />
      {/* <AnimatePresence mode="popLayout">
        <motion.div
          key={location.pathname}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        > */}
      <Routes location={location} key={location.pathname}>
        {routes}
      </Routes>
      {/* </motion.div>
      </AnimatePresence> */}
    </RootLayout>
  )
}

const routes = tabs.map(tab => (
  <Route key={tab.path} path={tab.path} element={tab.Element} />
))

export default App
