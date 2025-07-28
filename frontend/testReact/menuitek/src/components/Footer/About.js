function About() {
    return (
        <div className="flex flex-grow sm:flex-row flex-col">
            <div className="m-2 sm:m-6 flex flex-col flex-grow gap-2">
                <div className="h-[2px] w-3/4 bg-gradient-to-r from-brun-contrast to-brun-contrast-300"></div>
                <h3 className="text-2xl">À propos</h3>
                <ul className=" flex flex-col flex-grow">
                    <li className="flex-grow hover:underline hover:text-black">Qui sommes nous ?</li>
                    <li className="flex-grow hover:underline hover:text-black">Nos valeurs</li>
                    <li className="flex-grow hover:underline hover:text-black">FAQ</li>
                </ul>
            </div>
            <div className="m-2 sm:m-6 flex flex-col flex-grow">
                <div className="h-[2px] w-3/4 bg-gradient-to-r from-brun-contrast to-brun-contrast-300"></div>
                <h3 className="text-2xl">Réseaux</h3>
                <ul className="flex flex-row flex-grow items-center justify-evenly gap-6">
                    <li><i class="fab fa-instagram text-3xl hover:text-[#E1306C] transition duration-200 ease-in-out"></i></li>
                    <li><i class="fab fa-linkedin text-3xl hover:text-[#0077B5] transition duration-200 ease-in-out"></i></li>
                    <li><i class="fab fa-facebook text-3xl hover:text-[#1877F2] transition duration-200 ease-in-out"></i></li>
                    <li><i class="fab fa-pinterest text-3xl hover:text-[#E60023] transition duration-200 ease-in-out"></i></li>
                </ul>
            </div>
            <div className="m-2 sm:m-6 flex flex-col flex-grow">
                <div className="h-[2px] w-3/4 bg-gradient-to-r from-brun-contrast to-brun-contrast-300"></div>
                <h3 className="text-2xl">Nous trouver</h3>
                <ul>
                    <li>Carte et/ou Zone d'intervention</li>
                    <li>01 40 55 46 08</li>
                    <li>9, Rue Anatole de la Forge,</li>
                    <li>Paris, Île-de-France 75017, FR</li>
                </ul>
            </div>
        </div>
    )
}

export default About;