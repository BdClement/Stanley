import IntroFormulaire from "./IntroFormulaire"
// import Devis from "./Devis"
import BodyFormulaire from "./BodyFormulaire"
// import AvisFormulaire from "./AvisFormulaire"

function Formulaire() {
    return (
        <div className="flex flex-col items-center justify-center py-20 border-2 border-red-900">
            <IntroFormulaire />
            <BodyFormulaire />
        </div>
    )
}

export default Formulaire;

