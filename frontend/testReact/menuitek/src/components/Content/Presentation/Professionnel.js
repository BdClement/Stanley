function Professsionnel() {
    return (
        <div className="flex flex-col gap-4 lg:gap-8 xl:gap-12 px-[5vw] xl:px-[8vw]">
            <h1 className='font-semibold text-brun-contrast uppercase'>Pour les promoteurs et architectes</h1>
            <p>Nous savons que les professionnels du bâtiment ont besoin de partenaires fiables.</p>
            <p>MENUITEK offre :</p>
            <ul className="flex flex-col list-disc list-inside gap-2 lg:gap-4 2xl:gap-6 border-b border-beige-main/30 pb-[5vh] text-justify px-2 lg:px-4 xl:px-6">
                <li> Des devis rapides et détaillés</li>
                <li> Une parfaite maîtrise des appels d’offres et des contraintes techniques</li>
                <li> Un partenaire réactif, qui comprend les enjeux du chantier et respecte les délais</li>
                <li> Une interlocution fluide, de la phase d’étude à la réception du chantier</li>
            </ul>
        </div>
    )
}

export default Professsionnel;