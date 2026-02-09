// import React from 'react';
import '../../styles/Footer.css'
import Legal from './Legal/Legal'
import About from './About'

function Footer() {
    return (
        <footer className='min-h-[20vh] lg:min-h-[25vh] 2xl:min-h-[22vh] flex flex-col border-t-2 border-t-brun-contrast/90 bg-brun-main text-grey-main'>
            <About />
            <Legal />
        </footer>
    )
}

export default Footer;