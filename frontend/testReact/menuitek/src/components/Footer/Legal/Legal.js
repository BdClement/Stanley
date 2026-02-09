import { Link } from 'react-router-dom';

function Legal() {
    return (
        <div className="p-1 py-2 flex flex-grow items-center justify-center border-t-2 border-t-brun-contrast/80">
            <ul className="flex flex-row gap-4 2xl:gap-8">
                <li>MenuiteK © 2025</li>
                <li>•</li>
                <li>
                    <Link to='/mentions-legales/' className="hover:text-brun-dark hover:underline">Mentions Légales</Link>
                </li>
                <li>•</li>
                <li>
                    <Link to='/politique-confidentialite/' className="hover:text-brun-dark hover:underline">Politique de confidentialité</Link>
                </li>
                {/* <li>•</li>
                <li className="hover:text-black hover:underline">CGV</li> */}
            </ul>
        </div>
    )
}

export default Legal;

//Ancien effet de souligement 
//relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:opacity-0 after:bg-grey-main hover:after:opacity-1 hover:after:animate-fade-in