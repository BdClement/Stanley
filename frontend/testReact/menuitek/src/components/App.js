import '../styles/App.css';
// import React from 'react';
import Header from './Header/Header';
import Content from './Content';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-opacity-90'>
      <Header />
      <Content />
      <Footer />
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

