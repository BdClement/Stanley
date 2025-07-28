import '../../styles/Content.css'
import Formulaire from './Formulaire/Formulaire';

function Content() {
    return (
        <main className='flex-1 min-h-screen items-center justify-center'>
            {/* <p>Ceci est mon contenu.</p> */}
            <Formulaire />
        </main>
    )
}

export default Content;