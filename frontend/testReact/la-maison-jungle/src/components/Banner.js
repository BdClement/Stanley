import React from 'react';
import '../styles/Banner.css';
import logo from '../assets/logo.png'

function TitleBanner() {
    let title = "la maison jungle header";
    return (<React.Fragment>
        {/* <img src={logo} alt='la maison jungle' className='lmg-logo'/> */}
        <h1 className='lmj-title'>{title.toUpperCase()}</h1>
    </React.Fragment>);
}
function DescriptionBanner() {
    return (<p>Ici achetez toutes les plantes dont vous avez toujours revez</p>);
}
function Banner() {
    // root.render(<div><TitleBanner /><DescriptionBanner/></div>)//Similaire a React.Fragment (2 composants doivent etre encapsuler dans un element parent)
    return (<div className='lmj-banner'>
        <img src={logo} alt='la maison jungle' className='lmg-logo'/>
        <div className='lmj-banner-text'>
            <TitleBanner />
            <DescriptionBanner />
        </div>
    </div>
    );
}

export default Banner;