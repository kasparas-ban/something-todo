import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import RootLayout from './RootLayout/RootLayout'
import { tabs } from './RootLayout/tabs'
import './App.css'

function App() {
  const location = useLocation()

  return (
    <RootLayout>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={location.pathname}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <Routes location={location}>{routes}</Routes>
        </motion.div>
      </AnimatePresence>
    </RootLayout>
  )
}

const routes = tabs.map(tab => (
  <Route key={tab.path} path={tab.path} element={tab.Element} />
))

export default App
