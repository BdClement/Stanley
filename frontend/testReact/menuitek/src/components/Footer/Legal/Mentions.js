function Mentions() {
    return (
        <div className="min-h-screen flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in text-brun-contrast">
            <h1 className='font-semibold text-brun-main uppercase text-center'>Mentions légales</h1>
            <p>Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN), il est précisé aux utilisateurs du site www.menuitek.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
            
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>1 - Éditeur du site</h3>
                <ul className="list-inside p-4">
                    <li><strong>Nom de la société :</strong> Menuitek</li>
                    <li><strong>Forme juridique :</strong> Société par actions simplifiée</li>
                    <li><strong>Capital social :</strong> 1 000 €</li>
                    <li><strong>Siège social :</strong> 9, Rue Anatole de la Forge, Paris, Île-de-France 75017, France</li>
                    <li><strong>RCS :</strong> Paris B 941925265</li>
                    <li><strong>Numéro de TVA intracommunautaire :</strong> FR34941925265</li>
                    <li><strong>Responsable de la publication :</strong> THOREL Stanley, fondateur de Menuitek</li>
                    <li><strong>Email :</strong> <a href="mailto:contact@menuitek.com">contact@menuitek.com</a></li>
                    <li><strong>Téléphone :</strong> 01 40 55 46 08</li>
                </ul>
            </div>
            
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>2 - Hébergement</h3>
                <ul className="list-inside p-4">
                    <li><strong>Hébergeur :</strong> TBD</li>
                    <li><strong>Adresse :</strong> TBD</li>
                    <li><strong>Site web :</strong> <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.monsite.com</a></li>
                </ul>
            </div>

            <div>
                <h3 className='font-semibold text-brun-main uppercase'>3 - Propriété intellectuelle</h3>
                <p>L’ensemble des contenus présents sur le site www.menuitek.fr (textes, mise en page, éléments graphiques personnalisés) sont la propriété exclusive de Menuitek, sauf mentions contraires.</p>
                <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Menuitek.</p>
            </div>

            <div>
                <h3 className='font-semibold text-brun-main uppercase'>4 - Crédits</h3>
                <p>Certains contenus visuels utilisés sur ce site proviennent de sources externes :</p>
                <ul className="list-disc list-inside p-4">
                    <li>Icônes et illustrations : Flaticon, Freepik</li>
                    <li>Images de produits : fournies par Eko-Okna S.A.</li>
                    {/* <li>Logo : créé par [?]</li> */}
                </ul>
                <p>Les droits d’auteur relatifs à ces éléments restent la propriété de leurs auteurs respectifs.</p>
                <p>Si vous êtes l’auteurd’un visuel publié ici sans crédit explicite et que vous souhaitez qu’il soit ajouté ou retiré, merci de nous contacter.</p>
                {/* <p className="text-brun-contrast font-bold uppercase">Rechercher tout les logos/images pour crediter le createur ?</p> */}
            </div>

            
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>5 - Responsabilité</h3>
                <p>Menuitek s’efforce de fournir sur le site www.menuitek.fr des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
                <p>Le site peut contenir des liens hypertextes vers d'autres sites, mis en place avec l'autorisation de Menuitek. Cependant, Menuitek n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.</p>
            </div>
            
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>6 - Contact</h3>
                <p>Pour toute question concernant le site, vous pouvez nous contacter par e-mail à l’adresse suivante : <a href="mailto:contact@menuitek.fr" className="text-blue-600 underline">contact@menuitek.fr</a> ou par téléphone au 01 40 55 46 08.</p>
            </div>
        </div>
    )
}

export default Mentions;