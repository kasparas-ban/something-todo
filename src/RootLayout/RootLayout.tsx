import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { tabs } from './tabs'
import './styles.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const location = useLocation()
  const isSelected = (path: string) => path === location.pathname

  return (
    <div className="relative mx-auto h-screen max-w-lg">
      <nav className="absolute bottom-0 left-0 right-0 h-12 w-[inherit] max-w-lg overflow-hidden rounded-xl rounded-b-none max-[512px]:rounded-none md:relative md:h-10 md:rounded-b-lg md:rounded-t-none md:border-b-gray-200">
        <ul className="flex h-full max-w-lg bg-gray-100">
          {tabs.map(tab => (
            <li
              key={tab.path}
              className={clsx(
                'relative flex w-full',
                isSelected(tab.path) ? 'bg-gray-200' : ''
              )}
            >
              <NavLink
                key={tab.label}
                to={tab.path}
                className="flex w-full cursor-pointer select-none items-center justify-center px-4 py-2"
              >
                {`${tab.icon} ${tab.label}`}
                {isSelected(tab.path) ? (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 z-10 h-[1.5px] bg-accent"
                    layoutId="underline"
                  />
                ) : null}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex h-[calc(100%-3rem)] items-center justify-center md:h-[calc(100%-2.5rem)]">
        {children}
      </main>
    </div>
  )
}
