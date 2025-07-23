import React from 'react';
import '../../styles/Header.css'
import Banner from './Banner'
import Navbar from './Navbar';
// import bgBanniere from '../assets/banniereMenuitek.png'
// import logoMenuitek from '../../assets/LogoMenuitek.png'
// import logoHelios from '../../assets/LogoHelios.png'

function Header() {
    return (
        <React.Fragment>
            <header>
                <Banner />
            </header>
            <Navbar />
        </React.Fragment>
    )
}

export default Header;