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

// Cut le catalogue des volet avec Apercu de mac
// Du coup pour les portes je mets le catalogue pour chaque produit ?
// Faire une invitation a nous contacter sur les pages produits (Prix sur devis => liens)
// Probleme PDF MaxLight Monorail

// A faire en presentiel: 
  // Couleur
  // Nous connaitre