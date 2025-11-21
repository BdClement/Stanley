import FenetreImg from '../../../assets/Fenetres/Fenetre.jpg'

function IntroAccueil() {
    return (
        // Ancienne version
        // <div className='flex flex-row gap-4 xl:gap-0 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in'>
        //     <div className='flex flex-col justify-between gap-2 md:gap-6 lg:gap-12 xl:gap-20 w-1/2 h-auto'>
        //         <p className='flex 2xl:items-center h-[50%] 2xl:h-[75%] text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl pb-4 border-2 2xl:border-4 border-grey-main border-b-beige-main/80'>
        //             Menuitek,<br/>l'excellence de la menuiserie à votre portée
        //         </p>
        //         <p className='text-right py-4'>Choisissez le meilleur pour vos projets sur mesure, en neuf comme en rénovation.</p>
        //         <p className='text-right italic'>Qualité supérieure, produits durables, prix imbattables</p>
        //     </div>
        //     <img src={FenetreImg} alt='Fenetre avec vue sur la nature' className='w-1/2 xl:w-1/3 2xl:1/4 ml-auto h-auto object-cover rounded-b-xl rounded-t-full shadow-lg'></img>
        // </div>
        <div className='flex flex-row gap-4 xl:gap-0 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in'>
            <div className='flex flex-col justify-between gap-2 md:gap-6 lg:gap-12 xl:gap-20 w-1/2 h-auto'>
                <p className='flex 2xl:items-center h-[50%] 2xl:h-[75%] text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl pb-4 border-2 2xl:border-4 border-grey-main border-b-beige-main/80'>
                    Menuitek,<br/>le sur-mesure qui dure
                </p>
                <p className='text-right py-4'>Menuitek, c’est l’expertise familiale de plus de 30 ans au service de la menuiserie sur mesure.</p>
                <p className='text-right italic'>Nous concevons, fournissons et posons des solutions performantes et durables, pensées pour la rénovation énergétique et l’esthétique de chaque intérieur.</p>
            </div>
            <img src={FenetreImg} alt='Fenetre avec vue sur la nature' className='w-1/2 xl:w-1/3 2xl:1/4 ml-auto h-auto object-cover rounded-b-xl rounded-t-full shadow-lg'></img>
        </div>
    )
}

export default IntroAccueil;