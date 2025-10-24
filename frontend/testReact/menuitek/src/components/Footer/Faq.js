function Faq() {
    return (
        // <div className="flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in">
        // </div>

        <div className="min-h-screen flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in text-justify">
            <h1 className="font-semibold text-brun-contrast uppercase text-center">FAQ</h1>
            <p className="text-center">
                Retrouvez ici les réponses aux questions les plus fréquemment posées à propos de Menuitek.
            </p>
            <div>
                <h3 className="font-semibold text-brun-contrast uppercase">Quels types de menuiseries propose Menuitek ?</h3>
                <p>Menuitek conçoit, fabrique et installe une large gamme de menuiseries : fenêtres, portes, baies vitrées, volets, disponibles en aluminium, PVC et bois.
                 Tous nos produits sont réalisés sur mesure pour s’adapter parfaitement à votre habitation ou à votre projet immobilier.</p>
            </div>
            <div>
                <h3 className="font-semibold text-brun-contrast uppercase">En quoi les produits Menuitek se distinguent-ils ?</h3>
                <p>Nos menuiseries allient design, performance et durabilité.
                 Fabriquées avec des matériaux de qualité européenne, elles offrent une isolation thermique et acoustique optimale, tout en garantissant une longue durée de vie.
                 Chaque produit est soumis à un contrôle qualité rigoureux, pour vous assurer un rendu irréprochable et une finition haut de gamme.</p>
            </div>
            <div>
                <h3 className="font-semibold text-brun-contrast uppercase">Intervenez-vous uniquement en France ?</h3>
                <p>Menuitek est basée en France, mais nous accompagnons également nos clients à l’international, notamment au Sénégal et au Maroc où nous proposons des menuiseries européennes de haute qualité à destination des particuliers et des promoteurs immobiliers.</p>
            </div>
            <div>
                <h3 className="font-semibold text-brun-contrast uppercase">Comment se déroule une commande chez Menuitek ?</h3>
                <p>Notre processus est simple et transparent :</p>
                <ol className="list-decimal list-inside">
                    <li>Prise de contact via notre site ou par téléphone</li>
                    <li>Écoute de vos besoins et prise de mesures précises</li>
                    <li>Devis gratuit et personnalisé</li>
                    <li>Fabrication sur mesure dans nos ateliers partenaires</li>
                    <li>Livraison et pose par nos installateurs agréés (selon votre projet)</li>
                </ol>
                <p>Nous restons à vos côtés à chaque étape, jusqu’à la réception du chantier.</p>
            </div>
            <div>
                <h3 className="font-semibold text-brun-contrast uppercase">Proposez-vous la pose ou uniquement la fourniture des menuiseries ?</h3>
                <p>Les deux sont possibles.
                 Menuitek propose la fourniture seule pour les professionnels ou particuliers déjà accompagnés par un poseur, mais aussi un service complet avec pose assurée par nos équipes qualifiées.
                 Vous bénéficiez ainsi d’une installation soignée et conforme aux normes en vigueur.</p>
            </div>
            <div>
                <h3 className="font-semibold text-brun-contrast uppercase">Quel matériau choisir : aluminium, PVC ou bois ?</h3>
                <p>Chaque matériau a ses avantages :</p>
                <ul className="list-disc list-inside">
                    <li>Aluminium : design contemporain, robustesse et finesse des profilés, idéal pour les grandes ouvertures.</li>
                    <li>PVC : excellent rapport qualité/prix, très bon isolant thermique et acoustique, sans entretien.</li>
                    <li>Bois : chaleur naturelle, esthétique intemporelle et très bonnes performances isolantes.</li>
                </ul>
                <p>Nos conseillers vous accompagnent pour trouver la solution la plus adaptée à vos besoins et à votre style architectural.</p>
            </div>
            <div>
                <h3 className="font-semibold text-brun-contrast uppercase">Quels sont les délais de fabrication et de livraison ?</h3>
                <p>Les délais varient selon le type de produit et le niveau de personnalisation :</p>
                <ul className="list-disc list-inside">
                    <li>Fenêtres PVC, bois ou aluminium : entre 3 et 5 semaines</li>
                    <li>Portes et volets : environ 4 à 6 semaines</li>
                </ul>
                <p>Ces délais incluent la fabrication sur mesure et, si besoin, la livraison jusqu’à votre domicile ou votre chantier.</p>
                {/* <p>Vous pouvez nous contacter par e-mail à <a href="mailto:contact@menuitek.fr" className="text-blue-600 underline">contact@menuitek.fr</a> ou par téléphone au 01 40 55 46 08 du lundi au vendredi de 9h à 18h.</p> */}
            </div>
            <div>
                <h3 className="font-semibold text-brun-contrast uppercase">Vos produits sont-ils garantis ?</h3>
                <p>Oui. Tous nos produits bénéficient d’une garantie fabricant pouvant aller jusqu’à 10 ans, selon le type de menuiserie.
                 Nos profilés, vitrages et accessoires sont certifiés selon les normes européennes (CE, NF, etc.), vous assurant sécurité, performance et fiabilité dans le temps.
                </p>
            </div>
            <div>
                <h3 className="font-semibold text-brun-contrast uppercase">Puis-je obtenir un devis gratuitement ?</h3>
                <p> Tout à fait.<br/>Les devis Menuitek sont gratuits et sans engagement.
                 Il vous suffit de nous transmettre vos dimensions, vos plans ou quelques photos de votre projet, et nous vous répondrons rapidement avec une proposition personnalisée.</p>
            </div>

            <div>
                <h3 className="font-semibold text-brun-contrast uppercase">Travaillez-vous avec les promoteurs et architectes ?</h3>
                <p>Oui, c’est une part importante de notre activité.
                 Menuitek collabore avec des promoteurs immobiliers, architectes et entreprises du bâtiment pour des projets de construction ou de rénovation.
                 Nous offrons des solutions sur mesure, esthétiques et performantes, tout en garantissant le respect des contraintes techniques et des délais de chantier.</p>
                {/* <p>Pour supprimer votre compte, veuillez envoyer une demande par e-mail à <a href="mailto:support@menuitek.fr" className="text-blue-600 underline">support@menuitek.fr</a>. Votre compte sera supprimé dans les 48h suivant la demande.</p> */}
            </div>
        </div>
    )
}

export default Faq

