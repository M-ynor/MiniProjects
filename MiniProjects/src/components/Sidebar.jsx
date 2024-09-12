import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import useResponsive from '../config/useResponsive';
import { fadeAnimation, slideAnimation, headTextAnimation } from "../config/motion";

const moonToSunny = "line-md:sunny-outline-to-moon-loop-transition";
const sunnyToMoon = "line-md:moon-to-sunny-outline-loop-transition";
const categories = ['All', 'Game', 'Productivity', 'Utility'];

const Sidebar = forwardRef((props, ref) => {
  const [isSunny, setIsSunny] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { isAboveBreakpoint, isBelowBreakpoint } = useResponsive(100);

  const toggleIcon = () => {
    setIsSunny(!isSunny);
    console.log(isSunny);
  };

  useImperativeHandle(ref, () => ({
    getIsSunny: () => isSunny,
  }));

  return (
    <div>
      <AnimatePresence>
        {isAboveBreakpoint && (
          <motion.div {...slideAnimation("down")} className={`w-[30vh] sm:w-[35vh] lg:w-[40vh] h-screen flex flex-col gap-y-3 ${isSunny ? 'bg-DarkSideBarBg' : 'bg-LightSideBarBg'}`}>
            <motion.div className='flex mt-12 gap-x-3 p-1 items-center justify-center' {...headTextAnimation}>
              <p className='text-3xl sm:text-4xl lg:text-4xl text-Green font-semibold h-fit'>MiniProjects</p>
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
                className={`${isSunny ? 'bg-InputGray text-white placeholder:text-gray-500' : 'bg-white text-InputGray placeholder:text-gray-500'} w-60  p-2 rounded-md sm:w-[30vh] lg:w-64 font-medium outline-none`}
                type='text'
                placeholder='Search projects...'
              />
            </form>
            <motion.p {...fadeAnimation} className={`${isSunny ? 'text-white' : 'text-black'} font-semibold text-2xl sm:text-3xl  lg:text-3xl text-start pl-5 mt-3 `}>
              Categories
            </motion.p>
            <motion.div {...fadeAnimation} className='flex flex-col gap-y-5 items-center'>
              {categories.map((category, index) => (
                <motion.button
                  key={`${category}-${index}`}
                  className={`flex w-52 sm:w-[28vh] lg:w-60 h-12 font-semibold items-center text-start pl-8 rounded-md ${selectedCategory === category ? 'bg-Green' : ''} ${isSunny ? 'hover:bg-InputGray' : 'hover:bg-gray-400'} `}
                  onClick={() => setSelectedCategory(category)}
                >
                  <Icon icon="iconamoon:funnel" className={`m-1 text-2xl  ${selectedCategory === category ? (isSunny ? 'text-black' : 'text-white') : (isSunny ? 'text-white' : 'text-black')}`} />
                  <span className={`m-1 text-xl ${selectedCategory === category ? (isSunny ? 'text-black' : 'text-white') : (isSunny ? 'text-white' : 'text-black')}`}>{category}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
        {isBelowBreakpoint && (
          <motion.div {...slideAnimation("up")} className={`w-full h-full flex flex-col gap-y-3 ${isSunny ? 'bg-DarkSideBarBg' : 'bg-LightSideBarBg'}`}>
            <p className='text-center text-2xl text-Green'>MiniProjects</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default Sidebar;