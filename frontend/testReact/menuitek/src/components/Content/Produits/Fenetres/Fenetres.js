import { fenetres } from "../../../../datas/fenetres"
import { FaCheckCircle } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { useParams , useLocation} from "react-router-dom";
// import Aluplast from '../../../../assets/Marques/AluplastLogo.png'

function Fenetres() {
    const { fenetreType } = useParams();
    const fenetresContentType = fenetres[fenetreType];
    const { pathname } = useLocation();

    if (!fenetresContentType) return <p>Type de fenetres introuvable {fenetreType}</p>

    return (
        <div key={pathname} className="flex flex-col gap-4 lg:gap-8 xl:gap-12 min-h-[70vh] py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in">
            <div className='flex flex-col gap-6 md:gap-10 xl-gap-14'>
                <h1 className=" text-center xl:pb-6 text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl font-bold">{fenetresContentType.titre}</h1>
                <div className=''>
                    <p className="p-6 md:p-10 xl:p-16 text-justify border-y border-brun-contrast/50">
                        {fenetresContentType.intro}
                    </p>
                </div>
                <div className='flex flex-col gap-[10vh] xl:gap-[14vh] 2xl:gap-[16vh] py-10 xl:py-20'>
                    {fenetresContentType.items.map((item, index) => 
                        <div key={index} className="flex flex-col lg:flex-row gap-2 md:gap-4 xl-gap-8 bg-white rounded text-brun-dark/80">
                            <div className="w-full lg:w-1/3 py-4 md:py-6 flex flex-col items-center">
                                <h2 className="font-semibold uppercase text-center">{item.titre}</h2>
                                <div className="w-full h-[250px] md:h-[300px] xl:h-[350px] flex items-center justify-center">
                                    {/* <img src={item.image} alt={item.titre} className=' object-contain rounded my-auto'></img> */}
                                    <img src={item.image} alt={item.titre} className='max-h-full max-w-full object-contain'></img>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 py-4 md:py-6 flex flex-col gap-4 md:gap-6 xl:gap-10 px-4 text-justify bg-brun-contrast/10">
                                <div className="flex flex-1 flex-col justify-between gap-4 md:gap-6 xl:gap-10 pb-6 border-b-2 border-brun-contrast/50 max-h-[300px] md:max-h-[350px] xl:max-h-[400px] overflow-auto pr-2">
                                    <div className="px-6">{item.presentation}</div>
                                    {item.caracteristiques && (
                                        <ul className=" px-8 italic list-disc list-inside">
                                            {item.caracteristiques.map((carac, index) => (
                                                <li key={index}>{carac}</li>
                                            ))}
                                        </ul>                
                                    )}
                                    <div className=" px-6 ">{item.infos}</div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 md:gap-6 xl:gap-10 items-center md:items-start w-full">
                                    {/* {item.logo && ( */}
                                        <div className="w-full md:w-1/2 flex justify-center md:justify-start xl:justify-center">
                                            {item.logo && (
                                                <img src={item.logo} alt="Logo de la marque" className="max-w-[200px] md:max-w-[250px]"></img>
                                            )}
                                        </div>
                                    {/* )} */}
                                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-4 xl:justify-center">
                                        <div className="w-full text-end font-semibold text-brun-contrast">{item.prix}</div>
                                        {item.fiche && (
                                            <a className="p-4 w-full flex items-center justify-center gap-4 rounded-md bg-brun-contrast text-white hover:bg-brun-main transition duration:300" href={item.fiche} download>
                                                Télécharger la fiche Produit <MdDownloadForOffline/>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                {/* <div className="flex flex-col gap-4 md:gap-6 xl:gap-10 items-end">
                                    <img src={Aluplast} alt="AluplastLogo"></img>
                                    {item.fiche && (
                                        <a className="p-4 w-full lg:w-1/2 flex items-center justify-center gap-4 border-grey-contrast rounded-md bg-grey-contrast text-white hover:bg-grey-main transition duration:300" href={item.fiche} download>
                                            Télécharger la fiche Produit <MdDownloadForOffline/>
                                        </a>
                                    )}
                                    <div className="w-full lg:w-1/2 text-end font-semibold">{item.prix}</div>
                                </div> */}
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-6 md:p-10 xl:p-16 border-t border-brun-contrast/50">
                    <div className="flex gap-2 md:gap-4 xl-gap-8 items-center text-brun-main justify-center">
                        <FaCheckCircle className="text-brun-contrast"/>
                        <h3 className="font-semibold uppercase">{fenetresContentType.avantage}</h3>
                    </div>
                    <p className="pt-6 md:pt-10 xl:pt-16 text-justify ">
                        {fenetresContentType.conclusion}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Fenetres;