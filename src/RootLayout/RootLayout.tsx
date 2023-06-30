import { useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { initialTabs as tabs } from './ingredients.ts'
import './styles.css'

export default function RootLayout() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className="relative mx-auto h-screen max-w-lg">
      <nav className="absolute bottom-0 left-0 right-0 h-12 w-[inherit] max-w-lg overflow-hidden rounded-lg rounded-b-none max-[512px]:rounded-none md:relative md:h-10 md:rounded-b-lg md:rounded-t-none md:border-b-gray-200">
        <ul className="flex h-full max-w-lg">
          {tabs.map(item => (
            <li
              key={item.label}
              className={clsx(
                'relative flex w-full flex-1 cursor-pointer select-none items-center justify-center px-4 py-2',
                item === selectedTab ? 'bg-gray-200' : 'bg-white'
              )}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 z-10 h-px bg-accent"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : '😋'}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
