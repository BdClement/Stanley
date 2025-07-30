import IntroFormulaire from "./IntroFormulaire"
import Devis from "./Devis"

function Formulaire() {
    return (
        <div className="flex flex-col items-center justify-center border-2 border-white">
            <IntroFormulaire />
            <Devis />
            <p className="m-4 p-4">Mettre des exemples d'avis clients statisfait par ce processus</p>
        </div>
    )
}

export default Formulaire;

// Nom Prenom OU Formulairete / adresse mail / numero de telephone / Message
// Utilisation de react-hook-form pour les formualire 
// rappel de useState

