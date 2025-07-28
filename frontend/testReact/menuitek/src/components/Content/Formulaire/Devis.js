function Devis() {
    return (
        <form className="flex flex-col gap-8" action="" method="post">
            <ul>
                <li className="flex flex-col">
                    <label for="name">Nom</label>
                    <input type="text" id="name" name="user_name"></input>
                </li>
                <li className="flex flex-col">
                    <label for="first_name">Prenom</label>
                    <input type="text" id="first_name" name="user_first_name"></input>
                </li>
                <li className="flex flex-col">
                    <label for="society">Nom d'entreprise</label>
                    <input type="text" id="society" name="user_society" value="Indiquez le nom de la societe"></input>
                </li>
                <li className="flex flex-col">
                    <label for="tel"> Numero de telephone</label>
                    <input type="tel" id="tel" name="tel"></input>
                </li>
                <li className="flex flex-col">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email"></input>
                </li>
                <li className="flex flex-col">
                    <label for="project">Decrivez-nous vos besoins ou vos envies</label>
                    <textarea id="project" name="user_project" cols="50" rows="10"></textarea>
                </li>
            </ul>
            <div className="flex items-center justify-center">
                <button  className="p-2 border-2 border-beige-main rounded" type="submit">Soumetter votre projet</button>
            </div>
        </form>
    )
}

export default Devis;