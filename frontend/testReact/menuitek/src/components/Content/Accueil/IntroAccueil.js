import FenetreImg from '../../../assets/Fenetres/Fenetre.jpg'

function IntroAccueil() {
    return (
        <div className='flex flex-row gap-4 xl:gap-0 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in'>
            <div className='flex flex-col gap-2 sm:gap-6 md:gap-8 lg:gap-16 xl:gap-20 w-1/2 h-auto'>
                <p className='flex font-bold items-center h-[50%] 2xl:h-[75%] text-2xl sm:text-4xl md:text-6xl lg:text-6xl 2xl:text-9xl pb-4 border-b-2 2xl:border-b-4 border-b-brun-main/80'>
                    Menuitek,<br/>le sur-mesure qui dure
                </p>
                <p className='text-right italic py-2 sm:py-4 text-[10px] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl'>Menuitek, c’est l’héritage d’un savoir-faire familial de plus de 20 ans, consacré à la conception et à la pose de menuiseries sur mesure.</p>
                <p className='text-right italic py-2 sm:py-4 text-[10px] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl'>Avec Menuitek, choisissez des menuiseries sur mesure conçues pour durer et pour transformer durablement vos espaces.</p>
            </div>
            <img src={FenetreImg} alt='Fenetre avec vue sur la nature' className='w-1/2 xl:w-1/3 2xl:1/4 ml-auto h-auto object-cover rounded-b-xl rounded-t-full shadow-lg'></img>
        </div>
    )
}

export default IntroAccueil;