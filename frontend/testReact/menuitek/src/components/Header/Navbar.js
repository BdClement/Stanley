function Navbar() {
    return (
        <nav className='flex flex-row flex-wrap sticky top-0 z-1 sm:h-[3vh] min-h-[6vh] bg-beige-contrast shadow'>
            <ul className="flex flex-row w-full sm:w-[35%] h-full items-center justify-evenly">
                <li className="relative group p-2">
                    <span>Nos produits</span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-beige-main transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group p-2">
                    <span>Avis clients</span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-beige-main transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>
            <ul className="flex flex-row w-full sm:w-[35%] h-full border-double max-sm:border-y-4 max-sm:border-beige-main/70 sm:border-x-4 sm:border-beige-main/70 gap-5 items-center justify-evenly">
                <li  className="relative group p-2">
                    <span>Nous connaitre</span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-beige-main transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group p-2">
                    <span>Inspirations</span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-beige-main transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>
            <ul className="flex flex-row w-full sm:w-[30%] h-full items-center justify-center">
                <li className="relative group p-2">
                    {/* <span>Demandez un devis</span> */}
                    <span className="p-2 border-b-2 border-grey-custom">Demandez un devis</span>
                    {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-full bg-beige-main transition-all duration-300 group-hover:w-full"></span> */}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;