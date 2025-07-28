// import React from 'react';
import '../../styles/Footer.css'
import Legal from './Legal'
import About from './About'

function Footer() {
    return (
        <footer className='min-h-[20vh] flex flex-col border-2 border-t-beige-contrast bg-beige-main text-grey-main'>
            <About />
            <Legal />
        </footer>
    )
}

export default Footer;