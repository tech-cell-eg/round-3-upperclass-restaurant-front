import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavBarProps {
    postionClass?: boolean; 
}
const NavBar: React.FC<NavBarProps> = ({ postionClass =true}) => {
const [isBarsMenuOpen, setIsBarsMenuOpen] = useState(false);
const [isHoursMenuOpen, setIsHoursMenuOpen] = useState(false);

return (
    <div
        className={`bg-white p-4 rounded-full flex gap-4 items-center justify-center text-center mx-auto mb-4 absolute bottom-4 z-20 ${postionClass ? 'left-1/2 transform -translate-x-1/2' : ''}`}
    >
      {/* Bars Icon Hover */}
    <div
        onMouseEnter={() => setIsBarsMenuOpen(true)}
        onMouseLeave={() => setIsBarsMenuOpen(false)}
        className="relative"
    >
        <i className='pi pi-bars text-icon_inverse text-xl cursor-pointer'></i>
        <AnimatePresence>
        {isBarsMenuOpen && (
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-0 bg-white rounded-md shadow-md p-2 w-48 mb-2 z-30"
            >
            <ul className="space-y-1">
                <li><a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax">Pages</a></li>
                <li>
                <a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                    Menu <i className='pi pi-arrow-right'></i>
                </a>
                </li>
                <li><a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax">Restaurant <i className='pi pi-arrow-right'></i></a></li>
                <li><a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax">Contact <i className='pi pi-arrow-right'></i></a></li>
                <li><a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax">Shop <i className='pi pi-arrow-right'></i></a></li>
                <li><a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax">Blog <i className='pi pi-arrow-right'></i></a></li>
            </ul>
            </motion.div>
        )}
        </AnimatePresence>
    </div>

    {/* Open Hours Hover */}
    <div
        onMouseEnter={() => setIsHoursMenuOpen(true)}
        onMouseLeave={() => setIsHoursMenuOpen(false)}
        className="relative"
    >
        <i className='pi pi-clock text-icon_inverse text-xl cursor-pointer'></i>
        <AnimatePresence>
        {isHoursMenuOpen && (
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-0 bg-white rounded-md shadow-md p-2 w-48 mb-2 z-30"
            >
            <div>
                <h3 className="font-semibold mb-2 text-left text-text_inverse font-chillax">Opening Hours</h3>
                <div className='flex justify-between'>
                <p className="font-medium font-chillax">Mon</p>
                <p className="float-right font-chillax">closed</p>
                </div>
                <div className='flex justify-between'>
                <p className="font-medium font-chillax">Tue - Fri</p>
                <p className="float-right font-chillax">4pm - 8pm</p>
                </div>
                <div className='flex justify-between'>
                <p className="font-medium font-chillax">Sat - Sun</p>
                <p className="float-right font-chillax">5pm - 11pm</p>
                </div>
            </div>
            </motion.div>
        )}
        </AnimatePresence>
    </div>

    <Link to="#"><i className='pi pi-shopping-cart text-icon_inverse text-xl'></i></Link>
    <Link to="#" className='font-chillax text-text_inverse hidden md:block'>Menu</Link>
    <Link to="#" className='font-chillax text-text_inverse hidden md:block'>Restaurant</Link>
    <Link to="#" className='font-chillax text-text_inverse hidden md:block'>Classes</Link>
    <button className="group relative bg-bg_default sm:text-base text-text_default px-4 py-2 rounded-full overflow-hidden h-10 w-40">
<div className="flex flex-col group-hover:animate-scrollUpDown">
    <span className="h-8 flex items-center justify-center">Book A Table</span>
    <span className="h-8 flex items-center justify-center">Book A Table</span>
</div>
</button>


    </div>
);
};

export default NavBar;
