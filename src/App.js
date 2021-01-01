import React from 'react';
import Header from "./components/header/header";
import CreateNote from "./components/create-note/create-note";
import Footer from "./components/footer/footer";
import './App.css';

const App = () => {
  return (
    <>
      <Header/>
      <CreateNote/>
      <Footer/>

    </>
  );
}

export default App;
