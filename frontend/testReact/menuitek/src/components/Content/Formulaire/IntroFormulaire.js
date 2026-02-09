import { PiPhoneCallFill } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
// import logoValide from "../../../assets/Valide.png"
// import logoMedaille from "../../../assets/medaille.png"
// import logoRGE from "../../../assets/RGE.png"
import logoQuality from "../../../assets/Quality.png"
import logoGreen from "../../../assets/green.png"

function IntroFormulaire() {
    return (
        <div className="w-full h-full flex flex-col items-center opacity-0 animate-slide-in-right">
            <div className="flex flex-col items-center">
                <h2 className="text-center my-4 md:my-6 lg:my-8 sm:text-lg lg:text-2xl 2xl:text-4xl">Menuitek est ravi de vous accompagner dans votre projet !</h2>
                <p className="my-2 md:my-6 lg:my-8 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">Pour cela, rien de plus simple :</p>
            </div>
            <div className="my-2 md:my-6 lg:my-8 flex w-full h-full items-center justify-evenly">
                <div className="flex flex-col">
                    <ol className="flex flex-col gap-2 lg:gap-4 p-2 lg:p-4 border-2 border-brun-contrast/80 rounded-t-lg text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
                        <li className="flex flex-row gap-2 lg:gap-4">
                            <IoDocumentText size={24}/>
                            <p>Remplissez le formulaire pour nous exposer votre projet</p>
                        </li>
                        <li className="flex flex-row gap-2 lg:gap-4">
                            <BiSearchAlt size={24}/>
                            <p>Nous analysons votre demande</p>
                        </li>
                    
                        <li className="flex flex-row gap-2 lg:gap-4">
                            <PiPhoneCallFill size={24}/>
                            <p>Un expert vous contactera sous 48h pour affiner votre projet</p>
                        </li>
                    </ol>
                    <div className="flex flex-row justify-center items-center gap-4 lg:gap-10">
                        <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 flex items-center justify-center rounded">
                            <img src={logoQuality} alt="Logo Quality" className="max-h-full max-w-full object-contain scale-75" />
                        </div>
                        <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 flex items-center justify-center rounded">
                            <img src={logoGreen} alt="Logo Green" className="max-h-full max-w-full object-contain scale-50" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroFormulaire;
