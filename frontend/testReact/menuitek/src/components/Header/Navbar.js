import { Link } from 'react-router-dom';
import { RiMenuFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

import ProductsMenu from './ProductsMenu';

function Navbar({ isOpen, setIsOpen }) {
    return (
        <>
        <nav className='relative w-full opacity-0 animate-slide-in-down flex flex-col sm:flex-row lg:text-lg 2xl:text-xl sm:flex-wrap sticky top-0 z-50 h-[20vh] sm:h-[3vh] lg:h-[8vh] 2xl:h-[6vh] min-h-[6vh] bg-beige-main text-grey-main shadow'>
            <ul className="flex flex-row w-full flex-1 h-full items-center justify-evenly">
                <li className="relative group p-2">
                    <Link to='/' className='hover:text-brun-contrast'><FaHome/></Link>
                    {/* <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 md:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span> */}
                </li>
                <li className="relative group p-2">
                    <span className="flex flex-row items-center gap-3" onMouseEnter={() => setIsOpen(true)} onClick={() => setIsOpen(!isOpen)}>
                        <RiMenuFill/>Nos produits
                    </span>
                    {/* <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 md:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span> */}
                </li>
            </ul>
            <ul className="flex flex-row w-full flex-1 h-full border-double max-sm:border-y-4 max-sm:border-brun-contrast/50 sm:border-x-4 sm:border-brun-contrast/50 items-center justify-evenly">
                <li className="relative group p-2">
                    <Link to='/nous-connaitre/' className='hover:text-brun-contrast'>Nous connaître</Link>
                    {/* <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 md:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span> */}
                </li>
                <li className="relative group p-2">
                    <span className='hover:text-brun-contrast mr-16 sm:mr-0'>Inspirations</span>
                    {/* <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 md:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span> */}
                </li>
            </ul>
            <ul className="flex flex-row w-full flex-1 h-full items-center justify-center">
                <li className="relative group p-2">
                    <Link to='/devis/' className="px-3 py-1 sm:py-2 lg:py-2 rounded-full bg-brun-contrast text-beige-contrast hover:bg-beige-contrast hover:text-grey-main hover:border-2 hover:border-grey-contrast hover:text-grey-contrast transition duration:300">Demandez un devis</Link>
                </li>
            </ul>
            <div className="absolute top-full left-0 w-full sm:h-full" onMouseLeave={() => setIsOpen(false)}>
                <ProductsMenu 
                    isOpen={isOpen}
                />
            </div>
        </nav>
        </>
    )
}

export default Navbar;