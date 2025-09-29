import React, { useState, useRef, useLayoutEffect} from 'react';
import '../../styles/Header.css'
import Banner from './Banner'
import Navbar from './Navbar';
import ProductsMenu from './ProductsMenu';

//isOpen sert a savoir si le sous menu est ouvert 
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [navHeight, setNavHeight] = useState(0);
    const navRef = useRef(null);

    // Mesure initiale + maj au resize
    useLayoutEffect(() => {
      function updateHeight() {
        if (navRef.current) {
          setNavHeight(navRef.current.getBoundingClientRect().height);
        }
      }

    updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
      }, []);

    return (
        <React.Fragment>
            <header>
                <Banner />
            </header>
            <Navbar
                ref={navRef}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <div className="sticky z-40" onMouseLeave={() => setIsOpen(false)} style={{top: `${navHeight}px`}}>
                <ProductsMenu 
                    isOpen={isOpen}
                />
            </div>
        </React.Fragment>
    )
}

export default Header;

// Au click sen mobile lors de la disparition, c'est pas tres propre car brutal