import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SunnyContext } from '../config/SunnyContext.jsx';
import { useContext } from 'react';
import { fadeAnimationAfter, slideAnimation, transition } from '../config/motion.js';

const moonToSunny = "line-md:sunny-outline-to-moon-loop-transition";
const sunnyToMoon = "line-md:moon-to-sunny-outline-loop-transition";


function Card({ image, title, description, GoToprojectUrl }) {

  const { isSunny, setIsSunny } = useContext(SunnyContext);

  return (
    <AnimatePresence>
      <motion.div {...slideAnimation("right")} className={`flex flex-col items-center gap-y-3 w-52 h-52 sm:w-80 sm:h-80 2xl:w-96 2xl:h-96 ${isSunny ? 'bg-DarkCardBg' : 'bg-LightCardBg'} transition-colors duration-300 rounded-lg`}>
        <img 
        src={image} 
        alt={`${image? {image} : 'image not avaiable'}`} 
        className={`text-center object-cover w-full h-[60%] ${isSunny? 'text-white' : 'text-black'} transition-colors duration-300`}
        />
        <h1 className={`w-[90%] text-start font-bold 2xl:text-lg ${isSunny ? 'text-white' : 'text-black'}`}>{title? title : 'title not avaiable'}</h1>
        <p className='w-[90%] text-start 2xl:text-lg text-gray-400'>{description? description : 'Description not avaiable'}</p>
        <button onClick={GoToprojectUrl} className='hover:bg-[#1ED760] m-1 ml-1 text-center rounded-lg w-[90%] 2xl:h-10 2xl:text-lg font-semibold bg-Green'>Launch Project {`>`} </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default Card