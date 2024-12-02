import { Card, Sidebar, Navbar } from './index';
import React, { useContext } from 'react';
import { SunnyContext } from '../config/SunnyContext.jsx';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../config/motion';
import useResponsive from '../hooks/useResponsive';


function Content() {
    const { isSunny } = useContext(SunnyContext);
    const { isAboveBreakpoint, isBelowBreakpoint } = useResponsive(900);


    return (
        <>
            {/*mobile*/}
            {isBelowBreakpoint && (<div className={`h-screen ${isSunny ? "bg-DarkBg" : "bg-LightBg"} transition-colors duration-300`}>
                <Navbar />
                <div className='transition-colors duration-300 flex flex-col items-center justify-center flex-grow'>
                    <h1 className='w-full h-full m-10 text-white'>
                        <form className='flex flex-col items-center justify-center mt-1 w-full'>
                            <motion.input
                                {...fadeAnimation}
                                className={`${isSunny ? 'bg-InputGray text-white placeholder:text-gray-500' : 'bg-white text-InputGray placeholder:text-gray-500'} transition-colors duration-300  p-2 rounded-md w-[40vh] font-medium outline-none`}
                                type='text'
                                placeholder='Search projects...' />
                        </form>
                    </h1>
                </div>
                <div className='sm:ml-10 ml-5'>
                    <Card />
                </div>
            </div>)}
            {/*desktup*/}
            {isAboveBreakpoint && (<div className={`flex flex-row h-screen ${isSunny ? "bg-DarkBg" : "bg-LightBg"} transition-colors duration-300`}>
                <div>
                    <Sidebar />
                </div>
                <div className='m-8'>
                    <Card />
                </div>
            </div>
            )}
        </>
    );
}

export default Content;