function Confidentialite() {
    return (
        <div className="min-h-screen flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] opacity-0 animate-zoom-in text-brun-contrast">
            <h1 className='font-semibold text-brun-main uppercase text-center'>Politique de confidentialité</h1>
            <p>Dernière mise à jour : 10/09/2025</p>
            <p>La présente politique de confidentialité a pour objectif de vous informer de manière claire et transparente sur la manière dont sont traitées les données personnelles collectées via notre site internet dans le respect du cadre légal (Règlement Général sur la Protection des Données)</p>
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>1 - Données collectées</h3>
                <p>Le site ne collecte pas de données personnelles automatiquement. <br/>Les seules données susceptibles d’être collectées sont celles que vous nous fournissez volontairement via le formulaire de contact :</p>
                <ul className="list-disc list-inside p-4">
                    <li>Nom / Prénom / Nom d'entreprise</li>
                    <li>Adresse e-mail</li>
                    <li>Numéro de téléphone</li>
                </ul>
                <p>Aucune autre donnée personnelle n’est collectée via le site.</p>
            </div>
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>2 - Finalité de la collecte</h3>
                <p>Ces informations sont collectées dans le seul but de vous recontacter pour répondre à votre demande de contact ou de devis.<br/>Il n’y a pas de traitement automatisé, pas de profilage, et les données ne sont pas utilisées à des fins commerciales ou marketing.</p>
            </div>
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>3 - Base légale du traitement</h3>
                <p>La base légale du traitement est le consentement que vous donnez en remplissant et en soumettant le formulaire de contact (article 6.1.a du RGPD).<br/>Il n’y a pas de traitement automatisé, pas de profilage, et les données ne sont pas utilisées à des fins commerciales ou marketing.</p>
            </div>
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>4 - Destinataires des données</h3>
                <p>Les données saisies via le formulaire sont transmises directement par e-mail au service commercial de Menuitek, et ne sont pas stockées sur le site.</p>
            </div>
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>5 - Durée de conservation</h3>
                <p>Les données reçues par e-mail sont conservées uniquement le temps nécessaire pour traiter votre demande. Elles peuvent ensuite être archivées dans le cadre de la gestion de la relation client, selon la politique de conservation des e-mails de l’entreprise.<br/>Aucune donnée n’est conservée dans une base de données liée au site internet.</p>
            </div>
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>6 - Cookies</h3>
                <p>Le site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de suivi, publicitaire ou de mesure d’audience n’est utilisé.</p>
            </div>
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>7 - Vos droits</h3>
                <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside p-4">
                    <li>Droit d’accès à vos données</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l’effacement</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit d’opposition</li>
                    <li>Droit de retirer votre consentement à tout moment</li>
                </ul>
                <p>Pour exercer vos droits, vous pouvez contacter notre référent RGPD (voir ci-dessous).</p>
            </div>
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>8 - Coordonnées du responsable du traitement</h3>
                <ul className="list-inside p-4">
                    <li>Menuitek</li>
                    <li>9, Rue Anatole de la Forge, Paris, Île-de-France 75017, FR</li>
                    <li><a href="mailto:contact@menuitek.com">contact@menuitek.com</a></li>
                    <li>01 40 55 46 08</li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>9 - Sécurité des données</h3>
                <p>Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque.</p>
            </div>
            <div>
                <h3 className='font-semibold text-brun-main uppercase'>10 - Contact</h3>
                <p>Pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter à l’adresse suivante : <a href="mailto:contact@menuitek.com">contact@menuitek.com</a></p>
            </div>
        </div>
    )
}

export default Confidentialite;