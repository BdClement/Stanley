import FenetrePVC from '../assets/FenetrePVC.webp'
import FenetreAlu from '../assets/FenetreAlu.png'
import FenetreBois from '../assets/FenetreBois.webp'

import PortesEntreePVC from '../assets/PortesEntreePVC.png'
import PortesEntreeBois from '../assets/PortesEntreeBois.png'
import PortesEntreeAlu from '../assets/PortesEntreeAlu.png'
import PortesEntreeAcier from '../assets/PortesEntreeAcier.png'
import PortesInterieuresAcier from '../assets/PortesInterieuresAcier.png'


// categories.get(categoriesMap.get(key))
export const categoriesMap = {
  "fenetres": 0,
  "portes": 1,
  "volets": 2,// A supprimer
  "stores": 3,// A supprimer
}

export const categories = [
  {
    title: "Fenêtres",
    // eslint-disable-next-line no-multi-str
    intro: "La gamme de fenêtre proposé par Menuitek est un des produits phare du catalogue.\n\
      Chaque fenêtre proposée est une solution éprouvée, entièrement préparée pour faire face parfaitement aux situations pour lesquelles elle a été prévue.\n\
      Menuitek s'efforce de proposer une large gamme répondant à vos besoins.",
    items : [
      {
        image: FenetrePVC,
        title: "Fenêtres en PVC",
        description: "Les fenêtres en PVC conviennent aussi bien aux maisons individuelles qu'aux immeubles collectifs."
      },
      {
        image: FenetreAlu,
        title: "Fenêtres en aluminium",
        description: "Durabilité, simplicité, fonctionnalité et sécurité sont parmi les nombreux avantages de la menuiserie en aluminium."
      },
      {
        image: FenetreBois,
        title: "Fenêtres en Bois",
        description: "Des profilés solides composés de trois ou quatre couches de bois, avec quatre couches de vernis pour garantir une utilisation durable."
      }
    ],
    advantage: "Isolation thermique et accoustique",
    // eslint-disable-next-line no-multi-str
    conclusion: "Nos fenêtres offrent une protection contre les facteurs indésirables les plus importants.\n\
                        Tout d'abord, c'est le froid, qui n'aura pas accès aux intérieurs.\
                        Vous pouvez également compter sur une protection efficace contre le bruit, les rafales de vent et l'eau.\n\
                        Choisir nos fenêtres isolantes, équipées de joints de fenêtre impeccables peut signifier une réduction des pertes de chaleur allant jusqu'à plusieurs dizaines de pour cent, ce qui réduit considérablement les coûts de chauffage."
  },
  {
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
        description: "Les portes en PVC se distinguent par leur esthétique et leur qualité au plus haut niveau."
      },
      {
        image: PortesEntreeAlu,
        title: "Portes d'entrée en aluminium",
        description: "Les portes en aluminium se caractérisent par une fonctionnalité et une durabilité exceptionnelles."
      },
      {
        image: PortesEntreeBois,
        title: "Portes d'entrée en bois",
        description: "Les portes en bois sont fabriquées à partir des meilleurs matériaux, spécialement sélectionnés."
      },
      {
        image: PortesEntreeAcier,
        title: "Portes d'entrée en acier",
        description: "Les portes en acier sont une combinaison de modernité, de solidité et d'élégance."
      },
      {
        image: PortesInterieuresAcier,
        title: "Portes intérieures en acier",
        description: "Associez le confort à un design remarquable dans vos intérieurs."
      },
    ],
    advantage: "Design, performance et durabilité",
    // eslint-disable-next-line no-multi-str
    conclusion: "Des performances supérieures à la moyenne, l'isolation thermique et acoustique et la résistance aux agents nocifs créent des produits qui offrent des avantages polyvalents.\n\
                Une large gamme de couleurs, des designs variés et un grand choix de quincaillerie permettent de sélectionner la bonne porte pour chaque utilisation.\n\
                Conçues pour résister au temps, nos portes conservent leur beauté et leur fonctionnalité pendant de nombreuses années. Un investissement durable qui associe innovation et fiabilité."
  },
]
