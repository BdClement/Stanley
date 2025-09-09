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

import ScrollToTop from './scrollToTop';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Accueil/>} />
          <Route path='/devis/' element={<Formulaire/>}/>
          <Route path='/nous-connaitre/' element={<Presentation/>}/>
          <Route path='/categories/:categorieName' element={<Categorie/>}/>
          <Route path='/categories/fenetres/:fenetreType' element={<Fenetres/>}/>
          <Route path='/categories/portes/:portesType' element={<Portes/>}/>
          <Route path='/categories/volets/:voletsType' element={<Volets/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
    );
}

export default App;

    // <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    //     <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>
    // </div>  

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

