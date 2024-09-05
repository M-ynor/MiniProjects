import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { fadeAnimation, slideAnimation } from "../config/motion";

function Sidebar() {
  return (
    <div>
      <AnimatePresence>
        <motion.button {...slideAnimation("down")}>Sidebar</motion.button>
      </AnimatePresence>
    </div>
  )
}

export default Sidebar