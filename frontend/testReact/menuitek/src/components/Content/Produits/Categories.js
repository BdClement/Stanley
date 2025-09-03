import { categories } from "../../../datas/categories"
import { FaCheckCircle } from "react-icons/fa";

function Categorie({ categorieName }) {
    // const categorieId = categoriesMap[categorieName] ?? -1;
    const categorieObject = categories[categorieName];
    
    if (!categorieObject) return <p>Categorie Introuvable {categorieName}</p>

    return (
        <div className="flex flex-col gap-4 lg:gap-8 xl:gap-12 min-h-[70vh] py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw]">
            {/* <Fenetres /> */}
            <div className='flex flex-col gap-6 md:gap-10 xl-gap-14'>
                <h1 className=" text-center xl:pb-6 text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl font-bold">{categorieObject.title}</h1>
                <div className=''>
                    <p className="p-6 md:p-10 xl:p-16 text-justify border-y border-brun-contrast/60 whitespace-pre-line">{categorieObject.intro}</p>
                </div>
                <div className='flex flex-col gap-[6vh] xl:gap-[8vh] 2xl:gap-[10vh] py-10 xl:py-20'>
                    {categorieObject.items.map((item, index) =>
                        <div key={index} className="py-2 md:py-4 md:mx-20 xl:mx-40 flex flex-col md:flex-row items-center md:items-stretch gap-2 md:gap-4 xl-gap-8 bg-white rounded">
                            <img src={item.image} alt={item.title} className='w-1/2 xl:w-1/3 2xl:1/4 h-auto object-contain rounded'></img>
                            <div className='py-2 md:py-4 xl:py-8 px-6 md:px-8 xl:px-10 flex flex-col justify-between gap-2 md:gap-4 xl-gap-8 text-grey-contrast'>
                                <h2 className="font-semibold uppercase">{item.title}</h2>
                                <p className='text-justify'>{item.description}</p>
                                <button className='py-2 xl:py-4 px-2 lg:px-4 xl:px-6 self-end border rounded-full hover:bg-brun-contrast hover:text-beige-contrast transition duration:300'>Découvrir</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-6 md:p-10 xl:p-16 border-t border-brun-contrast/60">
                    <div className="flex gap-2 md:gap-4 xl-gap-8 items-center text-brun-contrast justify-center">
                        <FaCheckCircle/>
                        <h3 className="font-semibold text-brun-contrast uppercase">{categorieObject.advantage}</h3>
                    </div>
                    <p className="pt-6 md:pt-10 xl:pt-16 text-justify whitespace-pre-line">{categorieObject.conclusion}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Categorie;

// - Page categories qui presentent les sous categories avec :
        // Une photo 
        // Une prenstation breve de l'avantage de cette sous categorie
        // Un bouton de lien vers la page en questions

// Pages Produits qui presentes les produits d'une sous categories:
        // Titre du modele
        // Photo du modele
        // Phrase de presentation
        // Caracteristiques techniques
        // Phrase laissant entrevoir les differentes possibilites (a faire pour chaque produit ou une fois si les produits ont tous les meme possibilites sur demande)
    