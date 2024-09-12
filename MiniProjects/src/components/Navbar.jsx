import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeAnimation, slideAnimation } from "../config/motion";
import { Icon } from '@iconify/react';
import { Sidebar } from '../components/index';

const menuClosed = "line-md:menu-to-close-transition";
const menuOpen = "line-md:close-to-menu-transition";

function Navbar() {
    const [menu, menuStatus] = useState(false);

    const toggleMenu = () => {
        menuStatus(!menu);
    };

    return (
        <div className=''>
            <AnimatePresence>
                <motion.nav {...slideAnimation("down")} className={`w-full h-16 flex items-center justify-between bg-black mt-3`}>
                    <motion.div className='flex items-center h-fit'>
                        <p className='text-4xl text-Green font-semibold h-fit pl-4'>MiniProjects</p>
                    </motion.div>
                    <motion.button
                        className={`flex mr-8 w-fit h-fit  justify-center items-center text-Green`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={toggleMenu}
                    >
                        <Icon key={menu ? 'closed' : 'open'} icon={menu ? menuClosed : menuOpen} width="40" height="35" />
                    </motion.button>
                </motion.nav>
                    {menu ? (
                        <motion.div {...slideAnimation("left")}
                            className='fixed inset-0 z-50 flex w-fit'
                        >
                            <div className='absolute bg-black'></div>
                            <Sidebar />
                        </motion.div>
                    ) : null}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;