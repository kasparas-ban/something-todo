import { useLayoutEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import RootLayout from './RootLayout/RootLayout'
import { tabs } from './RootLayout/tabs'
import './App.css'

function App() {
  const location = useLocation()
  const prevPathRef = useRef<string | null>(null)

  const idxPrev = tabs.findIndex(tab => tab.path === prevPathRef.current)
  const idxCurrent = tabs.findIndex(tab => tab.path === location.pathname)
  const moveRight = idxCurrent - idxPrev > 0

  useLayoutEffect(() => {
    if (prevPathRef) prevPathRef.current = location.pathname
  }, [location.pathname])

  console.log('moveRight', moveRight)

  return (
    <RootLayout>
      <AnimatePresence mode="popLayout">
        <motion.div
          initial={
            prevPathRef.current
              ? { x: moveRight ? 100 : -100, opacity: 0 }
              : false
          }
          animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
          exit={{ x: moveRight ? -100 : 100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          key={location.pathname}
        >
          <Routes location={location}>
            {routes}
            {/* <Route index element={<HomeTab />} />
            <Route path="books" element={<BooksTab />} />
            <Route path="info" element={<InfoTab />} /> */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
        </motion.div>
      </AnimatePresence>
    </RootLayout>
  )
}

const routes = tabs.map(tab => (
  <Route key={tab.path} path={tab.path} element={tab.Element} />
))

export default App
