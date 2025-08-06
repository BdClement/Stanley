import FenetreImg from '../../../assets/Fenetre.jpg'
import window from '../../../assets/Fenetre1.jpeg'
import volets from '../../../assets/Volets.jpg'
import stores from '../../../assets/stores.jpg'
import porte from '../../../assets/Porte.jpg'

import { GiReceiveMoney } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";
import { FaPalette } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";

import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

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
            <ul className='flex flex-wrap min-h-[35vh] justify-evenly gap-6 py-6 lg:py-12 xl:py-20 border-t border-grey-contrast/70'>
                <li className='flex flex-col justify-evenly w-full sm:w-[48%] lg:w-[22%] h-[12vh] md:h-[15vh] lg:h-[30vh] xl:h-[40vh] 2xl:h-[50vh] p-4 rounded-md bg-cover bg-center hover:scale-105 transition duration-300' style={{ backgroundImage: `url(${window})`}}>
                    <div className='flex flex-col justify-evenly w-[60%] h-[100%] lg:h-[60%] lg:w-[100%] bg-white/30 backdrop-blur-sm text-grey-main rounded-md'>
                        <h3 className='text-xl font-semibold mb-2'>Fenetres</h3>
                        <p>Esthétiques, isolantes et durables</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly w-full sm:w-[48%] lg:w-[22%] h-[12vh] md:h-[15vh] lg:h-[30vh] xl:h-[40vh] 2xl:h-[50vh] p-4 rounded-md bg-cover hover:scale-105 transition duration-300' style={{ backgroundImage: `url(${volets})`}}>
                    <div className='flex flex-col justify-evenly w-[60%] h-[100%] lg:h-[60%] lg:w-[100%] bg-white/30 backdrop-blur-sm text-grey-main rounded-md'>
                        <h3 className='text-xl font-semibold mb-2'>Volets</h3>
                        <p>Robustes et élégants</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly w-full sm:w-[48%] lg:w-[22%] h-[12vh] md:h-[15vh] lg:h-[30vh] xl:h-[40vh] 2xl:h-[50vh] p-4 rounded-md bg-cover bg-center hover:scale-105 transition duration-300' style={{ backgroundImage: `url(${stores})`}}>
                    <div className='flex flex-col justify-evenly w-[60%] h-[100%] lg:h-[60%] lg:w-[100%] bg-white/30 backdrop-blur-sm text-grey-main rounded-md'>
                        <h3 className='text-xl font-semibold mb-2'>Stores et moustiquaires</h3>
                        <p>Pratiques et adaptés à vos besoins</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly relative w-full sm:w-[48%] lg:w-[22%] h-[12vh] md:h-[15vh] lg:h-[30vh] xl:h-[40vh] 2xl:h-[50vh] p-4 rounded-md bg-cover bg-center hover:scale-105 transition duration-300' style={{ backgroundImage: `url(${porte})`}}>
                    <div className='flex flex-col justify-evenly w-[60%] h-[100%] lg:h-[60%] lg:w-[100%] bg-white/30 backdrop-blur-sm text-grey-main rounded-md'>
                        <h3 className='text-xl font-semibold mb-2'>Portes interieures et exterieures</h3>
                        <p>Sécurité et design réunis</p>
                    </div>
                </li>
            </ul>
            <p>Autre information importante sur les produits proposes a place ici ?</p>
        </div>
        
        {/* Faire ANIMATION au scroll => check npm install framer-motion */}
        <div className='flex flex-col gap-4 lg:gap-8 xl:gap-12 min-h-[70vh] py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] rounded-[0%_0%_50%_50%_/_25%_25%_5%_5%] bg-gradient-to-b from-grey-main to-grey-contrast/30 border-t border-beige-main/30 text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl'>
            <p className='font-semibold text-brun-contrast'>LES AVANTAGES MENUITEK</p>
            <ul className='flex flex-wrap justify-between gap-4 lg:gap-8 2xl:gap-12 py-4 lg:py-8 2xl:py-20'>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] h-[8vh] md:h-[12vh] lg:h-[18vh] xl:h-[24vh]'>
                    <h3 className='font-semibold'>Rapport qualite/prix</h3>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <GiReceiveMoney className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Nous oeuvrons pour rendre la menuiserie de qualite accessible.</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] h-[8vh] md:h-[12vh] lg:h-[18vh] xl:h-[24vh]'>
                    <h3 className='font-semibold'>Accompagement personnalise</h3>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaHandshake className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Une entreprise familiale, a taille humaine, a l'ecoute de vos besoins.</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] h-[8vh] md:h-[12vh] lg:h-[18vh] xl:h-[24vh]'>
                    <p className='font-semibold'>Expertise et savoir-faire</p>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaTools className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Menuitek allie precision et maitrise des materiaux.</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] h-[8vh] md:h-[12vh] lg:h-[18vh] xl:h-[24vh]'>
                    <p className='font-semibold'>Reactivite et delais matrises</p>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaUserClock className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Delais de livraison de maximum 3 a 4 semaines.</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] h-[8vh] md:h-[12vh] lg:h-[18vh] xl:h-[24vh]'>
                    <p className='font-semibold'>Offre fournie et personnalisable</p>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaPalette className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Alu - PVC - Bois - Mixte</p>
                        <p className='font-extralight text-center'>Choix de couleurs et de finitions multiples.</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] h-[8vh] md:h-[12vh] lg:h-[18vh] xl:h-[24vh]'>
                    <p className='font-semibold'>Performance et durabilite</p>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaLeaf className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Isolation thermique et accoustique importante pour un gain en confort, des economies d'energie et une empreinte carbone reduite</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] h-[10vh] md:h-[16vh] lg:h-[22vh] xl:h-[28vh]'>
                    <p className='font-semibold'>Engagement qualite</p>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaClipboardCheck className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Aggree RGE, nos produits sont conformes aux normes en vigueur</p>
                        <p className='font-extralight text-center'>Respect des normes environnementales</p>
                    </div>
                </li>
                
            </ul>
        </div>

        <div className='flex flex-col gap-4 lg:gap-8 xl:gap-12 min-h-[70vh] py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl'>
            <p className='font-semibold text-brun-contrast'>AVIS</p>
            <div className='flex flex-col items-center'>
                <BiSolidQuoteAltRight className='text-brun-contrast size-16 md:size-24 lg:size-28 xl:size-36'/>
                <p className='italic text-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 5xl:text-6xl'>Bon rapport qualité/prix. Les fenêtres sont de qualité et esthétiques. Je recommande vivement !</p>
                <p className='text-beige-contrast font-light pt-2 lg:pt-6 2xl:pt-10'>Arnaud.B / Professionnel</p>
                <div className='flex flex-row text-beige-contrast/90'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <BiSolidQuoteAltRight className='text-brun-contrast size-16 md:size-24 lg:size-28 xl:size-36'/>
                <p className='italic text-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 5xl:text-6xl'>Travail impeccable, sur-mesure et dans les délais.</p>
                <p className='text-beige-contrast font-light pt-2 lg:pt-6 2xl:pt-10'>Phillipe.G / Particulier</p>
                <div className='flex flex-row text-beige-contrast/90'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <BiSolidQuoteAltRight className='text-brun-contrast size-16 md:size-24 lg:size-28 xl:size-36'/>
                <p className='italic text-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 5xl:text-6xl'>Un vrai accompagnement du début à la fin, un travail soigné et de bons conseils. Merci Menuitek !</p>
                <p className='text-beige-contrast font-light pt-2 lg:pt-6 2xl:pt-10'>Lionel.P / Particulier</p>
                <div className='flex flex-row text-beige-contrast/90'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
        </div>

        <div className='h-[70vh] flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] bg-gradient-to-t from-grey-main to-grey-contrast/30 text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl'>Dernier element : Invitations a agir liens vers Devis</div>
        </>
    )
}

export default Accueil;

//Premiere page un peu pub Ce qu'est Menuitek Reellement "Menuitek vous accompagne dans tout vos projets" => Animation a faire
// NOS PRODUITS
// LES AVANTAGES MENUITEK
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

// Check reutilisation des memes classes 
// Check animation scroll
// Check animation Avis
// Check espacement supplementaires 