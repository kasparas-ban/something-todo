import { ReactElement } from 'react'
import HomeTab from '../Tabs/HomeTab'
import BooksTab from '../Tabs/BooksTab'
import InfoTab from '../Tabs/InfoTab'

export interface Tab {
  icon: string
  label: string
  path: string
  Element: ReactElement
}

export const tabs: Tab[] = [
  { icon: '🏠', label: 'Home', path: '/', Element: <HomeTab /> },
  { icon: '📖', label: 'Books', path: '/books', Element: <BooksTab /> },
  { icon: 'ℹ️', label: 'Info', path: '/info', Element: <InfoTab /> },
]
