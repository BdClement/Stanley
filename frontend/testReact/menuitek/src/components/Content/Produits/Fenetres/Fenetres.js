import { FaCheckCircle } from "react-icons/fa";

import FenetrePVC from '../../../../assets/FenetrePVC.webp'
import FenetreAlu from '../../../../assets/FenetreAlu.png'
import FenetreBois from '../../../../assets/FenetreBois.webp'

function Fenetres() {
    return (
        <>
            <div className='flex flex-col gap-6 md:gap-10 xl-gap-14'>
                <h1 className=" text-center xl:pb-6 text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl font-bold">Fenêtres</h1>
                <div className=''>
                    <p className="p-6 md:p-10 xl:p-16 text-justify border-y border-brun-contrast/60">
                        La gamme de fenêtre proposé par Menuitek est un des produits phare du catalogue.<br/>
                        Chaque fenêtre proposée est une solution éprouvée, entièrement préparée pour faire face parfaitement aux situations pour lesquelles elle a été prévue.<br/>
                        Menuitek s'efforce de proposer une large gamme répondant à vos besoins.
                    </p>
                </div>
                <div className='flex flex-col gap-[6vh] xl:gap-[8vh] 2xl:gap-[10vh] py-10 xl:py-20'>
                    <div className="py-2 md:py-4 md:mx-20 xl:mx-40 flex flex-col md:flex-row items-center md:items-stretch gap-2 md:gap-4 xl-gap-8 bg-white rounded">
                        <img src={FenetrePVC} alt='Fenetre en PVC' className='w-1/2 xl:w-1/3 2xl:1/4 h-auto object-contain rounded'></img>
                        <div className='py-2 md:py-4 xl:py-8 px-6 md:px-8 xl:px-10 flex flex-col justify-between gap-2 md:gap-4 xl-gap-8 text-grey-contrast'>
                            <h2 className="font-semibold uppercase">Fenêtres en PVC</h2>
                            <p className='text-justify'>Les fenêtres en PVC conviennent aussi bien aux maisons individuelles qu'aux immeubles collectifs.</p>
                            <button className='py-2 xl:py-4 px-2 lg:px-4 xl:px-6 self-end border rounded-full hover:bg-brun-contrast hover:text-beige-contrast transition duration:300'>Découvrir</button>
                        </div>
                    </div>
                    <div className="py-2 md:py-4 md:mx-20 xl:mx-40 flex flex-col md:flex-row items-center md:items-stretch gap-2 md:gap-4 xl-gap-8 bg-white rounded">
                        <img src={FenetreAlu} alt='Fenetre en PVC' className='w-1/2 xl:w-1/3 2xl:1/4 h-auto object-contain rounded'></img>
                        <div className='py-2 md:py-4 xl:py-8 px-6 md:px-8 xl:px-10 flex flex-col justify-between gap-2 md:gap-4 xl-gap-8 text-grey-contrast'>
                            <h2 className="font-semibold uppercase">Fenêtres en aluminium</h2>
                            <p className='text-justify'> Durabilité, simplicité, fonctionnalité et sécurité sont parmi les nombreux avantages de la menuiserie en aluminium.</p>
                            <button className='py-2 xl:py-4 px-2 lg:px-4 xl:px-6 self-end border rounded-full hover:bg-brun-contrast hover:text-beige-contrast transition duration:300'>Découvrir</button>
                        </div>
                    </div>
                    <div className="py-2 md:py-4 md:mx-20 xl:mx-40 flex flex-col md:flex-row items-center md:items-stretch gap-2 md:gap-4 xl-gap-8 bg-white rounded">
                        <img src={FenetreBois} alt='Fenetre en PVC' className='w-1/2 xl:w-1/3 2xl:1/4 h-auto object-contain rounded'></img>
                        <div className='py-2 md:py-4 xl:py-8 px-6 md:px-8 xl:px-10 flex flex-col justify-between gap-2 md:gap-4 xl-gap-8 text-grey-contrast'>
                            <h2 className="font-semibold uppercase">Fenêtres en Bois</h2>
                            <p className='text-justify'>Des profilés solides composés de trois ou quatre couches de bois, avec quatre couches de vernis pour garantir une utilisation durable.</p>
                            <button className='py-2 xl:py-4 px-2 lg:px-4 xl:px-6 self-end border rounded-full hover:bg-brun-contrast hover:text-beige-contrast transition duration:300'>Découvrir</button>
                        </div>
                    </div>
                </div>
                <div className="p-6 md:p-10 xl:p-16 border-t border-brun-contrast/60">
                    <div className="flex gap-2 md:gap-4 xl-gap-8 items-center text-brun-contrast justify-center">
                        <FaCheckCircle/>
                        <h3 className="font-semibold text-brun-contrast uppercase">Isolation thermique et accoustique</h3>
                    </div>
                    <p className="pt-6 md:pt-10 xl:pt-16 text-justify ">
                        Nos fenêtres offrent une protection contre les facteurs indésirables les plus importants.
                        Tout d'abord, c'est le froid, qui n'aura pas accès aux intérieurs.
                        Vous pouvez également compter sur une protection efficace contre le bruit, les rafales de vent et l'eau.
                        Choisir nos fenêtres isolantes, équipées de joints de fenêtre impeccables peut signifier une réduction des pertes de chaleur allant jusqu'à plusieurs dizaines de pour cent, ce qui réduit considérablement les coûts de chauffage.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Fenetres;