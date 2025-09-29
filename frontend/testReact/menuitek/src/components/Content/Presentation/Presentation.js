import IntroMenuitek from "./IntroMenuitek";
import Menuitek from "./Menuitek";
import Expertise from "./Expertise";
import Valeurs from "./Valeurs";
import Professsionnel from "./Professionnel";
import Vision from "./Vision";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Presentation() {
    const location = useLocation();
    console.log('Test Pres')
    useEffect(() => {
    if (location.hash) {
        console.log('Test loc :', location)
      const target = document.querySelector(location.hash);
      console.log('Test target :', target)
      if (target) {
        console.log('Test target')
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    return (
        <div className="flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in">
            <IntroMenuitek/>
            <Menuitek/>
            <Valeurs/>
            <Expertise />
            <Professsionnel />
            <Vision />
        </div>
            
    )
}

export default Presentation;