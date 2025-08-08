import '../../styles/Content.css'
import Formulaire from './Formulaire/Formulaire';
import Accueil from './Accueil/Accueil';
import Presentation from './Presentation/Presentation';

function Content() {
    return (
        <main className='flex-1 items-center justify-center text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl'>
            <Accueil />
            <Presentation />
            <Formulaire />
        </main>
    )
}

export default Content;