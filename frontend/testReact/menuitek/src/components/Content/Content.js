import '../../styles/Content.css'
// import Accueil from './Accueil/Accueil';
// import Formulaire from './Formulaire/Formulaire';
// import Presentation from './Presentation/Presentation';
// import Categorie from './Produits/Categories'
import Fenetres from './Produits/Fenetres/Fenetres'

function Content() {
    return (
        <main className='flex-1 items-center justify-center text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl'>
            {/* <Accueil /> */}
            {/* <Presentation /> */}
            {/* <Formulaire /> */}
            {/* <Categorie categorieName={"fenetres"}/> */}
            {/* <Categorie categorieName={"portes"}/> */}
            {/* <Categorie categorieName={"volets"}/> */}
            <Fenetres fenetreType={"fenetresPVC"}/>
            <Fenetres fenetreType={"fenetresBois"}/>
            <Fenetres fenetreType={"fenetresAlu"}/>
        </main>
    )
}

export default Content;

// Page Produits
    // Au survol du bouton Nos Produits => un element proposent d'un coup les categories et les sous categories
    // Les categories en page d'accueils amene a une page prenstant les sous categories dans chaque categorie
    // Le clic sur une sous categorie est la page produit finale avce tout les produits d'une sous categorie


// Contenu a faire :
    // - Element au survol (UX)
    // - Page categories qui presntent les sous categories avec :
            // Une photo 
            // Une prenstation breve de l'avantage de cette sous categorie
            // Un bouton de lien vers la page en questions
    // - Page de sous categories avec :
            // Une photo
            // Un visuel presentant partiellement ou integralement els variantes
            // Un visuel similaire avec les couleurs possibles
            // Une estimation de prix (a partir de)
            // Informations diverses (autres variantes dispos et autres possibilites)
            // Un bouton en lien pour contacter a propos de ce prodtuis (Devis)