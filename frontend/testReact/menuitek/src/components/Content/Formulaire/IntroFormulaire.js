import { PiPhoneCallFill } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";

function IntroFormulaire() {
    return (
        <div>
            <h2 className="m-4 p-4 text-2xl">Menuitek est ravi de vous accompagner dans votre projet !</h2>
            <p className="m-4 p-4">Pour cela, rien de plus simple :</p>
            <ol className="flex flex-col gap-4 m-4 p-4">
                <li className="flex flex-row gap-4">
                    <IoDocumentText size={24}/>
                    <p>Remplissez le formulaire pour nous exposer votre projet</p>
                </li>
                <li className="flex flex-row gap-4">
                    <BiSearchAlt size={24}/>
                    <p>Nous analysons votre demande</p>
                </li>
               
                <li className="flex flex-row gap-4">
                    <PiPhoneCallFill size={24}/>
                    <p>Un expert vous contactera sous 48h pour affiner votre projet</p>
                </li>
            </ol>
        </div>
    )
}

export default IntroFormulaire;
