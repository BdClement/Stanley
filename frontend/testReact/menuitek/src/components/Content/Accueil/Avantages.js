import { GiReceiveMoney } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";
import { FaPalette } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";

function Avantages() {
    return (
        // Faire ANIMATION au scroll => check npm install framer-motion 
        <div className='flex flex-col gap-4 lg:gap-8 xl:gap-12 min-h-[70vh] py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] rounded-[0%_0%_50%_50%_/_25%_25%_5%_5%] bg-gradient-to-b from-grey-main to-brun-contrast/30 border-t border-beige-contrast/80'>
            <p className='font-semibold text-brun-dark'>LES AVANTAGES MENUITEK</p>
            <ul className='flex flex-wrap justify-between gap-4 lg:gap-8 2xl:gap-12 py-4 lg:py-8 2xl:py-20'>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] min-h-[12vh] md:min-h-[18vh] lg:min-h-[24vh] xl:min-h-[28vh]'>
                    <h3 className='font-semibold text-brun-dark'>Rapport qualité/prix</h3>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <GiReceiveMoney className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Nous oeuvrons pour rendre la menuiserie de qualité accessible.</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] min-h-[12vh] md:min-h-[18vh] lg:min-h-[24vh] xl:min-h-[28vh]'>
                    <h3 className='font-semibold text-brun-dark'>Accompagement personnalisé</h3>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaHandshake className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Une entreprise familiale, à taille humaine, à l'écoute de vos besoins.</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] min-h-[12vh] md:min-h-[18vh] lg:min-h-[24vh] xl:min-h-[28vh]'>
                    <p className='font-semibold text-brun-dark'>Expertise et savoir-faire</p>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaTools className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Menuitek allie précision et maîtrise des matériaux.</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] min-h-[12vh] md:min-h-[18vh] lg:min-h-[24vh] xl:min-h-[28vh]'>
                    <p className='font-semibold text-brun-dark'>Reactivité et délais matrisés</p>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaUserClock className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Délais de livraison de maximum 3 à 4 semaines.</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] min-h-[12vh] md:min-h-[18vh] lg:min-h-[24vh] xl:min-h-[28vh]'>
                    <p className='font-semibold text-brun-dark'>Offre fournie et personnalisable</p>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaPalette className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Alu - PVC - Bois - Mixte</p>
                        <p className='font-extralight text-center'>Choix de couleurs et de finitions multiples.</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] min-h-[12vh] md:min-h-[18vh] lg:min-h-[24vh] xl:min-h-[28vh]'>
                    <p className='font-semibold text-brun-dark'>Performance et durabilité</p>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaLeaf className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Isolation thermique et accoustique importante pour un gain en confort, des économies d'énergie et une empreinte carbone réduite</p>
                    </div>
                </li>
                <li className='flex flex-col justify-evenly items-center w-full sm:w-[48%] lg:w-[30%] min-h-[12vh] md:min-h-[18vh] lg:min-h-[24vh] xl:min-h-[28vh]'>
                    <p className='font-semibold text-brun-dark'>Engagement qualité</p>
                    <div className='flex flex-col flex-grow justify-evenly items-center'>
                        <FaClipboardCheck className='text-brun-contrast size-6 md:size-8 lg:size-10 xl:size-16 2xl:size-20'/>
                        <p className='font-extralight text-center'>Aggrée RGE, nos produits sont conformes aux normes en vigueur</p>
                        <p className='font-extralight text-center'>Respect des normes environnementales</p>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default Avantages;