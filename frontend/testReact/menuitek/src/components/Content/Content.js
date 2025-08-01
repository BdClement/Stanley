import '../../styles/Content.css'
import Formulaire from './Formulaire/Formulaire';
// import Accueil from './Accueil/Accueil';

function Content() {
    return (
        <main className='flex-1 items-center justify-center'>
            {/* <p>Ceci est mon contenu.</p> */}
            <Formulaire />
            {/* <Accueil /> */}
        </main>
    )
}

export default Content;