import React, { useState } from 'react';
import '../../styles/Header.css'
import Banner from './Banner'
import Navbar from './Navbar';
import ProductsMenu from './ProductsMenu';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <React.Fragment>
            <header>
                <Banner />
            </header>
            <div onMouseLeave={() => setIsOpen(false)}>
                <Navbar 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <ProductsMenu 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </div>
        </React.Fragment>
    )
}

export default Header;

// Au click sen mobile lors de la disparition, c'est pas tres propre car brutal