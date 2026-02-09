import { Link } from "react-router-dom";

import { categories } from "../../../datas/categories";
import { FaCheckCircle } from "react-icons/fa";
import { useParams , useLocation} from "react-router-dom";

function Categorie() {
    const { categorieName } = useParams();
    const categorieObject = categories[categorieName];
    const { pathname } = useLocation();
    
    if (!categorieObject) return <p>Categorie Introuvable {categorieName}</p>

    return (
        <div key={pathname} className="flex flex-col gap-4 lg:gap-8 xl:gap-12 min-h-[70vh] py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in">
            <div className='flex flex-col gap-6 md:gap-10 xl-gap-14'>
                <h1 className=" text-center xl:pb-6 text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl font-bold">{categorieObject.title}</h1>
                <div className=''>
                    <p className="p-6 md:p-10 xl:p-16 text-justify border-y border-brun-contrast/50 whitespace-pre-line">{categorieObject.intro}</p>
                </div>
                <div className='flex flex-col gap-[6vh] xl:gap-[8vh] 2xl:gap-[10vh] py-10 xl:py-20'>
                    {categorieObject.items.map((item, index) =>
                        <div key={index} className="py-2 md:py-4 md:mx-20 xl:mx-40 flex flex-col md:flex-row items-center md:items-stretch gap-2 md:gap-4 xl-gap-8 bg-white rounded">
                            <img src={item.image} alt={item.title} className='w-1/2 xl:w-1/3 2xl:1/4 h-auto object-contain rounded'></img>
                            <div className='py-2 md:py-4 xl:py-8 px-6 md:px-8 xl:px-10 flex flex-col justify-between gap-2 md:gap-4 xl-gap-8 text-brun-dark/80'>
                                <h2 className="font-semibold uppercase">{item.title}</h2>
                                <p className='text-justify'>{item.description}</p>
                                <Link to={item.link}>
                                    <button className='py-2 xl:py-4 px-2 lg:px-4 xl:px-6 self-end border rounded-full bg-brun-contrast text-white hover:bg-brun-main transition duration:300'>Découvrir</button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-6 md:p-10 xl:p-16 border-t border-brun-contrast/50">
                    <div className="flex gap-2 md:gap-4 xl-gap-8 items-center justify-center ">
                        <FaCheckCircle className="text-brun-contrast"/>
                        <h3 className="font-semibold uppercase">{categorieObject.advantage}</h3>
                    </div>
                    <p className="pt-6 md:pt-10 xl:pt-16 text-justify whitespace-pre-line ">{categorieObject.conclusion}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Categorie;
    