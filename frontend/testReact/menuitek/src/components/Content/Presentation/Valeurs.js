import { LuScanEye } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

function Valeurs() {
    return (
        <div id='valeurs' className="flex flex-col gap-4 lg:gap-8 xl:gap-12 px-[5vw] xl:px-[8vw] scroll-mt-[6vh] sm:scroll-mt-[3vh] lg:scroll-mt-[8vh] 2xl:scroll-mt-[6vh]">
            <h1 className='font-semibold text-brun-contrast uppercase'>Nos valeurs & engagements</h1>
            <ul className="flex flex-col font-light gap-4 lg:gap-8 xl:gap-12 border-b border-beige-main/30 pb-[5vh] text-justify">
                <li className="flex flex-col gap-2 lg:gap-4 xl:gap-6">
                    <div className="flex items-center gap-4">
                        <FaCubes/>
                        <p className="font-semibold">Produits de haute qualité :</p>
                    </div>
                    <p>Menuiseries robustes, performantes, isolantes, disponibles dans une large palette de finitions (bois, couleurs, plaxage).</p>
                </li>
                <li className="flex flex-col gap-2 lg:gap-4 xl:gap-6">
                    <div className="flex items-center gap-4">
                        <FaHandshake/>
                        <p className="font-semibold">Relation de confiance :</p>
                    </div>
                    <p>Un interlocuteur unique, des délais clairs, des engagements respectés.</p>
                </li>                        <li className="flex flex-col gap-2 lg:gap-4 xl:gap-6">
                    <div className="flex items-center gap-4">
                        <LuScanEye/>
                        <p className="font-semibold">Transparence & conseil :</p>
                    </div>
                    <p>Nous prenons le temps de vous expliquer les choix techniques, les matériaux, et les solutions les plus adaptées à votre budget.</p>
                </li>                        <li className="flex flex-col gap-2 lg:gap-4 xl:gap-6">
                    <div className="flex items-center gap-4">
                        <FaLayerGroup/>
                        <p className="font-semibold">Polyvalence :</p>
                    </div>
                    <p>Qu’il s’agisse de remplacement, de construction neuve, ou de projet à l’étranger, nous savons nous adapter.</p>
                </li>                        <li className="flex flex-col gap-2 lg:gap-4 xl:gap-6">
                    <div className="flex items-center gap-4">
                        <MdSupportAgent/>
                        <p className="font-semibold">Accompagnement complet :</p>
                    </div>
                    <p>De la prise de mesure à la pose, ou en simple fourniture si vous le souhaitez.</p>
                </li>
            </ul>
        </div>
    )
}

export default Valeurs;