import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Main from './components/main/Main';
import CustomNavbar from './components/navbar/Navbar';

const App =() =>{
  return (
    <div className="App">
     <CustomNavbar/>
   {/* <Home/>
  <Main/>
     <Footer/> */}
    </div>
  );
}

export default App;
