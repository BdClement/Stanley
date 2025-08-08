import maisonDesign from '../../../assets/MaisonDesignModele.jpg'
// import baieVitree from '../../../assets/BaieVitrée.jpg'

function Invitation() {
    return (
        <div className=' flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] bg-gradient-to-t from-grey-main to-grey-contrast/30'>
            <p className='font-semibold text-brun-contrast'>COMPTEZ SUR NOUS</p>
            <div className='flex flex-col md:flex-row items-center relative'>
                <img src={maisonDesign} alt='Modèle de maison design traingulaire' className='w-[60%] md:w-[50%] h-auto object-cover rounded-t-lg md:rounded'></img>
                <div className='flex flex-col items-center md:items-start w-[60%] md:w-[50%] h-auto justify-around bg-grey-contrast/30 p-4 md:gap-6 xl:gap-8 md:p-8 xl:p-12 gap-4 rounded-b-lg md:rounded-none md:rounded-r-lg shadow-2xl'>
                    <p className='font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl'>Donnez vie à vos projets avec Menuitek</p>
                    <p className='italic font-light'>Notre équipe vous accompagne de l'idée à la réalisation. N'attendez plus et discutons de votre projet dès aujourd'hui !</p>
                    <button className='w-[50%] my-4 bg-grey-contrast rounded-full p-2 xl:p-4 hover:bg-beige-main hover:text-grey-main transition duration:300'>Soumettre mon projet</button>
                </div>
            </div>
        </div>
    )
}

export default Invitation;