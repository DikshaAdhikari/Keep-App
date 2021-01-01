import React from 'react';
import Header from "./components/header/header.component";
import CreateNote from "./components/create-note/create-note.component";
import Note from "./components/note/note.component";
import Footer from "./components/footer/footer.component";
import './App.css';

const App = () => {
  return (
    <>
      <Header/>
      <CreateNote/>
      <Note/>
      <Footer/>

    </>
  );
}

export default App;
