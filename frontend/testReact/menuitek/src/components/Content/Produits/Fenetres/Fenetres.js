import { fenetres } from "../../../../datas/fenetres"
import { FaCheckCircle } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { useParams } from "react-router-dom";

function Fenetres() {
    const { fenetreType } = useParams();
    const fenetresContentType = fenetres[fenetreType];

    if (!fenetresContentType) return <p>Type de fenetres introuvable {fenetreType}</p>

    return (
        <div className="flex flex-col gap-4 lg:gap-8 xl:gap-12 min-h-[70vh] py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw]">
            <div className='flex flex-col gap-6 md:gap-10 xl-gap-14'>
                <h1 className=" text-center xl:pb-6 text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl font-bold">{fenetresContentType.titre}</h1>
                <div className=''>
                    <p className="p-6 md:p-10 xl:p-16 text-justify border-y border-brun-contrast/60">
                        {fenetresContentType.intro}
                    </p>
                </div>
                <div className='flex flex-col gap-[10vh] xl:gap-[14vh] 2xl:gap-[16vh] py-10 xl:py-20'>
                    {fenetresContentType.items.map((item, index) => 
                        <div key={index} className="flex flex-col lg:flex-row gap-2 md:gap-4 xl-gap-8 bg-white rounded text-grey-contrast">
                            <div className="w-full lg:w-1/3 py-4 md:py-6 flex flex-col items-center">
                                <h2 className="font-semibold uppercase">{item.titre}</h2>
                                <img src={item.image} alt={item.titre} className=' object-contain rounded my-auto'></img>
                            </div>
                            <div className="w-full lg:w-2/3 py-4 md:py-6 flex flex-col gap-4 md:gap-6 xl:gap-10 px-4 text-justify bg-grey-contrast-xxl">
                                <div className="flex flex-1 flex-col justify-between gap-4 md:gap-6 xl:gap-10 pb-6 border-b-2">
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
                                <div className="flex flex-col gap-4 md:gap-6 xl:gap-10 items-end">
                                    {item.fiche && (
                                        <a className="p-4 w-full lg:w-1/2 flex items-center justify-center gap-4 border-grey-contrast rounded-md bg-grey-contrast text-white hover:bg-grey-main transition duration:300" href={item.fiche} download>
                                            Télécharger la fiche Produit <MdDownloadForOffline/>
                                        </a>
                                    )}
                                    <div className="w-full lg:w-1/2 text-end font-semibold">{item.prix}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-6 md:p-10 xl:p-16 border-t border-brun-contrast/60">
                    <div className="flex gap-2 md:gap-4 xl-gap-8 items-center text-brun-contrast justify-center">
                        <FaCheckCircle/>
                        <h3 className="font-semibold text-brun-contrast uppercase">{fenetresContentType.avantage}</h3>
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