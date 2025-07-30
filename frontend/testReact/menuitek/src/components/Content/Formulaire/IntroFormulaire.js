import { PiPhoneCallFill } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import logoPremium from "../../../assets/Premium.png"

function IntroFormulaire() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex flex-col items-center opacity-0 animate-slide-in-right">
                <h2 className="my-4 md:my-6 lg:my-8 sm:text-lg lg:text-2xl">Menuitek est ravi de vous accompagner dans votre projet !</h2>
                <p className="my-2 md:my-6 lg:my-8 text-sm sm:text-base md:text-lg lg:text-xl">Pour cela, rien de plus simple :</p>
            </div>
            <div className="my-2 md:my-6 lg:my-8 flex flex-row w-full h-full items-center justify-evenly opacity-0 animate-slide-in-right" style={{ animationDelay: '400ms' }}>
                <img src={logoPremium} alt="Logo Premium" className="size-20 md:size-24 lg:size-32 xl:size-40 rounded"></img>
                {/* <div className="border-2 border-beige-main size-20">Logo</div> */}
                <ol className="flex flex-col gap-2 lg:gap-4 p-2 lg:p-4 border-2 border-stone-700 rounded-t-lg text-sm sm:text-base md:text-lg lg:text-xl">
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
                <img src={logoPremium} alt="Logo Premium" className="size-20 md:size-24 lg:size-32 xl:size-40 rounded"></img>
            </div>
        </div>
    )
}

export default IntroFormulaire;
