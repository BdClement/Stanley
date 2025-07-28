import logoMenuitek from '../../assets/LogoMenuitek.png'
import logoHelios from '../../assets/LogoHelios.png'

function Banner() {
    return (
        // <div className='flex flex-row h-[12vh] items-center'>
        <div className='flex flex-row min-h-[10vh] max-h-[12vh] items-center'>
            <img src={logoMenuitek} alt='Logo Menuitek' className=' m-4 w-[20%] max-w-[16vh] h-auto object-contain'></img>
            <h1 className='font-comforta text-[clamp(0.9rem,2.5vw,1.25rem)] flex-1 text-center break-words text-beige-main'>Avec vous,<br />Pour tous vos projets de Rénovation</h1>
            <img src={logoHelios} alt='Logo Helios' className='m-4 w-[20%] max-w-[16vh] h-auto object-contain'></img>
        </div>
    )
}

export default Banner