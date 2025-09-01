function ProductsMenu({ isOpen }) {
    return (
        <div className={`bg-beige-main text-grey-main flex flex-col md:flex-row md:justify-evenly gap-6 lg:text-lg 2xl:text-xl px-12 md:px-6 py-6 pb-10 animate-zoom-in ${isOpen ? "block" : "hidden"}`}>
            <div className='flex flex-col gap-2 2xl:gap-6'>
                <div className='relative group self-start'>
                    <p className='text-brun-contrast font-semibold'>Fenêtres</p>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ul className='flex flex-col gap-2 2xl:gap-4 border-t border-beige-contrast md:border-none py-1'>
                    <li className="relative group self-start">
                        <span className='transform transition-transform duration-300 scale-100 hover:scale-125'>Fenêtres en PVC</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <span>Fenêtres en Alu</span>
                        <span className="absolute bottom-[0.2rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <span>Fenêtres en bois</span>
                        <span className="absolute bottom-[0.2rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 2xl:gap-6'>
                <div className='relative group self-start'>
                    <p className='text-brun-contrast font-semibold'>Portes</p>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ul className='flex flex-col gap-2 2xl:gap-4 border-t border-beige-contrast md:border-none py-1'>
                    <li className="relative group self-start">
                        <span>Portes d'entrée en PVC</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <span>Portes d'entrée en Alu</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <span>Portes d'entrée en bois</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <span>Portes d'entrée en acier</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <span>Portes intérieures en acier</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 2xl:gap-6'>
                <div className='relative group self-start'>
                    <p className='text-brun-contrast font-semibold'>Volets</p>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ul className='flex flex-col gap-2 2xl:gap-4 border-t border-beige-contrast md:border-none py-1'>
                    <li className="relative group self-start">
                        <span>Sous section Volets 1</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <span>Sous section Volets 2</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 2xl:gap-6'>
                <div className='relative group self-start'>
                    <p className='text-brun-contrast font-semibold'>Stores et moustiquaires</p>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ul className='flex flex-col gap-2 2xl:gap-4 border-t border-beige-contrast md:border-none py-1'>
                    <li className="relative group self-start">
                        <span>Pas de sous section</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductsMenu;