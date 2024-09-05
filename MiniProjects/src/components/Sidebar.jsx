import { motion, AnimatePresence } from 'framer-motion';
import { fadeAnimation, slideAnimation, headTextAnimation } from "../config/motion";
import { Icon } from '@iconify/react';
import moonToSunny from '@iconify-icons/line-md/moon-filled-alt-to-sunny-filled-loop-transition';
function Sidebar() {
  return (
    <div>
      <AnimatePresence>
        <motion.div {...slideAnimation("down")} className='bg-DarkSideBarBg w-[40vh] h-full flex justify-center ' >
          <div className='flex mt-12 gap-x-3'>
            <p className='text-4xl text-Green'>MiniProjects</p>
            <motion.button className='flex justify-center items-center w-12 h-12 text-Green' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Icon icon={moonToSunny} width="30" height="30" />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default Sidebar