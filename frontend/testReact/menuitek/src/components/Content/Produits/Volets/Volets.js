import { volets } from "../../../../datas/volets"
import { FaCheckCircle } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { useParams , useLocation} from "react-router-dom";

function Volets() {
    const { voletsType } = useParams();
    const voletsContentType = volets[voletsType];
    const { pathname } = useLocation();

    if (!voletsContentType) return <p>Type de volets introuvable {voletsType}</p>

    return (
 <div key={pathname} className="flex flex-col gap-4 lg:gap-8 xl:gap-12 min-h-[70vh] py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in">
            <div className='flex flex-col gap-6 md:gap-10 xl-gap-14'>
                <h1 className=" text-center xl:pb-6 text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl font-bold">{voletsContentType.titre}</h1>
                <div className=''>
                    <p className="p-6 md:p-10 xl:p-16 text-justify border-y border-brun-contrast/50">
                        {voletsContentType.intro}
                    </p>
                    {voletsContentType.fiche && (
                        <>
                            <p className="p-6 md:p-10 xl:p-16 text-justify">Pour plus d'informations sur l'un de ne produits de la section "{voletsContentType.titre}", veuillez télécharger le catalogue ci-dessous ou contactez-nous directement.</p>
                            <a className="p-4 w-full lg:w-1/2 mx-auto flex items-center justify-center gap-4 rounded-md bg-brun-contrast text-brun-dark hover:bg-brun-main hover:text-beige transition duration:300" href={voletsContentType.fiche} download>
                                Télécharger le catalogue {voletsContentType.titre}<MdDownloadForOffline/>
                            </a>
                        </>
                    )}
                </div>
                <div className='flex flex-col gap-[10vh] xl:gap-[14vh] 2xl:gap-[16vh] py-10 xl:py-20'>
                    {voletsContentType.items.map((item, index) => 
                        <div key={index} className="flex flex-col lg:flex-row gap-2 md:gap-4 xl-gap-8 bg-white rounded text-brun-dark/80">
                            <div className="w-full lg:w-1/3 py-4 md:py-6 flex flex-col items-center">
                                <h2 className="font-semibold uppercase text-center">{item.titre}</h2>
                                <div className="w-full h-[250px] md:h-[300px] xl:h-[350px] flex items-center justify-center">
                                    {/* <img src={item.image} alt={item.titre} className=' object-contain rounded my-auto'></img> */}
                                    <img src={item.image} alt={item.titre} className='max-h-full max-w-full object-contain'></img>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 py-4 md:py-6 flex flex-col gap-4 md:gap-6 xl:gap-10 px-4 text-justify bg-brun-contrast/10">
                            {/*  max-h-[300px] md:max-h-[350px] xl:max-h-[400px] overflow-auto pr-2 a ajouter pour harmoniser si plusieurs produits */}
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
                                <div className="flex flex-col gap-4 md:gap-6 xl:gp-10 items-end">
                                    <div className="w-full lg:w-1/2 text-end font-semibold text-brun-contrast">{item.prix}</div>
                                    {item.fiche && (
                                        <a className="p-4 w-full lg:w-1/2 flex items-center justify-center gap-4 rounded-md bg-brun-contrast text-white hover:bg-brun-main transition duration:300" href={item.fiche} download>
                                            {item.isSingleProduct ? 'Télécharger la fiche Produit' : 'Télécharger le catalogue produits'} <MdDownloadForOffline/>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-6 md:p-10 xl:p-16 border-t border-brun-contrast/50">
                    <div className="flex gap-2 md:gap-4 xl-gap-8 items-center justify-center">
                        <FaCheckCircle className="text-brun-contrast"/>
                        <h3 className="font-semibold uppercase">{voletsContentType.avantage}</h3>
                    </div>
                    <p className="pt-6 md:pt-10 xl:pt-16 text-justify ">
                        {voletsContentType.conclusion}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Volets;