// import des images
import Ideal4000 from '../assets/Fenetres/FenetresPVC/Ideal4000Small.png'
import Ideal5000 from '../assets/Fenetres/FenetresPVC/Ideal5000.png'
import Ideal8000 from '../assets/Fenetres/FenetresPVC/Ideal8000.png'
import IdealNeo from '../assets/Fenetres/FenetresPVC/IdealNeo.webp'
import EasySlide from '../assets/Fenetres/FenetresPVC/EasySlide.png'
import MultiSlide from '../assets/Fenetres/FenetresPVC/MultiSlide.png'
import SmartSlide from '../assets/Fenetres/FenetresPVC/SmartSlide.png'
import Accordeon from '../assets/Fenetres/FenetresPVC/AluplastAccordeon.png'
import HST85 from '../assets/Fenetres/FenetresPVC/HST85.png'

import Naturo68 from '../assets/Fenetres/FenetresBois/Naturo68.png'
import Naturo80 from '../assets/Fenetres/FenetresBois/Naturo80.png'
import Naturo92 from '../assets/Fenetres/FenetresBois/Naturo92.png'
import Naturo68HST from '../assets/Fenetres/FenetresBois/Naturo68HST.png'
import Naturo80HST from '../assets/Fenetres/FenetresBois/Naturo80HST.png'

import Cortizo70HO from '../assets/Fenetres/FenetresAlu/Cortizo70HO.webp'
import CorVision from '../assets/Fenetres/FenetresAlu/CorVision.png'
import CorVisionGalandage from '../assets/Fenetres/FenetresAlu/CorVisionGalandage.png'
import CorVisionPlus from '../assets/Fenetres/FenetresAlu/CorVisionPlus.png'
import Ecofutural from '../assets/Fenetres/FenetresAlu/Ecofutural.png'
import MaxLight from '../assets/Fenetres/FenetresAlu/MaxLight.png'
import MaxLightMonorail from '../assets/Fenetres/FenetresAlu/UltraglideMaxLight Monorail.png'
import ModernSlide from '../assets/Fenetres/FenetresAlu/ModernSlide.png'
import Panorama from '../assets/Fenetres/FenetresAlu/PanoramaAliplast.png'
import SlideGlass from '../assets/Fenetres/FenetresAlu/SlideGlass.png'
import Superial from '../assets/Fenetres/FenetresAlu/Superial.png'
import UltraGlide from '../assets/Fenetres/FenetresAlu/UltraGlide.png'
import VisoGlide from '../assets/Fenetres/FenetresAlu/VisoGlide.png'

import Aluplast from '../assets/Marques/AluplastLogo.png'
import Aliplast from '../assets/Marques/AliplastLogo.png'
import Cortizo from '../assets/Marques/cortizo-removebg-preview.png'

export const fenetres = {
    fenetresPVC: {
        titre: "Fenêtres en PVC",
        // eslint-disable-next-line no-multi-str
        intro: "Les fenêtres en PVC représentent une solution moderne, polyvalente et économique pour équiper tous types de bâtiments, en construction neuve comme en rénovation. Elles combinent d'excellentes performances thermiques et acoustiques avec une grande durabilité, tout en offrant un excellent rapport qualité/prix.\
                Grâce à une fabrication rigoureuse et des procédés de production fiables, nos fenêtres en PVC garantissent une finition homogène, conforme aux normes en vigueur. Disponibles dans une large palette de coloris et de textures, elles s’adaptent à tous les styles architecturaux, du plus classique au plus contemporain.",
        items: [
            {
                titre: "Aluplast Ideal 4000",
                image: Ideal4000,
                presentation: "Il s’agit d’un système polyvalent qui convient parfaitement à l’architecture moderne des habitations individuelles et collectives ainsi qu’à la rénovation.",
                caracteristiques: [
                    "5 chambres",
                    "2 joints d’étanchéité",
                    "70mm de profondeur",
                    "1Uw pour Ug = 0,7"
                ],
                // eslint-disable-next-line no-multi-str
                infos: "Également disponible en version rénovation (ailes de rénovation 20,40 ou 65), monobloc et capotage aluminium.\
                Différentes options et accessoires sont également disponibles (grilles de ventilation, poignées, croisillons, moustiquaires…).",
                fiche: "/pdfs/FicheProduits/FenetresPVC/ideal-4000.pdf",
                logo: Aluplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Aluplast Ideal 5000",
                image: Ideal5000,
                presentation: "Des fenêtres alliant un design moderne à de très bonnes performances. Système à triple étanchéité.",
                caracteristiques: [
                    "5 chambres",
                    "3 joints d’étanchéité",
                    "70mm de profondeur",
                    "0,94Uw pour Ug = 0,7"
                ],
                // eslint-disable-next-line no-multi-str
                infos: "Egalement disponible en version rénovation (ailes de rénovation 20,40 ou 65)  et capotage aluminium.\
                Différentes options et accessoires sont également disponibles (grilles de ventilation, poignées, croisillons, moustiquaires…).",
                fiche: "/pdfs/FicheProduits/FenetresPVC/ideal-5000.pdf",
                logo: Aluplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Aluplast Ideal 8000",
                image: Ideal8000,
                presentation: "Les fenêtres de dernière génération. En les choisissant, vous optez pour la chaleur, le silence et l’esthétique. Les fenêtres basées sur le système Ideal 8000 assurent l’isolation thermique et acoustique au plus haut niveau. Recommandées pour les maisons passives.",
                caracteristiques: [
                    "6 chambres",
                    "3 joints d’étanchéité",
                    "85mm de profondeur",
                    "0,74Uw pour Ug = 0,74"
                ], 
                infos: "Disponible avec capotage aluminium. Différentes options et accessoires sont également disponibles (grilles de ventilation, poignées, croisillons, moustiquaires…).",
                fiche: "/pdfs/FicheProduits/FenetresPVC/ideal-8000.pdf",
                logo: Aluplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Aluplast Ideal Neo",
                image: IdealNeo,
                // eslint-disable-next-line no-multi-str
                presentation: "Ideal Neo est un système de fenêtres au design moderne avec des profilés affinés, parfait pour la construction neuve comme pour la rénovation. Grâce à la technologie innovante Bonding Inside, le vitrage est collé en permanence au cadre, ce qui améliore la stabilité,\
                 les performances thermiques et la durabilité. Une solution élégante et fiable, conçue pour durer dans le temps.",
                caracteristiques: [
                    "5-6 chambres",
                    "2 joints d’étanchéité",
                    "0,8Uw pour Ug = 0,5"
                ], 
                infos: "Disponible en rénovation et monobloc. Différentes options et accessoires sont également disponibles (grilles de ventilation, poignées, croisillons, moustiquaires…).",
                fiche: "/pdfs/FicheProduits/FenetresPVC/ideal-neo.pdf",
                logo: Aluplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Aluplast Easy slide",
                image: EasySlide,
                // eslint-disable-next-line no-multi-str
                presentation: "Le système Easy Slide est une solution de base pour baies vitrées coulissantes, offrant un design fin et élégant avec un déplacement sur deux rails. Équipé de chariots robustes avec patins de nivellement et renforts latéraux, il assure un fonctionnement fluide et durable. \
                Compatible avec un vitrage jusqu’à 20 mm (simple ou double, y compris verre de sécurité), il supporte jusqu’à 60 kg par vantail. Des joints à brosse assurent l’étanchéité, et une large palette de couleurs Aluplast permet de personnaliser l’esthétique des baies.",
                caracteristiques: [
                    "2 rails",
                    "60mm de profondeur",
                    "1,5Uw pour Ug = 1,0"
                ],
                // eslint-disable-next-line no-multi-str
                infos: "Une large gamme de finitions lisses ou imitation bois permet d’adapter la baie à tout type d’intérieur ou de façade.\
                Différentes options et accessoires sont également disponibles (grilles de ventilation, poignées, croisillons, moustiquaires…).",
                fiche: "/pdfs/FicheProduits/FenetresPVC/easy-slide.pdf",
                logo: Aluplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Aluplast Multi slide",
                image: MultiSlide,
                // eslint-disable-next-line no-multi-str
                presentation: "Le système Multi Slide est une solution économique idéale pour les petites pièces où l’ouverture intérieure des portes-fenêtres est impossible par manque d’espace. \
                Il permet de réaliser des baies vitrées coulissantes jusqu’à 7,25 m², avec une option à trois rails offrant un effet similaire à une baie accordéon pour un passage dégagé. Des joints à brosse assurent l’étanchéité entre le dormant et les vantaux.",
                caracteristiques: [
                    "2 ou 3 rails",
                    "170mm de profondeur",
                    "1,4Uw pour Ug = 0,9"
                ],
                // eslint-disable-next-line no-multi-str
                infos: "Une large gamme de finitions lisses ou imitation bois permet d’adapter la baie à tout type d’intérieur ou de façade.\
                Différentes options et accessoires sont également disponibles (grilles de ventilation, poignées, croisillons, moustiquaires…).",
                fiche: "/pdfs/FicheProduits/FenetresPVC/multi-slide.pdf",
                logo: Aluplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Aluplast Smart slide",
                image: SmartSlide,
                // eslint-disable-next-line no-multi-str
                presentation: "Le système Smart Slide est une baie coulissante dotée d’un mécanisme de fermeture innovant, simple et intuitif, similaire à celui des portes levantes-coulissantes. Il permet la réalisation de grandes structures jusqu’à 1,5 x 2,3 m, avec une profondeur d’installation de 140 mm et des vitrages allant jusqu’à 42 mm, offrant ainsi de bonnes performances thermiques.",
                caracteristiques: [
                    "2 rails",
                    "140mm de profondeur",
                    "0,92Uw pour Ug = 0,6"
                ],
                // eslint-disable-next-line no-multi-str
                infos: "Une large gamme de finitions lisses ou imitation bois permet d’adapter la baie à tout type d’intérieur ou de façade.\
                Différentes options et accessoires sont également disponibles (grilles de ventilation, poignées, croisillons, moustiquaires…).",
                fiche: "/pdfs/FicheProduits/FenetresPVC/smart-slide.pdf",
                logo: Aluplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Aluplast Accordéon ",
                image: Accordeon,
                // eslint-disable-next-line no-multi-str
                presentation: "Le système accordéon Aluplast crée une ouverture généreuse vers l’extérieur et relie harmonieusement l’intérieur à l’extérieur.\
                Conçus sur la base du système Ideal 4000, les modules garantissent stabilité, isolation et durabilité",
                caracteristiques: [
                    "de 3 à 6 vantaux",
                    "jusqu’à 5300 mm de longueur",
                ],
                // eslint-disable-next-line no-multi-str
                infos: "Disponible dans une palette de couleurs et de finitions.\
                Différentes options et accessoires sont également disponibles (grilles de ventilation, poignées, croisillons…).",
                fiche: "fiche a ajouter",
                logo: Aluplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Aluplast HST 85",
                image: HST85,
                // eslint-disable-next-line no-multi-str
                presentation: "Le système HST 85 est une baie levante-coulissante à hautes performances thermiques, idéale pour les grandes surfaces vitrées tout en offrant une excellente isolation. \
                Il s’adapte aux besoins, étant conçue pour les bâtiments à faible consommation d’énergie et pouvant être associée à un capotage aluminium Aluskin pour une finition élégante. Les profilés sont proposés avec différents cœurs (blanc, marron, crème ou anthracite) pour une couleur harmonieuse après plaxage. \
                Le système permet de réaliser des baies jusqu’à 6,7 m de largeur, avec des vantaux allant jusqu’à 3 x 2,5 m.",
                caracteristiques: [
                    "2 rails",
                    "19mm de profondeur",
                    "0,85Uw pour Ug = 0,5"
                ],
                // eslint-disable-next-line no-multi-str
                infos: "Disponible avec capotage aluminium.\
                Différentes options et accessoires sont également disponibles (grilles de ventilation, poignées, croisillons, moustiquaires…).",
                fiche: "/pdfs/FicheProduits/FenetresPVC/hst-85.pdf",
                logo: Aluplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
        ],
        avantage: "Performance et durabilité",
        // eslint-disable-next-line no-multi-str
        conclusion: "Choisir une fenêtre en PVC, c’est faire le choix d’un produit fiable, performant et durable. Grâce à une isolation thermique de haut niveau, ces fenêtres permettent de réaliser des économies d’énergie significatives, tout en maintenant un confort optimal en toute saison.\
        Leur conception soignée assure également une excellente isolation phonique, un entretien réduit et une grande longévité. C’est une solution idéale pour tous ceux qui recherchent une menuiserie efficace, esthétique et accessible."
    },
    fenetresAlu: {
        titre: "Fenêtres en aluminium",
        // eslint-disable-next-line no-multi-str
        intro: "L’alliance parfaite entre esthétique contemporaine et robustesse. Les fenêtres en aluminium séduisent de plus en plus grâce à leur style épuré, \
        leur excellente tenue dans le temps et leur adaptabilité aux projets les plus exigeants. Idéales pour les architectures modernes, elles permettent la création de larges surfaces vitrées qui baignent les intérieurs de lumière naturelle, tout en garantissant une isolation thermique de haut niveau.",
        items: [
           {
                titre: "Aliplast Ecofutural",
                image: Ecofutural,
                // eslint-disable-next-line no-multi-str
                presentation: "Système à rupture de pont thermique à trois chambres, idéal pour fenêtres à la française, oscillo-battantes, ouvrant vers l’intérieur, portes à un ou deux vantaux et fenêtres monoblocs. Conçu pour répondre aux normes exigeantes d’isolation thermique.",
                caracteristiques: [
                    "3 chambres",
                    "épaisseur vitrage 14 - 61mm",
                    "profondeur dormant 65mm",
                    "Uw 1,1 pour Ug = 0,6"
                ],
                infos: "Disponible en deux versions : Ecofutural (isolation autour du vitrage) et Ecofutural i+ (isolation renforcée avec remplissage des espaces entre intercalaires).",
                fiche: "/pdfs/FicheProduits/FenetresAlu/ecofutural.pdf",
                logo: Aliplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Aliplast Superial",
                image: Superial,
                // eslint-disable-next-line no-multi-str
                presentation: "Polyvalent, il permet de réaliser fenêtres, vitrines extérieures, oscillo-battantes, à soufflet, oscillo-coulissantes, ainsi que portes ouvrant vers l’intérieur. Compatible avec les façades vitrées. Offre d’excellentes performances thermiques grâce à des inserts spécifiques placés autour du vitrage et entre les intercalaires. Utilisable en résidentiel comme en bâtiment public.",
                caracteristiques: [
                    "3 chambres",
                    "épaisseur vitrage 14 - 61mm",
                    "profondeur dormant 75mm",
                    "2 joints",
                    "Uw 0,9 pour Ug = 0,5"
                ],
                infos: "Disponible en versions Superial i (isolation renforcée) et Superial i+ (isolation renforcée optimale).",
                fiche: "/pdfs/FicheProduits/FenetresAlu/superial.pdf",
                logo: Aliplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Aliplast Maxlight",
                image: MaxLight,
                // eslint-disable-next-line no-multi-str
                presentation: "Synonyme de modernité, ce système donne à la structure un caractère industriel et moderne, tout cela grâce à la visibilité minimale de la largeur du profilé. Robuste, esthétique et performant, MaxLight allie durabilité et design pour s’adapter à tous les styles architecturaux.",
                caracteristiques: [
                    "épaisseur vitrage 59 - 68mm",
                    "profondeur dormant 75mm",
                    "Uw 0,85 pour Ug = 0,5"
                ],
                infos: "Disponible en version Steel, design et invisible.",
                fiche: "/pdfs/FicheProduits/FenetresAlu/maxlight.pdf",
                logo: Aliplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Aliplast ModernSlide",
                image: ModernSlide,
                // eslint-disable-next-line no-multi-str
                presentation: "Le système Modernslide allie performance thermique et design moderne. Grâce à ses rails multiples et sa capacité à intégrer de grands vantaux, il offre luminosité et élégance à vos espaces. Avec l’option galandage, les vantaux disparaissent dans le mur, libérant totalement l’ouverture et créant une transition fluide entre intérieur et extérieur.",
                caracteristiques: [
                    "profondeur dormant 73 - 196 (monobloc)",
                    "2 - 3 ou 4 rails",
                    "épaisseur vitrage 24 - 28 ou 32mm",
                    "Uw 1,7 pour Ug = 1,1"
                ],
                infos: "Disponible avec l’option galandage et monobloc.",
                fiche: "/pdfs/FicheProduits/FenetresAlu/modern-slide.pdf",
                logo: Aliplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Aliplast Panorama",
                image: Panorama,
                // eslint-disable-next-line no-multi-str
                presentation: "Le système Panorama permet la réalisation de baies vitrées de 2 à 8 vantaux se repliant latéralement sans meneau central, offrant ainsi un espace dégagé et un design moderne.\
                Grâce à ses rouleaux en acier et à ses ferrures spécifiques, la manœuvre est fluide et légère. Il assure une excellente étanchéité grâce à ses joints EPDM et brosses haute qualité.",
                caracteristiques: [
                    "épaisseur vitrage 16 à 50 mm",
                    "profondeur dormant 74,5mm",
                    "Uw 1,2 pour Ug = 0,6"
                ],
                infos: "Disponible avec un seuil encastré ou prolongé. Laquage disponible dans les teintes du nuancier RAL ou dans la couleur de votre choix sur indication du code couleur.",
                fiche: "/pdfs/FicheProduits/FenetresAlu/superial.pdf",
                logo: Aliplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Aliplast Visoglide",
                image: VisoGlide,
                // eslint-disable-next-line no-multi-str
                presentation: "Le système coulissant à profilés trois chambres isolés allie confort thermique et praticité. Idéal pour les ouvertures vers terrasses, balcons ou jardins, il peut accueillir jusqu’à six éléments sur plusieurs rails. Grâce à ses chariots spéciaux et à son poteau central ultra-fin, il garantit une ouverture fluide et une esthétique moderne.",
                caracteristiques: [
                    "profondeur dormant (standard / spécial / monorail) 117,7 - 125,4 - 141,6",
                    "2 ou 3 rails",
                    "épaisseur vitrage 6 - 36mm",
                    "Uw 1,7 pour Ug = 1,1"
                ],
                infos: "Disponible avec différents appuis de fenêtre et profilés d’angle pour s’adapter à chaque projet",
                fiche: "/pdfs/FicheProduits/FenetresAlu/visoglide.pdf",
                logo: Aliplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Aliplast Ultraglide",
                image: UltraGlide,
                // eslint-disable-next-line no-multi-str
                presentation: "Le système levante-coulissant permet de réaliser de grandes baies vitrées alliant isolation thermique renforcée, sécurité et design moderne. Disponible en version à seuil bas ou angle 90°, il accepte le double ou triple vitrage et permet de créer de larges surfaces vitrées, apportant un maximum de lumière naturelle tout en restant stable, fonctionnel et élégant.",
                caracteristiques: [
                    "profondeur du dormant 153 – 239mm",
                    "épaisseur vitrage 14 – 52mm",
                    "Uw 1,3 pour Ug = 0,6"
                ],
                infos: "Disponible dans une version à isolation thermique renforcée.",
                fiche: "/pdfs/FicheProduits/FenetresAlu/ultraglide.pdf",
                logo: Aliplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Aliplast Ultraglide MaxLight Monorail",
                image: MaxLightMonorail,
                // eslint-disable-next-line no-multi-str
                presentation: "Le système Ultraglide MAX Light Monorail est un coulissant haut de gamme à rupture de pont thermique, idéal pour les grandes surfaces vitrées. Ses profilés fins maximisent l’apport de lumière et offrent une esthétique moderne et élégante. Avec une excellente isolation thermique et acoustique, il s’adapte aussi bien aux bâtiments résidentiels qu’aux projets publics.",
                caracteristiques: [
                    "profondeur du dormant 176mm",
                    "épaisseur vitrage 15 – 51mm",
                    "Uw 0,8 pour Ug = 0,5"
                ],
                infos: "Disponible dans toutes les couleurs RAL.",
                fiche: "/pdfs/FicheProduits/FenetresAlu/maxlight-monorail.pdf",
                logo: Aliplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Aliplast Slide Glass",
                image: SlideGlass,
                // eslint-disable-next-line no-multi-str
                presentation: "Slide Glass est un système coulissant intérieur au design minimaliste, idéal pour laisser entrer un maximum de lumière naturelle. Conçu avec du verre trempé de 10 mm et des profilés fins, il assure sécurité et élégance. \
                Utilisable aussi bien dans les intérieurs modernes que pour des pergolas, il permet de créer des parois vitrées fixes ou modulables, et même de diviser de grands espaces (comme des bureaux) en zones indépendantes grâce à ses configurations en labyrinthe.",
                caracteristiques: [
                    "profondeur du dormant 153 – 239mm",
                    'épaisseur du dormant  71,1 - 115,5mm',
                    "épaisseur du vitrage 10mm",
                ],
                infos: "Selon les besoins du projet, l’assemblage entre les éléments peut être réalisé sans profilé, pour une continuité visuelle maximale, ou à l’aide d’un profilé à brosse très fin, garantissant une jonction discrète et soignée.",
                fiche: "/pdfs/FicheProduits/FenetresAlu/slide-glass.pdf",
                logo: Aliplast,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Cortizo 70 HO",
                image: Cortizo70HO,
                // eslint-disable-next-line no-multi-str
                presentation: "Fenêtres aluminium à ouvrant caché, le système COR 70 HO en aluminium se distingue par ses profilés extrêmement fins et solides, offrant jusqu’à 85 % de surface vitrée pour un apport maximal de lumière naturelle.\
                Son ouvrant caché crée une façade lisse et moderne, où les parties fixes et mobiles se fondent visuellement pour un rendu élégant et uniforme. Le design raffiné du COR 70 HO permet d’intégrer des poignées centrées ou discrètement décentrées et encastrées, presque invisibles à l’œil nu.",
                caracteristiques: [
                    "profondeur du dormant 70mm",
                    "épaisseur vitrage 26 - 40 mm",
                    "Uw ≥ 0,85"
                ],
                infos: "Pour un style encore plus épuré, les charnières peuvent être entièrement dissimulées. Avec le ferrage approprié, il est possible de réaliser des ouvrants jusqu’à 3,5 mètres de hauteur, alliant esthétique, performance et modernité.",
                fiche: "/pdfs/FicheProduits/FenetresAlu/cortizo-70-ho.pdf",
                logo: Cortizo,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Cor Vision",
                image: CorVision,
                // eslint-disable-next-line no-multi-str
                presentation: "Coulissant minimaliste haut de gamme, le système COR Vision, au design italien raffiné, réduit la présence visible des profilés à seulement 9 % de la structure pour offrir un maximum de surface vitrée et une esthétique d’exception. Les cadres inférieur, supérieur et latéral peuvent être encastrés pour un rendu encore plus épuré.\
                Particularité notable : l’assemblage à 90° des ouvrants se fait sans poteau d’angle, renforçant la continuité visuelle. En version simple rail, le rail peut être dissimulé dans la zone fixe. Grâce à ses cadres renforcés, le COR Vision accueille des ouvrants jusqu’à 320 kg, tout en offrant de bonnes performances thermiques avec un Uw de 1,3 W/m²K.",
                caracteristiques: [
                    "épaisseur dormant 116 - 182mm",
                    "épaisseur vitrage 36 - 54mm",
                    "Uw 1,3"
                ],
                infos: "",
                fiche: "/pdfs/FicheProduits/FenetresAlu/cor-vision.pdf",
                logo: Cortizo,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Cor Vision Plus",
                image: CorVisionPlus,
                // eslint-disable-next-line no-multi-str
                presentation: "Coulissant XXL minimaliste. Version haut de gamme du COR Vision, le COR Vision Plus est conçu pour accueillir de très grands vitrages, offrant jusqu’à 94 % de surface vitrée pour un apport maximal de lumière naturelle. \
                Ses lignes fines et élégantes, associées à un vitrage performant, permettent d’atteindre un Uw exceptionnel de 0,9 W/m²K. \
                Le cadre peut être totalement dissimulé sur tout le périmètre, ne laissant visible qu’un battement central de 25 mm. Compatible avec des vitrages jusqu’à 54 mm d’épaisseur, le système optimise isolation thermique et acoustique. Chaque vantail peut mesurer jusqu’à 4 000 mm de haut, avec un poids maximal de 700 kg (400 kg en ouverture manuelle).",
                caracteristiques: [
                    "épaisseur dormant 180 mm - 278 mm",
                    "épaisseur vitrage 26 - 30 mm",
                    "Uw 0,9"
                ],  
                infos: "Finition vernie disponible dans l’ensemble de la palette RAL , ainsi que sur demande à partir d’un code de poudre spécifique.",
                fiche: "/pdfs/FicheProduits/FenetresAlu/cor-vision-plus.pdf",
                logo: Cortizo,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
           {
                titre: "Cor Vision Galandage",
                image: CorVisionGalandage,
                // eslint-disable-next-line no-multi-str
                presentation: "Ouverture totale et espace libéré. Fini les portes encombrantes : le COR Vision Galandage permet de faire disparaître complètement un, deux ou trois vantaux dans les cloisons, libérant l’espace et offrant une ouverture sans aucun obstacle. Les cadres représentent moins de 10 % de la structure et peuvent être encastrés pour un rendu minimaliste et élégant.\
                Grâce à son rail inox renforcé, le système accepte des vantaux plus grands et plus lourds, tout en assurant une bonne isolation thermique et acoustique avec des vitrages jusqu’à 30 mm d’épaisseur. Facile à installer, il se décline dans plusieurs options pour s’adapter à tous les styles, alliant espace, confort et design contemporain.",
                caracteristiques: [
                    "épaisseur dormant 115,8 - 181,8 mm",
                    "épaisseur vitrage 24 mm",
                ],
                infos: "Laquage disponible dans les teintes du nuancier RAL ou dans la couleur de votre choix sur indication du code couleur.",
                fiche: "/pdfs/FicheProduits/FenetresAlu/cor-vision-galandage.pdf",
                logo: Cortizo,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
        ],
        avantage: "Fiabilité, esthétisme et durabilité",
        conclusion: "Grâce à la solidité naturelle de l’aluminium, les profilés sont fins et élégants. Avec leur design épuré, leurs performances énergétiques et leur longévité, les fenêtres en aluminium coche toutes les cases : modernité, efficacité et fiabilité. Que vous construisiez une maison contemporaine ou que vous rénoviez un bâtiment, elles apportent une valeur ajoutée certaine à votre projet."
    },
    fenetresBois: {
        titre: "Fenêtres en bois",
        // eslint-disable-next-line no-multi-str
        intro: "Les fenêtres en bois offrent un charme naturel incomparable, alliant tradition et innovation. Le bois véritable apporte chaleur, élégance et authenticité à votre habitat. Grâce aux avancées technologiques, nos fenêtres en bois bénéficient désormais d’une robustesse et d’une isolation thermique à la hauteur des meilleures alternatives modernes.\
        Chaque fenêtre est composée de trois à quatre couches de bois soigneusement préparées, puis protégées par quatre couches de vernis. Ce processus assure une résistance accrue à l’humidité, aux chocs et aux déformations. Le bois utilisé (pin, chêne, méranti) est issu de forêts gérées durablement, garantissant un produit à la fois fiable et respectueux de l’environnement.",
        items: [
            {
                titre: "Naturo 68",
                image: Naturo68,
                // eslint-disable-next-line no-multi-str
                presentation: "Élégance fine et résistance renforcée – Avec sa profondeur d’encastrement réduite, le Naturo 68 offre un design élancé et raffiné. Disponible en version standard ou avec capots aluminium Reno Line pour une meilleure protection contre les chocs et les UV, il allie charme du bois et touche moderne.",
                caracteristiques: [
                    "profondeur 68mm",
                    "2 joints",
                    "Uw 1,2 pour Ug = 1,0"
                ],
                infos: "Plusieurs configurations sont possibles : profils belges ou hollandais, ouverture vers l’extérieur, version rénovation ou monobloc, des capots en aluminium présents sur la face extérieure des profilés pour s’adapter à chaque projet avec style et durabilité.",
                fiche: "/pdfs/FicheProduits/FenetresBois/naturo.pdf",
                logo: null,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Naturo 80",
                image: Naturo80,
                // eslint-disable-next-line no-multi-str
                presentation: "Conçu pour la construction à haute efficacité énergétique, le Naturo 80 combine la chaleur du bois à d’excellentes performances thermiques et acoustiques grâce à ses profils isolants et à un vitrage pouvant atteindre 45 mm d’épaisseur.",
                caracteristiques: [
                    "profondeur 80mm",
                    "2 joints",
                    "Uw 0,81 pour Ug = 0,5"
                ],
                infos: "Disponible en versions standard, belge, hollandaise, rénovation ou monobloc, avec option d’ouverture vers l’extérieur ou encore un capots en aluminium présents sur la face extérieure des profilés, il s'adapte à tous les styles tout en garantissant confort et économie d’énergie.",
                fiche: "/pdfs/FicheProduits/FenetresBois/naturo.pdf",
                logo: null,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Naturo 92",
                image: Naturo92,
                // eslint-disable-next-line no-multi-str
                presentation: "Il s'agit d'un système en bois offrant les meilleures performances thermiques et acoustiques, permettant l'utilisation des vitrages les plus efficaces. Le choix de Naturo 92 est, comme pour d'autres systèmes en bois, un investissement à long terme, en particulier dans la construction passive.",
                caracteristiques: [
                    "profondeur 92mm",
                    "2 joints",
                    "Uw 0,77 pour Ug = 0,5"
                ],
                infos: "Disponible en versions standard, belge, hollandaise, rénovation ou monobloc, avec option d’ouverture vers l’extérieur ou encore un capots en aluminium présents sur la face extérieure des profilés, il s'adapte à tous les styles tout en garantissant confort et économie d’énergie.",
                fiche: "/pdfs/FicheProduits/FenetresBois/naturo.pdf",
                logo: null,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Naturo 68 HST",
                image: Naturo68HST,
                // eslint-disable-next-line no-multi-str
                presentation: "Léger et peu encombrant pour sa catégorie, le Naturo 68 HST permet de manipuler aisément de grandes surfaces vitrées. Sa faible profondeur d’encastrement et son design soigné s’intègrent parfaitement aux tendances actuelles, tandis que son seuil bas assure un passage fluide entre l’intérieur et l’extérieur.",
                caracteristiques: [
                    "profondeur 164mm",
                    "1-2 rails",
                    "dimension maximale de l'ouvrant 3300 x 2716 mm"
                ],
                infos: "Disponible avec différents types de finitions du bois : couleurs de la palette de lasures, couleurs de la palette RAL, vernis transparent, imprégnation transparente, bois brut.",
                fiche: null,
                logo: null,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            },
            {
                titre: "Naturo 80 HST",
                image: Naturo80HST,
                // eslint-disable-next-line no-multi-str
                presentation: "Avec ses vantaux puissants et résistants, le Naturo 80 HST combine grandes dimensions et élégance visuelle. Son poids renforce l’étanchéité en position fermée, tandis que son design polyvalent sublime aussi bien la chaleur naturelle du bois que des finitions unies et contemporaines ou encore un capots en aluminium présents sur la face extérieure des profilés.",
                caracteristiques: [
                    "profondeur 188mm",
                    "1-2 rails",
                    "dimension maximale de l'ouvrant 3300 mm"
                ],
                infos: "Disponible avec différents types de finitions du bois : couleurs de la palette de lasures, couleurs de la palette RAL, vernis transparent, imprégnation transparente, bois brut.",
                fiche: null,
                logo: null,
                prix: "Chaque projet étant unique, le prix est établi sur devis"
            }
        ],
        avantage: "Fiabilité, authenticité et durabilité",
        conclusion: "Opter pour des fenêtres en bois, c’est faire un geste pour la planète tout en ajoutant une valeur esthétique et patrimoniale à votre maison. Naturel, recyclable, facile à entretenir et réparable en cas de choc, le bois reste un choix premium qui séduit les amateurs d’authenticité et de durabilité."
    }
}