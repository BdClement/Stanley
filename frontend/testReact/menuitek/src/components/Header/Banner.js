import logoMenuitek from '../../assets/LogoMenuitek.png'
import logoHelios from '../../assets/LogoHelios.png'

function Banner() {
    return (
        <div className='flex flex-row h-[12vh] items-center'>
            <img src={logoMenuitek} alt='Logo Menuitek' className='w-[20%] max-w-[225px] h-auto object-contain'></img>
            <h1 className='font-comforta text-[clamp(1rem,3vw,1.5rem)] flex-1 text-center break-words text-grey-custom'>Avec vous,<br />Pour tous vos projets de<br />Renovation</h1>
            <img src={logoHelios} alt='Logo Helios' className='w-[20%] max-w-[225px] h-auto object-contain'></img>
        </div>
    )
}

export default Banner