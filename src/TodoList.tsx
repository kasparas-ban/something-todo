import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function TodoList() {
  const [items, setItems] = useState([new Date()])

  const removeItem = (arr: Date[], item: Date) => {
    const index = arr.indexOf(item)
    if (index > -1) arr.splice(index, 1)
  }

  return (
    <div className="absolute top-20">
      <div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setItems([...items, new Date()])}
          className="mb-4 w-52 cursor-pointer rounded-xl bg-rose-500 px-8 py-4 font-bold"
        >
          Add item
        </motion.button>
      </div>
      <ul className="flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {items.map(item => (
            <motion.li
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring' }}
              key={formatDate(item)}
              onClick={() => {
                const newItems = [...items]
                removeItem(newItems, item)
                setItems(newItems)
              }}
              className="flex h-10 cursor-pointer items-center justify-center rounded-xl bg-rose-400 text-sm"
            >
              {formatDate(item)}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
}
