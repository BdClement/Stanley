function Devis() {
    return (
        <form className="w-full flex flex-col items-center gap-2 sm:gap-4 lg:gap-8 text-sm sm:text-base md:text-lg lg:text-xl opacity-0 animate-slide-in-right" style={{ animationDelay: '800ms' }} action="" method="post">
            <ul className="w-1/2 2xl:w-1/3 flex flex-col border-2 border-stone-700 rounded-t-lg xl:gap-2 p-2 md:p-4 lg:p-6 xl:p-12">
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label for="name">Nom</label>
                    <input type="text" id="name" name="user_name" className="bg-beige-contrast text-grey-main rounded"></input>
                </li>
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label for="first_name">Prenom</label>
                    <input type="text" id="first_name" name="user_first_name" className="bg-beige-contrast text-grey-main rounded"></input>
                </li>
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label for="society">Nom d'entreprise</label>
                    <input type="text" id="society" name="user_society" className="bg-beige-contrast text-grey-main rounded"></input>
                </li>
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label for="tel"> Numero de telephone</label>
                    <input type="tel" id="tel" name="tel" className="bg-beige-contrast text-grey-main rounded"></input>
                </li>
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" className="bg-beige-contrast text-grey-main rounded"></input>
                </li>
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label for="project">Decrivez-nous vos besoins ou vos envies</label>
                    <textarea id="project" name="user_project" cols="50" rows="10" className="bg-beige-contrast text-grey-main rounded"></textarea>
                </li>
            </ul>
            <div className="flex items-center justify-center">
                <button  className="p-2 border-2 border-beige-main rounded hover:bg-beige-main hover:text-grey-main transition duration:300" type="submit">Soumetter votre projet</button>
            </div>
        </form>
    )
}

export default Devis;

// Regler probleme de z-index + styliser input form