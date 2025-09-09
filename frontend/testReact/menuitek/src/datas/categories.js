import FenetrePVC from '../assets/Fenetres/FenetresPVC/FenetrePVC.webp'
import FenetreAlu from '../assets/Fenetres/FenetresAlu/FenetreAlu.png'
import FenetreBois from '../assets/Fenetres/FenetresBois/FenetreBois.webp'

import PortesEntreePVC from '../assets/Portes/PortesPVC/PortesEntreePVC.png'
import PortesEntreeBois from '../assets/Portes/PortesBois/PortesEntreeBois.png'
import PortesEntreeAlu from '../assets/Portes/PortesAlu/PortesEntreeAlu.png'

import VoletsRoulants from '../assets/Volets/VoletsRoulants/VoletsRoulants.webp'
import VoletsBattantsBois from '../assets/Volets/VoletsBattantsBois/VoletsBattantsBois.png'
import VoletsBattantsAlu from '../assets/Volets/VoletsBattantsAlu/VoletsBattantsAlu.png'


// import PortesEntreeAcier from '../assets/PortesEntreeAcier.png'
// import PortesInterieuresAcier from '../assets/PortesInterieuresAcier.png'

export const categories = {
  fenetres: {
    title: "Fenêtres",
    // eslint-disable-next-line no-multi-str
    intro: "La gamme de fenêtre proposé par Menuitek est un des produits phare du catalogue.\n\
      Chaque fenêtre proposée est une solution éprouvée, entièrement préparée pour faire face parfaitement aux situations pour lesquelles elle a été prévue.\n\
      Menuitek s'efforce de proposer une large gamme répondant à vos besoins.",
    items : [
      {
        image: FenetrePVC,
        title: "Fenêtres en PVC",
        description: "Les fenêtres en PVC conviennent aussi bien aux maisons individuelles qu'aux immeubles collectifs.",
        link:"/categories/fenetres/fenetresPVC"
      },
      {
        image: FenetreAlu,
        title: "Fenêtres en aluminium",
        description: "Durabilité, simplicité, fonctionnalité et sécurité sont parmi les nombreux avantages de la menuiserie en aluminium.",
        link:"/categories/fenetres/fenetresAlu"
      },
      {
        image: FenetreBois,
        title: "Fenêtres en Bois",
        description: "Des profilés solides composés de trois ou quatre couches de bois, avec quatre couches de vernis pour garantir une utilisation durable.",
        link:"/categories/fenetres/fenetresBois"
      }
    ],
    advantage: "Isolation thermique et accoustique",
    // eslint-disable-next-line no-multi-str
    conclusion: "Nos fenêtres offrent une protection contre les facteurs indésirables les plus importants.\n\
                        Tout d'abord, c'est le froid, qui n'aura pas accès aux intérieurs.\
                        Vous pouvez également compter sur une protection efficace contre le bruit, les rafales de vent et l'eau.\n\
                        Choisir nos fenêtres isolantes, équipées de joints de fenêtre impeccables peut signifier une réduction des pertes de chaleur allant jusqu'à plusieurs dizaines de pour cent, ce qui réduit considérablement les coûts de chauffage."
  },
  portes: {
    title: "Portes",
    // eslint-disable-next-line no-multi-str
    intro: "Les portes modernes sont la pièce maîtresse de chaque bureau, appartement ou maison.\n\
            Les portes d’entrée sont un élément essentiel de la menuiserie, co-responsable de l'efficacité énergétique de l'ensemble du bâtiment.\n\
            Les portes d’intérieur sont essentielles pour une utilisation ergonomique de l'espace.\n\
            Nous proposons une large gamme de portes extérieures et intérieures fabriquées dans différents matériaux, dont le PVC.\n ",
    items : [
      {
        image: PortesEntreePVC,
        title: "Portes d'entrée en PVC",
        description: "Les portes en PVC se distinguent par leur esthétique et leur qualité au plus haut niveau.",
        link:"/categories/portes/portesPVC"
      },
      {
        image: PortesEntreeAlu,
        title: "Portes d'entrée en aluminium",
        description: "Les portes en aluminium se caractérisent par une fonctionnalité et une durabilité exceptionnelles.",
        link:"/categories/portes/portesAlu"
      },
      {
        image: PortesEntreeBois,
        title: "Portes d'entrée en bois",
        description: "Les portes en bois sont fabriquées à partir des meilleurs matériaux, spécialement sélectionnés.",
        link:"/categories/portes/portesBois"
      },
      // {
      //   image: PortesEntreeAcier,
      //   title: "Portes d'entrée en acier",
      //   description: "Les portes en acier sont une combinaison de modernité, de solidité et d'élégance."
      // },
      // {
      //   image: PortesInterieuresAcier,
      //   title: "Portes intérieures en acier",
      //   description: "Associez le confort à un design remarquable dans vos intérieurs."
      // },
    ],
    advantage: "Design, performance et durabilité",
    // eslint-disable-next-line no-multi-str
    conclusion: "Des performances supérieures à la moyenne, l'isolation thermique et acoustique et la résistance aux agents nocifs créent des produits qui offrent des avantages polyvalents.\n\
                Une large gamme de couleurs, des designs variés et un grand choix de quincaillerie permettent de sélectionner la bonne porte pour chaque utilisation.\n\
                Conçues pour résister au temps, nos portes conservent leur beauté et leur fonctionnalité pendant de nombreuses années. Un investissement durable qui associe innovation et fiabilité."
  },
  volets: {
    title: "Volets",
    // eslint-disable-next-line no-multi-str
    intro: "Les volets proposés par Menuitek sont le complément idéal des menuiseries. Leur utilisation est conseillée pour tous les projets et vise avant tout à contrôler la lumière et la chaleur et à protéger du bruit. \
    Bien configurés, ils constituent aussi une solution de protection efficace contre les intrusions non désirées.",
    items : [
      {
        image: VoletsRoulants,
        title: "Volets roulants",
        description: "Principal moyen de protéger les intérieurs de l'excès de lumière et de chaleur, les volets roulants peuvent être installés à l'intérieur d'un bâtiment ou sur la façade. Un large choix d'options vous permet de choisir une solution parfaitement adaptée.",
        link:"/categories/volets/voletsRoulants"
      },
      {
        image: VoletsBattantsBois,
        title: "Volets battants en bois",
        description: "Les volets battants en bois constituent un complément original aux fenêtres, permettant de contrôler la quantité de lumière et de chaleur entrant dans l'intérieur. Cette solution qui assure l'intimité peut transformer totalement n'importe quelle façade.",
        link:"/categories/volets/voletsBattantsBois"
      },
      {
        image: VoletsBattantsAlu,
        title: "Volets battants en aluminium",
        description: "Les volets extérieurs en aluminium sont un produit moderne inspiré par le style traditionnel. Ces protections de fenêtres, montées sur la façade du bâtiment, offrent une excellente fonctionnalité, permettent de contrôler la quantité de lumière et de chaleur à l'intérieur tout en garantissant l'intimité.",
        link:"/categories/volets/voletsBattantsAlu"
      },
    ],
    advantage: "Maîtrise de la chaleur et occultation de fenêtres",
    // eslint-disable-next-line no-multi-str
    conclusion: "Les occultations de fenêtres comprennent une longue liste de solutions diverses qui permettent d'atteindre les mêmes objectifs de différentes manières et à des différents degrés. \n\nCe sont avant tout :\n\n\
                - contrôler la quantité de chaleur qui entre dans le bâtiment \n\
                - contrôler la quantité de lumière qui pénètre à l’intérieur des pièces \n\
                - réduire le bruit extérieur \n\
                - protéger les fenêtres des intempéries \n\
                - protéger les occupants contre les intrus.\n\n\
                Le choix des occultations de fenêtres signifie des possibilités supplémentaires et une amélioration de toutes les performances des fenêtres. C'est également un élément esthétique des façades qui peut embellir les maisons, les appartements et les bâtiments publics."
  }
}
