import React from 'react'
import { motion } from 'framer-motion'
import { SunnyContext } from '../config/SunnyContext.jsx';
import { useContext } from 'react';

const moonToSunny = "line-md:sunny-outline-to-moon-loop-transition";
const sunnyToMoon = "line-md:moon-to-sunny-outline-loop-transition";

function Card({ image, title, description, GoToprojectUrl }) {
  
  const { isSunny, setIsSunny } = useContext(SunnyContext);
  const toggleIcon = () => {
    setIsSunny(!isSunny);
    console.log(isSunny);
  };

  return (
    <motion.div className={`flex flex-col items-center gap-y-3 w-52 h-52 sm:w-80 sm:h-80 2xl:w-96 2xl:h-96 ${isSunny ? 'bg-DarkCardBg' : 'bg-LightCardBg'} transition-colors duration-300 rounded-lg`}>
      <img src={image} alt={title} className='w-full h-[60%]' />
      <h1 className={`w-[90%] text-start font-bold 2xl:text-lg ${isSunny? 'text-white' : 'text-black'}`}>hola</h1>
      <p className='w-[90%] text-start 2xl:text-lg text-gray-400'>hola</p>
      <button onClick={GoToprojectUrl} className='hover:bg-[#1ED760] m-1 ml-1 text-center rounded-lg w-[90%] 2xl:h-10 2xl:text-lg font-semibold bg-Green'>Launch Project {`>`} </button>
    </motion.div>
  )
}

export default Card