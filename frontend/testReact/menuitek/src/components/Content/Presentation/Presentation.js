import IntroMenuitek from "./IntroMenuitek";
import Menuitek from "./Menuitek";
import Expertise from "./Expertise";
import Valeurs from "./Valeurs";
import Professsionnel from "./Professionnel";
import Vision from "./Vision";

function Presentation() {
    return (
        <div className="flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in">
            <IntroMenuitek />
            <Menuitek />
            <Valeurs />
            <Expertise />
            <Professsionnel />
            <Vision />
        </div>
            
    )
}

export default Presentation;