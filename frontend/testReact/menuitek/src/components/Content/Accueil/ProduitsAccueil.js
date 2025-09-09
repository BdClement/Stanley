import { Link } from 'react-router-dom'

import window from '../../../assets/Fenetres/Fenetre1.jpeg'
import volets from '../../../assets/Volets/Volets.jpg'
import stores from '../../../assets/StoresMoustiquaires/stores.jpg'
import porte from '../../../assets/Portes/Porte.jpg'

function ProduitsAccueil() {
    return (
        <div className='flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] bg-gradient-to-t from-grey-main to-grey-contrast/30'>
            <p className='font-semibold text-brun-contrast'>NOS SOLUTIONS</p>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-12'>
                <p className='flex-auto text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 5xl:text-6xl'>Une large gamme de produits</p>
                {/* <button className='bg-grey-contrast text-beige-main rounded-full p-2 xl:p-4 hover:bg-beige-main hover:text-grey-main transition duration:300'>Dévouvrir tous nos produits</button> */}
            </div>
            <p>Que ce soit pour des projets neufs ou en rénovation, nos solutions peuvent être sur mesure et personnalisable.</p>
            <ul className='flex flex-wrap min-h-[35vh] justify-evenly gap-6 py-6 lg:py-12 xl:py-20 border-t border-grey-contrast/70'>
                <Link to='/categories/fenetres/' className='flex flex-col justify-evenly w-full sm:w-[48%] lg:w-[22%] h-[18vh] md:h-[24vh] lg:h-[35vh] xl:h-[55vh] 2xl:h-[60vh] p-4 rounded-md bg-cover bg-center hover:scale-105 transition duration-300' style={{ backgroundImage: `url(${window})`}}>
                    <div className='flex flex-col justify-evenly w-[80%] lg:w-[100%] h-[100%] md:h-[90%] xl:h-[60%] bg-white/30 backdrop-blur-sm text-grey-main rounded-md p-2'>
                        <h3 className='text-lg lg:text-xl xl:text-2xl font-semibold mb-1'>Fenêtres</h3>
                        <p>Esthétiques, isolantes et durables</p>
                    </div>
                </Link>
                <Link to='/categories/portes/' className='flex flex-col justify-evenly relative w-full sm:w-[48%] lg:w-[22%] h-[18vh] md:h-[24vh] lg:h-[35vh] xl:h-[55vh] 2xl:h-[60vh] p-4 rounded-md bg-cover bg-center hover:scale-105 transition duration-300' style={{ backgroundImage: `url(${porte})`}}>
                    <div className='flex flex-col justify-evenly w-[80%] lg:w-[100%] h-[100%] md:h-[90%] xl:h-[60%] bg-white/30 backdrop-blur-sm text-grey-main rounded-md p-2'>
                        <h3 className='text-lg lg:text-xl xl:text-2xl font-semibold mb-1'>Portes intérieures et extérieures</h3>
                        <p>Sécurité et design réunis</p>
                    </div>
                </Link>
                <Link to='/categories/volets/' className='flex flex-col justify-evenly w-full sm:w-[48%] lg:w-[22%] h-[18vh] md:h-[24vh] lg:h-[35vh] xl:h-[55vh] 2xl:h-[60vh] p-4 rounded-md bg-cover hover:scale-105 transition duration-300' style={{ backgroundImage: `url(${volets})`}}>
                    <div className='flex flex-col justify-evenly w-[80%] lg:w-[100%] h-[100%] md:h-[90%] xl:h-[60%] bg-white/30 backdrop-blur-sm text-grey-main rounded-md p-2'>
                        <h3 className='text-lg lg:text-xl xl:text-2xl font-semibold mb-1'>Volets</h3>
                        <p>Robustes et élégants</p>
                    </div>
                </Link>
                <li className='flex flex-col justify-evenly w-full sm:w-[48%] lg:w-[22%] h-[18vh] md:h-[24vh] lg:h-[35vh] xl:h-[55vh] 2xl:h-[60vh] p-4 rounded-md bg-cover bg-center hover:scale-105 transition duration-300' style={{ backgroundImage: `url(${stores})`}}>
                    <div className='flex flex-col justify-evenly w-[80%] lg:w-[100%] h-[100%] md:h-[90%] xl:h-[60%] bg-white/30 backdrop-blur-sm text-grey-main rounded-md p-2'>
                        <h3 className='text-lg lg:text-xl xl:text-2xl font-semibold mb-1'>Stores et moustiquaires</h3>
                        <p>Pratiques et adaptés à vos besoins</p>
                    </div>
                </li>
            </ul>
            <p className='text-end'>Autre information importante sur les produits proposés à placer ici ?</p>
        </div>
    )
}

export default ProduitsAccueil;