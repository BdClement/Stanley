import FenetrePVC from '../assets/FenetrePVC.webp'
import FenetreAlu from '../assets/FenetreAlu.png'
import FenetreBois from '../assets/FenetreBois.webp'
import Fenetres from '../components/Content/Produits/Fenetres/Fenetres'

// categories.get(categoriesMap.get(key))
export const categoriesMap = {
  "fenetres": 0,
  "volets": 1,
  "stores": 2,
  "portes": 3
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
    title: "Volets",
    intro: "",
    items : [
      {
        image: FenetrePVC,
        title: "Volets en PVC",
        description: ""
      },
      {
        image: FenetreAlu,
        title: "Volets en aluminium",
        description: ""
      },
      {
        image: FenetreBois,
        title: "Volets en Bois",
        description: ""
      }
    ],
    advantage: "",
    conclusion: ""
  },
  {
    title: "Stores",
    intro: "",
    items : [
      {
        image: FenetrePVC,
        title: "Stores en PVC",
        description: ""
      },
      {
        image: FenetreAlu,
        title: "Stores en aluminium",
        description: ""
      },
      {
        image: FenetreBois,
        title: "Stores en Bois",
        description: ""
      }
    ],
    advantage: "",
    conclusion: ""
  },
  {
    title: "Portes",
    intro: "",
    items : [
      {
        image: FenetrePVC,
        title: "Portes en PVC",
        description: ""
      },
      {
        image: FenetreAlu,
        title: "Portes en aluminium",
        description: ""
      },
      {
        image: FenetreBois,
        title: "Portes en Bois",
        description: ""
      }
    ],
    advantage: "",
    conclusion: ""
  }
]

// Interogation sur la lourdeur du projet avec toutes les photos