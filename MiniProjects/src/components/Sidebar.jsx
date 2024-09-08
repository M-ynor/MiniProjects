import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeAnimation, slideAnimation } from "../config/motion";
import { Icon } from '@iconify/react';

const moonToSunny = "line-md:sunny-outline-to-moon-loop-transition";
const sunnyToMoon = "line-md:moon-to-sunny-outline-loop-transition";

function Sidebar() {
  const [isSunny, setIsSunny] = useState(true);

  const toggleIcon = () => {
    setIsSunny(!isSunny);
    console.log(isSunny);
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div {...slideAnimation("down")} className='bg-DarkSideBarBg w-[40vh] h-full flex justify-center ' >
          <div className='flex mt-12 gap-x-3 p-1'>
            <p className='text-4xl text-Green font-semibold '>MiniProjects</p>
            <motion.button
              className={`flex justify-center items-center w-12 h-12 text-Green ${isSunny ? 'hover:text-yellow-300' : 'hover:text-gray-400'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={toggleIcon}
            >
              <Icon key={isSunny ? 'sunny' : 'moon'} icon={isSunny ? sunnyToMoon : moonToSunny} width="30" height="30" />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;