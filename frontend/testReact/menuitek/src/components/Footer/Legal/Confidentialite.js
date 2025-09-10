function Confidentialite() {
    return (
        <div className="min-h-screen flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in">
            <h1 className='font-semibold text-brun-contrast uppercase text-center'>Politique de confidentialité</h1>
            <ol>
                <li>Quelles donnees sont collectees</li>
                <li>Comment elles sont utilisees (Uniquement recontacter si c'est la volonte du client)</li>
                <li>Qui y a acces (uniquement service commercial de Menuitek)</li>
                <li>Combien de temps elles sont conservees (pas de stockage)</li>
                <li>Base Legales (uniquement avec le consentement du client lors du formulaire)</li>
                <li>Droit d'acces des utilisateurs (?)</li>
                <li>Coordonnees RGPD du site</li>
                <li>Pas de traitement automatise ni de profilage</li>
                <li>Cookies (?)</li>
            </ol>
            <div>Faire ca sous formes de ol textuelle simple</div>
        </div>
    )
}

export default Confidentialite;