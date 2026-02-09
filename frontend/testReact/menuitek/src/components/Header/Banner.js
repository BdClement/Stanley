// import logoMenuitek from '../../assets/LogoMenuitek.png' A RETIER
import logoMenuitek from '../../assets/MenuitekLogo.png'

function Banner() {
    return (
        <div className='flex flex-row min-h-[10vh] max-h-[12vh] items-center xl:px-32'>
            <img src={logoMenuitek} alt='Logo Menuitek' className=' m-4 w-[20%] max-w-[16vh] h-auto object-contain pt-4 lg:pt-8'></img>
            <h1 className='text-[clamp(0.9rem,2vw,2.2rem)] flex-1 text-center break-words text-brun-main'>Avec vous,<br />Pour tous vos projets de Rénovation</h1>
        </div>
    )
}

export default Banner