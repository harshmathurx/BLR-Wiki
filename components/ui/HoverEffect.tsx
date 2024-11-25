"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export function HoverEffect({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
} 