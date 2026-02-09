import '../styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header/Header';
// import Content from './Content/Content';
import Footer from './Footer/Footer';

import Accueil from './Content/Accueil/Accueil';
import Formulaire from './Content/Formulaire/Formulaire';
import Presentation from './Content/Presentation/Presentation';
import Categorie from './Content/Produits/Categories'
import Fenetres from './Content/Produits/Fenetres/Fenetres'
import Portes from './Content/Produits/Portes/Portes'
import Volets from './Content/Produits/Volets/Volets'
import Inspirations from './Content/Presentation/Inspirations'
import Mentions from './Footer/Legal/Mentions'
import Confidentialite from './Footer/Legal/Confidentialite'

import ScrollToTop from './scrollToTop';
import ScrollToHash from './scrollToHash';
import Faq from './Footer/Faq';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <ScrollToTop />
        <ScrollToHash/>
        <Header />
        <Routes>
          <Route path='/' element={<Accueil/>} />
          <Route path='/devis/' element={<Formulaire/>}/>
          <Route path='/nous-connaitre/' element={<Presentation/>}/>
          <Route path='/inspirations/' element={<Inspirations/>}/>
          <Route path='/FAQ/' element={<Faq/>}/>
          <Route path='/categories/:categorieName/' element={<Categorie/>}/>
          <Route path='/categories/fenetres/:fenetreType/' element={<Fenetres/>}/>
          <Route path='/categories/portes/:portesType/' element={<Portes/>}/>
          <Route path='/categories/volets/:voletsType/' element={<Volets/>}/>
          <Route path='/mentions-legales/' element={<Mentions/>} />
          <Route path='/politique-confidentialite/' element={<Confidentialite/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
    );
}

export default App;

// Idees ameliorations :
  // Faire une invitation a nous contacter sur les pages produits (Prix sur devis => liens) ?
  // Incoherence parfois meme chose dites de maniere differentes avec beaucoup de mot pour dire pas grand chose !

// Gestion des PDFs:
  // Checker tout les PDF

// A faire en presentiel: 

// restant :
// PDF Accordeon enlever la date et ajouter
// PDF panorama enlever la date et ajouter

// Post Validation site :
  // -Brancher back-end
  // deployer le site


// DONE
  // Enlever phrase page d'accueil
  // Enlever temporairement Store et moustiquaire de la page d'accueil (remplacé par Pergolas soon)
  // Probleme avec PDF MaxLight Monorail
  // Taille text page d'acceuil
  // Ajouter “fenêtres ouvrant à la française” et “Coulissants”
  // Voir comment gerer les PDF Catalogue porte 
  // Cut le catalogues des volets roulants avec Apercu de mac
  // Faire une page d'attente pour Inspirations
  // Couleur (Stan en reflexion)
