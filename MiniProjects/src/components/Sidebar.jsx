import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { fadeAnimation, slideAnimation, headTextAnimation } from "../config/motion";
import { Icon } from '@iconify/react';

const moonToSunny = "line-md:sunny-outline-to-moon-loop-transition";
const sunnyToMoon = "line-md:moon-to-sunny-outline-loop-transition";
const categories = ['All', 'Game', 'Productivity', 'Utility']

function Sidebar() {
  const [isSunny, setIsSunny] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleIcon = () => {
    setIsSunny(!isSunny);
    console.log(isSunny);
  };


  return (
    <div>
      <AnimatePresence>
        <motion.div {...slideAnimation("down")} className='bg-DarkSideBarBg w-[40vh] h-full flex flex-col gap-y-3' >
          <motion.div className='flex mt-12 gap-x-3 p-1 items-center justify-center' {...headTextAnimation}>
            <p className='text-4xl text-Green font-semibold h-fit'>MiniProjects</p>
            <motion.button
              className={`flex justify-center items-center w-12 h-12 text-Green ${isSunny ? 'hover:text-yellow-300' : 'hover:text-gray-400'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={toggleIcon}
            >
              <Icon key={isSunny ? 'sunny' : 'moon'} icon={isSunny ? sunnyToMoon : moonToSunny} width="30" height="30" />
            </motion.button>
          </motion.div>
          <form className='flex flex-col items-center justify-center mt-5 mb-5'>
            <motion.input
              {...fadeAnimation}
              className='bg-InputGray text-white p-2 rounded-md w-64 font-semibold placeholder:text-gray-500 outline-none'
              type='text'
              placeholder='Search projects...' />
          </form>
          <p className='font-semibold text-white text-2xl text-start pl-5 mt-3 '>
            Categories
          </p>
          <motion.div {...fadeAnimation} className='flex flex-col gap-y-5 items-center'>
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`flex w-64 h-12 text-white font-semibold items-center text-start pl-8 rounded-md ${selectedCategory === category ? 'bg-Green' : 'bg-Black'}`}
                onClick={() => setSelectedCategory(category)}
              >
                <Icon icon="iconamoon:funnel" className={`m-1 text-xl ${selectedCategory === category ? 'text-black': 'text-white'}`}/>
                <span className={`m-1 text-lg ${selectedCategory === category ? 'text-black': 'text-white'}`}>{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;