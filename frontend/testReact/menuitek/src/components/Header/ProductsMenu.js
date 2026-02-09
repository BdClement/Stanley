import { Link } from "react-router-dom";

function ProductsMenu({ isOpen }) {
    return (
        <div className={`bg-brun-main text-brun_contrast flex flex-col md:flex-row md:justify-evenly gap-6 lg:text-lg 2xl:text-xl px-12 md:px-6 py-6 pb-10 animate-zoom-in ${isOpen ? "block" : "hidden"}`}>
            <div className='flex flex-col gap-2 2xl:gap-6'>
                <div className='relative group self-start'>
                    <Link to='categories/fenetres' className='text-brun-contrast font-semibold'>Fenêtres</Link>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ul className='flex flex-col gap-2 2xl:gap-4 border-t border-brun-contrast md:border-none py-1'>
                    <li className="relative group self-start">
                        <Link to='categories/fenetres/fenetresPVC'>Fenêtres en PVC</Link>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <Link to='categories/fenetres/fenetresAlu'>Fenêtres en Alu</Link>
                        <span className="absolute bottom-[0.2rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <Link to='categories/fenetres/fenetresBois'>Fenêtres en bois</Link>
                        <span className="absolute bottom-[0.2rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 2xl:gap-6'>
                <div className='relative group self-start'>
                    <Link to='categories/portes' className='text-brun-contrast font-semibold'>Portes</Link>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ul className='flex flex-col gap-2 2xl:gap-4 border-t border-brun-contrast md:border-none py-1'>
                    <li className="relative group self-start">
                        <Link to='categories/portes/portesPVC'>Portes d'entrée en PVC</Link>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <Link to='categories/portes/portesAlu'>Portes d'entrée en Alu</Link>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <Link to='categories/portes/portesBois'>Portes d'entrée en bois</Link >
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    {/* <li className="relative group self-start">
                        <span>Portes d'entrée en acier</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <span>Portes intérieures en acier</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li> */}
                </ul>
            </div>
            <div className='flex flex-col gap-2 2xl:gap-6'>
                <div className='relative group self-start'>
                    <Link to='categories/volets' className='text-brun-contrast font-semibold'>Volets</Link>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ul className='flex flex-col gap-2 2xl:gap-4 border-t border-brun-contrast md:border-none py-1'>
                    <li className="relative group self-start">
                        <Link to='categories/volets/voletsRoulants'>Volets roulants</Link>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <Link to='categories/volets/voletsBattantsBois'>Volets battants en bois</Link>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group self-start">
                        <Link to='categories/volets/voletsBattantsAlu'>Volets battants en aluminium</Link>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>
            {/* <div className='flex flex-col gap-2 2xl:gap-6'>
                <div className='relative group self-start'>
                    Routage a FAIRE
                    <p className='text-brun-contrast font-semibold'>Stores et moustiquaires</p>
                    <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                </div>
                <ul className='flex flex-col gap-2 2xl:gap-4 border-t border-beige-contrast md:border-none py-1'>
                    <li className="relative group self-start">
                        <span>Tout voir</span>
                        <span className="absolute bottom-[0.3rem] sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:h-[2px] w-0 bg-brun-contrast transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default ProductsMenu;