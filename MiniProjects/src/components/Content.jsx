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
            {isBelowBreakpoint && (<div className={`flex flex-col h-screen ${isSunny ? "bg-DarkBg" : "bg-LightBg"}`}>
                <Navbar />
                <div className='flex flex-col items-center justify-center flex-grow'>
                    <h1 className='w-full h-full m-10 text-white'>
                        <form className='flex flex-col items-center justify-center mt-1 mb-1 w-full'>
                            <motion.input
                                {...fadeAnimation}
                                className={`${isSunny ? 'bg-InputGray text-white placeholder:text-gray-500' : 'bg-white text-InputGray placeholder:text-gray-500'}  p-2 rounded-md w-[40vh] font-medium outline-none`}
                                type='text'
                                placeholder='Search projects...' />
                        </form>
                    </h1>
                </div>
            </div>)}
            {/*desktup*/}
            {isAboveBreakpoint && (<div className={`flex flex-row h-screen ${isSunny ? "bg-DarkBg" : "bg-LightBg"}`}>
                <div>
                    <Sidebar />
                </div>
            </div>
            )}
        </>
    );
}

export default Content;