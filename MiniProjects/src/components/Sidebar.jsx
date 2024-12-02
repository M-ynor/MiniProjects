import React, { useState, useContext } from 'react';
import { SunnyContext } from '../config/SunnyContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { fadeAnimation, slideAnimation, headTextAnimation } from "../config/motion";

const moonToSunny = "line-md:sunny-outline-to-moon-loop-transition";
const sunnyToMoon = "line-md:moon-to-sunny-outline-loop-transition";
const categories = ['All', 'Game', 'Productivity', 'Utility'];

const Sidebar = () => {
  const { isSunny, setIsSunny } = useContext(SunnyContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  
  const toggleIcon = () => {
    setIsSunny(!isSunny);
    console.log(isSunny);
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div {...slideAnimation("down")} className={`transition-colors duration-300 durw-[30vh] sm:w-[35vh] lg:w-[40vh] h-screen flex flex-col gap-y-3 ${isSunny ? 'bg-DarkSideBarBg' : 'bg-LightSideBarBg'}`}>
          <motion.div className='flex mt-12 gap-x-3 p-1 items-center justify-center' {...headTextAnimation}>
            <p className='text-3xl sm:text-4xl lg:text-4xl 2xl:text-5xl  text-Green font-semibold h-fit'>MiniProjects</p>
            <motion.button
              className={`flex justify-center items-center w-12 h-12 text-Green ${isSunny ? 'hover:text-Sun' : 'hover:text-gray-400'}`}
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
              className={`${isSunny ? 'bg-InputGray text-white placeholder:text-gray-500' : 'bg-white text-InputGray placeholder:text-gray-500'} transition-colors duration-300 w-50  p-2 rounded-md sm:w-[30vh] lg:w-64 2xl:w-[35vh] 2xl:h-12  font-medium outline-none`}
              type='text'
              placeholder='Search projects...'
            />
          </form>
          <motion.p {...fadeAnimation} className={`transition-colors duration-300 ${isSunny ? 'text-white' : 'text-black'} font-semibold text-2xl sm:text-3xl lg:text-3xl 2xl:text-4xl 2xl:pl-10 text-start pl-5 mt-3 2xl:mb-6 mb-2 sm:mb-4 lg:mb-4 `}>
            Categories
          </motion.p>
          <motion.div {...fadeAnimation} className='flex flex-col gap-y-5 items-center'>
            {categories.map((category, index) => (
              <motion.button
                key={`${category}-${index}`}
                className={`transition-colors duration-300 flex w-52 sm:w-[28vh] lg:w-60 2xl:w-[30vh] 2xl:h-14 h-12 font-semibold items-center text-start pl-5 rounded-md ${selectedCategory === category ? 'bg-Green' : ''} ${isSunny ? 'hover:bg-InputGray' : 'hover:bg-gray-400'} `}
                onClick={() => setSelectedCategory(category)}
              >
                <Icon icon="iconamoon:funnel" className={`m-1 text-2xl 2xl:text-3xl  ${selectedCategory === category ? (isSunny ? 'text-black' : 'text-white') : (isSunny ? 'text-white' : 'text-black')}`} />
                <span className={`m-1 text-xl 2xl:text-2xl ${selectedCategory === category ? (isSunny ? 'text-black' : 'text-white') : (isSunny ? 'text-white' : 'text-black')}`}>{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;