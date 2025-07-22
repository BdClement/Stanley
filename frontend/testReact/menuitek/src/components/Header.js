import '../styles/Header.css'
// import bgBanniere from '../assets/banniereMenuitek.png'
import logoMenuitek from '../assets/LogoMenuitek.png'
// import logoHelios from '../assets/LogoHelios.png'

function Header() {
    return (
        <header className='border-2 border-black-500 h-[20vh]'>
            {/* <div className='bg-cover bg-center' style={{
                backgroundImage: `url(${bgBanniere})`,
            }}>Salut</div> */}
            {/* <img src={bgBanniere} alt='Banniere Menuitek' className='w-full h-full'/> */}
            <div className='flex flex-row'>
                <img src={logoMenuitek} alt='Logo Menuitek'></img>
                <h2>Avec vous,<br />Pour tous vos projets de<br />Renovation</h2>
                {/* <img src={logoHelios} alt='Logo Helios'></img> */}
            </div>
        </header>
    )
}

export default Header;