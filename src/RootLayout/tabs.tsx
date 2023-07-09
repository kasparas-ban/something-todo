import { ReactElement } from 'react'
import HomeTab from '../Tabs/HomeTab'
import TodoTab from '../Tabs/TodoTab'
import CacheTab from '../Tabs/CacheTab'

export interface Tab {
  icon: string
  label: string
  path: string
  Element: ReactElement
}

export const tabs: Tab[] = [
  { icon: '🏠', label: 'Home', path: '/', Element: <HomeTab /> },
  { icon: '📃', label: 'Todos', path: '/todos', Element: <TodoTab /> },
  { icon: '📒', label: 'Cache', path: '/cache', Element: <CacheTab /> },
]
