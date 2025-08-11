import { RiMenuFill } from "react-icons/ri";

function Navbar({ isOpen, setIsOpen }) {
    return (
        <nav className='w-full opacity-0 animate-slide-in-down flex flex-col sm:flex-row lg:text-lg 2xl:text-xl flex-wrap sticky top-0 z-50 sm:h-[3vh] lg:h-[8vh] 2xl:h-[6vh] min-h-[6vh] bg-beige-main text-grey-main shadow'>
            <ul className="flex flex-row w-full sm:w-[40%] md:w-[37%] h-full items-center justify-evenly">
                <li className="relative group p-2">
                    <span>Accueil</span>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 md:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group p-2">
                    <span className="flex flex-row items-center gap-3" onMouseEnter={() => setIsOpen(true)} onClick={() => setIsOpen(!isOpen)}><RiMenuFill/>Nos produits</span>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 md:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>
            <ul className="flex flex-row w-full sm:w-[30%] md:w-[38%] h-full border-double max-sm:border-y-4 max-sm:border-brun-contrast/50 sm:border-x-4 sm:border-brun-contrast/50 gap-5 items-center justify-evenly">
                <li  className="relative group p-2">
                    <span>Nous connaître</span>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 md:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group p-2">
                    <span>Inspirations</span>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 md:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>
            <ul className="flex flex-row w-full sm:w-[25%] md:w-[25%] h-full items-center justify-center">
                <li className="relative group p-2">
                    <span className="px-3 py-1 sm:py-2 lg:py-2 rounded-full bg-brun-contrast text-beige-contrast hover:bg-beige-contrast hover:text-grey-main hover:border-2 hover:border-brun-contrast transition duration:300">Demandez un devis</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;