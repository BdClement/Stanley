import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="flex flex-grow sm:flex-row flex-col">
            <div className="m-2 sm:m-6 flex flex-col flex-grow gap-2">
                <div className="h-[2px] w-3/4 bg-gradient-to-r from-brun-contrast to-brun-contrast-300"></div>
                <h3 className="text-2xl">À propos</h3>
                <ul className=" flex flex-col flex-grow">
                    <Link to='/nous-connaitre#menuitek' className="flex-grow hover:underline hover:text-black">Qui sommes nous ?</Link>
                    <Link to='/nous-connaitre#valeurs' className="flex-grow hover:underline hover:text-black">Nos valeurs</Link>
                    <Link to='/Faq/' className="flex-grow hover:underline hover:text-black">FAQ</Link>
                    {/* <li className="flex-grow hover:underline hover:text-black">FAQ</li>  */}
                </ul>
            </div>
            <div className="m-2 sm:m-6 flex flex-col flex-grow">
                <div className="h-[2px] w-3/4 bg-gradient-to-r from-brun-contrast to-brun-contrast-300"></div>
                <h3 className="text-2xl">Réseaux</h3>
                <ul className="flex flex-row flex-grow items-center justify-evenly gap-6">
                    <li>
                        <a
                            href="https://www.instagram.com/menuitek/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i class="fab fa-instagram text-3xl hover:text-[#E1306C] transition duration-200 ease-in-out"></i>

                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.linkedin.com/company/menuitek-la-mesuiserie-accesible-%C3%A0-tous/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i class="fab fa-linkedin text-3xl hover:text-[#0077B5] transition duration-200 ease-in-out"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=61582189509233" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >

                            <i class="fab fa-facebook text-3xl hover:text-[#1877F2] transition duration-200 ease-in-out"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.tiktok.com/@menuitek?_r=1&_t=ZN-9180yjmr4oo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >

                            <i class="fab fa-tiktok text-3xl hover:text-[#EE1D52] transition duration-200 ease-in-out"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="m-2 sm:m-6 flex flex-col flex-grow">
                <div className="h-[2px] w-3/4 bg-gradient-to-r from-brun-contrast to-brun-contrast-300"></div>
                <h3 className="text-2xl">Nous trouver</h3>
                <ul>
                    {/* On va mettre un truc du style livraison dans toute la France et pose dans toute l’ile de france */}
                    <li>Livraison dans toute la France | Pose dans toute l'Île-de-France</li>
                    {/* <li>Pose dans toute l'Île-de-France</li> */}
                    <li>01 40 55 46 08</li>
                    <li>9, Rue Anatole de la Forge,</li>
                    <li>Paris, Île-de-France 75017, FR</li>
                </ul>
            </div>
        </div>
    )
}

export default About;