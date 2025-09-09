import IntroFormulaire from "./IntroFormulaire"
// import Devis from "./Devis"
import BodyFormulaire from "./BodyFormulaire"
// import AvisFormulaire from "./AvisFormulaire"

function Formulaire() {
    return (
        <div className="flex flex-col items-center justify-center py-[5vh] xl:py-[10vh] 2xl:py[15vh] mb-[1vh] md:mb-[4vh]">
            <IntroFormulaire />
            <BodyFormulaire />
        </div>
    )
}

export default Formulaire;

