import React, { useState } from 'react';
import '../../styles/Header.css'
import Banner from './Banner'
import Navbar from './Navbar';

//isOpen sert a savoir si le sous menu est ouvert 
function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <React.Fragment>
            <header>
                <Banner />
            </header>
            <Navbar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </React.Fragment>
    )
}

export default Header;

// Au click sen mobile lors de la disparition, c'est pas tres propre car brutal