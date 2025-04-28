import React, { useState, useRef, useContext } from 'react';
import { SunnyContext } from '../config/SunnyContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Sidebar from './Sidebar';
import { slideAnimation } from '../config/motion';

const menuClosed = "line-md:menu-to-close-transition";
const menuOpen = "line-md:close-to-menu-transition";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const { isSunny } = useContext(SunnyContext);


    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className=''>
            <motion.nav {...slideAnimation("down")} className={`transition-colors duration-300 w-full h-16 sm:h-24 flex items-center justify-between ${isSunny ? "bg-black" : "bg-LightBg"}`}>
                <motion.div className='flex items-center h-fit'>
                    <p className='text-4xl text-Green font-semibold h-fit pl-5 sm:text-[4.5vh] sm:pl-10 '>MiniProjects</p>
                </motion.div>
                <motion.button
                    className={`flex mr-8 w-fit h-fit justify-center items-center text-Green`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={toggleMenu}
                >
                    <Icon key={menu ? 'closed' : 'open'} icon={menu ? menuClosed : menuOpen} width="40" height="35" />
                </motion.button>
            </motion.nav>                           
            <AnimatePresence>
                {menu && (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ x: '-100%', opacity: 1, transition: { duration: 0.5 } }}
                        className='fixed inset-0 z-50 flex w-fit'
                    >
                        <div className='absolute bg-black'></div>
                        <Sidebar />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;