import { fenetres } from "../../../../datas/fenetres"
import { FaCheckCircle } from "react-icons/fa";

function Fenetres({ fenetreType }) {
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
                <div className='flex flex-col gap-[6vh] xl:gap-[8vh] 2xl:gap-[10vh] py-10 xl:py-20'>
                    {fenetresContentType.items.map((item, index) => 
                        <div key={index} className="py-2 md:py-4 flex flex-col lg:flex-row gap-2 md:gap-4 xl-gap-8 bg-white rounded text-grey-contrast">
                            <div className="w-full lg:w-1/3 py-2 md:py-4 flex flex-col items-center">
                                <h2 className="font-semibold uppercase">{item.titre}</h2>
                                <img src={item.image} alt={item.titre} className=' object-contain rounded'></img>
                            </div>
                            <div className="w-full lg:w-2/3 py-2 md:py-4 flex flex-col gap-4 md:gap-6 xl-gap-10">
                                <div>{item.presentation}</div>
                                <div>{item.caracteristiques}</div>
                                <div>{item.infos}</div>
                                <div>{item.prix}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-6 md:p-10 xl:p-16 border-t border-brun-contrast/60">
                    <div className="flex gap-2 md:gap-4 xl-gap-8 items-center text-brun-contrast justify-center">
                        <FaCheckCircle/>
                        <h3 className="font-semibold text-brun-contrast uppercase">TBD</h3>
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

// Epaisseur de vitrage ?
// Couleur disponible 
// 2 points anti effraction par vantail