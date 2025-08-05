import FenetreImg from '../../../assets/Fenetre.jpg'
// import FenetreIcon from '../../../assets/window.png'
// import VoletIcon from '../../../assets/Volets.png'
// import StoreIcon from '../../../assets/StoresIcon.png'
// import DoorIcon from '../../../assets/DoorIcon.png'
import window from '../../../assets/Window.jpg'
import volets from '../../../assets/Volets.jpg'

function Accueil() {
    return (
        <>
        <div className='flex flex-row gap-4 xl:gap-0 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl opacity-0 animate-zoom-in'>
            <div className='flex flex-col justify-between gap-2 md:gap-6 lg:gap-12 xl:gap-20 w-1/2 h-auto'>
                <p className='flex 2xl:items-center h-[50%] 2xl:h-[75%] text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl pb-4 border-2 2xl:border-4 border-grey-main border-b-beige-main/80'>
                    Menuitek,<br/>l'excellence de la menuiserie a votre portee
                </p>
                <p className='text-right py-4'>Choisissez le meilleur pour vos projets sur mesure, en neuf comme en rénovation.</p>
                <p className='text-right italic'>Qualité supérieure, produits durables, prix imbattables</p>
            </div>
            <img src={FenetreImg} alt='Fenetre avec vue sur la nature' className='w-1/2 xl:w-1/3 2xl:1/4 ml-auto h-auto object-cover rounded-b-xl rounded-t-full shadow-lg'></img>
        </div>

        <div className='flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] bg-gradient-to-t from-grey-main to-grey-contrast/30 text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl'>
            <p className='font-semibold text-brun-contrast'>NOS SOLUTIONS</p>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-12'>
                <p className='flex-auto text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 5xl:text-6xl'>Une large gamme de produits</p>
                <button className='bg-grey-contrast text-beige-main rounded-full p-2 xl:p-4 hover:bg-beige-main hover:text-grey-main transition duration:300'>Devouvrir tous nos produits</button>
            </div>
            <p>Que ce soit pour des projets neufs ou en renovation, nos solutions peuvent etre sur mesure et personnalisable.</p>
            <ul className='flex flex-wrap min-h-[35vh] justify-evenly gap-6 py-6 lg:py-10 border-t border-grey-contrast/70'>
                <li className='flex flex-col justify-evenly w-full sm:w-[48%] lg:w-[22%] bg-grey-contrast p-4 rounded-md bg-cover hover:scale-105 transition duration-300' style={{ backgroundImage: `url(${window})`}}>
                    <div className='flex flex-col justify-evenly w-[60%] h-[100%] lg:h-[60%] lg:w-[100%] bg-white/30 backdrop-blur-sm text-grey-main rounded-md'>
                        <h3 className='text-xl font-semibold mb-2'>Fenetres</h3>
                        <p>Esthétiques, isolantes et durables</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly w-full sm:w-[48%] lg:w-[22%] bg-grey-contrast p-4 rounded-md bg-cover hover:scale-105 transition duration-300' style={{ backgroundImage: `url(${volets})`}}>
                    <div className='flex flex-col justify-evenly w-[60%] h-[100%] lg:h-[60%] lg:w-[100%] bg-white/30 backdrop-blur-sm text-grey-main rounded-md'>
                        <h3 className='text-xl font-semibold mb-2'>Volets</h3>
                        <p>Robustes et élégants</p>
                    </div>
                    {/* <img src={VoletIcon} alt='Volet Icon' className='mx-auto'></img> */}
                </li>
                <li className='flex flex-col justify-evenly w-full sm:w-[48%] lg:w-[22%] bg-grey-contrast p-4 rounded-md hover:scale-105 transition duration-300'>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Stores et moustiquaires</h3>
                        <p>Pratiques et adaptés à vos besoins</p>
                    </div>
                    {/* <img src={StoreIcon} alt='store Icon' className='mx-auto'></img> */}
                </li>
                <li className='flex flex-col justify-evenly relative w-full sm:w-[48%] lg:w-[22%] bg-grey-contrast p-4 rounded-md hover:scale-105 transition duration-300'>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Portes interieures et exterieures</h3>
                        <p>Sécurité et design réunis</p>
                    </div>
                    {/* <img src={DoorIcon} alt='door Icon' className='mx-auto w-12 sm:w-16 lg:w-24 xl:w-28 2xl:w-32 h-auto'></img> */}
                </li>
            </ul>
        </div>
        
        <div className='h-[70vh] rounded-[0%_0%_50%_50%_/_25%_25%_5%_5%] bg-gradient-to-b from-grey-main to-grey-contrast/30'>Encore un element</div>
        <div className='h-[70vh]'>Dernier element</div>
        </>
    )
}

export default Accueil;

// import { GiWindow } from "react-icons/gi"; //Volet
// import { GiWindowBars } from "react-icons/gi";// Fenetre

//Premiere page un peu pub Ce qu'est Menuitek Reellement "Menuitek vous accompagne dans tout vos projets" => Animation a faire
    //Titre + Slogan
    // image => Shadow beige ??
    // Materiaux durables  / Agree RGE icon ? / icone bois feuille outils ?
//Les avantages
// Ce que menuitek peut faire : Sur-mesure, menuiseries, pariculiers/pro, renovation extensions, gammes bois alu pvm mixte
// Decouvrez une gamme de produit complete / Notre expertise pour vos projet sur mesure
// Les avis
// Initations a agir => Lien Devis

//Styles degrade de couleur
// Forme des bordure en curve
// box shadow
// mix-blend
// mask-clip image
// mask-image
// mask-radial
// rotate
// rounded-[0%_0%_50%_50%_/_25%_25%_5%_5%]

// px-4 md:px-6 lg:px-10 xl:px-12 2xl:px-20