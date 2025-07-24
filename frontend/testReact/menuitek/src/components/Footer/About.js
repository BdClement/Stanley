function About() {
    return (
        <div className="flex flex-grow">
            <div className="m-4 flex flex-col flex-grow">
                <div className="h-[2px] w-3/4 bg-gradient-to-r from-grey-custom to-grey-custom-300"></div>
                <h3 className="text-2xl">A propos</h3>
                <ul className=" flex flex-col flex-grow border-2">
                    <li className="flex-grow">Qui sommes nous ?</li>
                    <li className="flex-grow">Nos valeurs</li>
                    <li className="flex-grow">FAQ</li>
                </ul>
            </div>
            <div className="m-4 flex flex-col flex-grow">
                <div className="h-[2px] w-3/4 bg-gradient-to-r from-grey-custom to-grey-custom-300"></div>
                <h3 className="text-2xl">Reseaux</h3>
                <ul className="flex flex-row flex-grow items-center justify-evenly gap-6">
                    <li><i class="fab fa-instagram text-3xl"></i></li>
                    <li><i class="fab fa-linkedin text-3xl"></i></li>
                    <li><i class="fab fa-facebook text-3xl"></i></li>
                    <li><i class="fab fa-pinterest text-3xl"></i></li>
                </ul>
            </div>
            <div className="m-4 flex-grow">
                <div className="h-[2px] w-3/4 bg-gradient-to-r from-grey-custom to-grey-custom-300"></div>
                <h3 className="text-2xl">Nous trouver</h3>
                <ul>
                    <li>Carte de la France</li>
                    <li>Telephone</li>
                    <li>Adresse</li>
                </ul>
            </div>
        </div>
    )
}

export default About;