// import des images
import SK45 from '../assets/Volets/VoletsRoulants/SK45.png'
import VoletsBattantsBois from '../assets/Volets/VoletsBattantsBois/VoletsBattantsBois.png'
import VoletsBattantsAluminium from '../assets/Volets/VoletsBattantsAlu/VoletsBattantsAluminium.png'

export const volets = {
    voletsRoulant: {
        titre: "Volets roulants",
        // eslint-disable-next-line no-multi-str
        intro: "Principal moyen de protéger les intérieurs de l'excès de lumière et de chaleur, les volets roulants peuvent être installés à l'intérieur d'un bâtiment ou sur la façade. \
        Les volets roulants offrent une solution moderne, pratique et sécurisée pour équiper vos fenêtres et baies vitrées. Discrets et esthétiques, ils s’intègrent harmonieusement à tous les styles d’habitations, en construction neuve comme en rénovation.",
        items: [
           {
                titre: "SK45",
                image: SK45,
                // eslint-disable-next-line no-multi-str
                presentation: "Le volet roulant SK45 se distingue par son caisson coupé à 45°, au design moderne et élégant. Polyvalent, il peut être installé aussi bien en façade que dans le dormant de la fenêtre. \
                Avec sa nouvelle serrure inspirée du modèle RAFF-i, il allie esthétique, fiabilité et praticité, faisant du SK45 une solution idéale pour tous types de bâtiments.",
                caracteristiques: [
                    "type de tablier : aluminium rempli de mousse de polyuréthane ou de PVC",
                    "guides en aluminium",
                    "largeur minimale du caisson 400mm",
                ],
                infos: "Disponible en version économique SK45 Railing.",
                fiche: "pdfs/FicheProduits/VoletsRoulants/sk45.pdf",
                prix: "Fourchette de prix à partir de..."
            },
        ],
        avantage: "Confort et sécurité",
        // eslint-disable-next-line no-multi-str
        conclusion: "Choisir des volets roulants, c’est opter pour une solution fiable et fonctionnelle qui améliore à la fois le confort et la sécurité de votre habitation. Ils protègent des intrusions et permettent de moduler \
        facilement la luminosité intérieure. Les volets roulants s’adaptent parfaitement à vos besoins et apportent une réelle valeur ajoutée à votre logement."
    },
    voletsBattantsBois: {
        titre: "Volets battants en bois",
        // eslint-disable-next-line no-multi-str
        intro: "Les volets battants en bois incarnent le charme traditionnel et l’élégance naturelle d’un matériau noble. Chaleureux et authentiques, ils s’intègrent aussi bien aux maisons anciennes qu’aux constructions contemporaines en leur apportant une touche \
        d’authenticité. Grâce à leurs excellentes qualités isolantes et leur robustesse, ils assurent confort et durabilité tout en valorisant l’esthétique de la façade.",
        items: [
           {
                titre: "Volets battants en bois",
                image: VoletsBattantsBois,
                // eslint-disable-next-line no-multi-str
                presentation: "Fabriqués en bois naturel et écologique, ces volets battants allient élégance et respect de l’environnement. Ils bloquent l’excès de chaleur tout en laissant circuler l’air. Une solution idéale pour ceux qui recherchent l’authenticité du bois et un style inspiré de l’esthétique traditionnelle ou méditerranéenne.",
                caracteristiques: [
                    "montage sur un cadre supplémentaire",
                    "lames fixes",
                ],
                infos: "Disponible sur mesure.",
                fiche: "pdfs/FicheProduits/VoletsBattantsBois/volets-battants-en-bois.pdf",
                prix: "Fourchette de prix à partir de..."
            },
        ],
        avantage: "Authenticité et isolation naturelle",
        // eslint-disable-next-line no-multi-str
        conclusion: "Opter pour des volets battants en bois, c’est faire le choix d’une solution à la fois esthétique, performante et durable. Naturellement isolant et résistant, le bois protège efficacement contre les variations climatiques tout en apportant chaleur et caractère à votre habitation.\
         Personnalisables en termes de finitions, de teintes et de styles, les volets battants en bois restent une valeur sûre pour allier tradition, confort et élégance."
    },
    voletsBattantsAlu: {
        titre: "Volets battants en aluminium",
        // eslint-disable-next-line no-multi-str
        intro: "Les volets battants en aluminium sont un produit moderne inspiré par le style traditionnel. Ces protections de fenêtres, montées sur la façade du bâtiment, offrent une excellente fonctionnalité, permettent de contrôler la quantité de lumière et de chaleur à l'intérieur tout en garantissant l'intimité.\
         En même temps, ils constituent un ajout remarquable à toute façade, lui conférant un caractère unique.",
        items: [
           {
                titre: "Volets battants en aluminium",
                image: VoletsBattantsAluminium,
                // eslint-disable-next-line no-multi-str
                presentation: "Conçus avec un cadre robuste en aluminium extrudé, ces volets battants garantissent solidité et longévité. Ils offrent une protection efficace contre les intempéries tout en s’adaptant aux projets modernes.",
                caracteristiques: [
                    "Pas de caractéristiques"
                ],
                infos: "Disponibles avec des lamelles fixes ou orientables et en différentes couleurs.",
                fiche: "pdfs/FicheProduits/VoletsBattantsAlu/volets-battants-alu.pdf",
                prix: "Fourchette de prix à partir de..."
            },
        ],
        avantage: "Robustesse et design moderne",
        // eslint-disable-next-line no-multi-str
        conclusion: "Choisir des volets battants en aluminium, c’est opter pour une solution durable, pratique et esthétique. Ils demandent très peu d’entretien tout en garantissant une protection efficace contre le soleil, le vent et la pluie. \
        Ils allient élégance, longévité et confort d’utilisation pour valoriser durablement votre habitation."
    },
}