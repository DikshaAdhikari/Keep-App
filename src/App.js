import React, {useState} from 'react';
import Header from "./components/header/header.component";
import CreateNote from "./components/create-note/create-note.component";
import Note from "./components/note/note.component";
import Footer from "./components/footer/footer.component";
import './App.css';

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((old)=> {
      return [...old, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata)=>{
      olddata.filter((curData, index)=>{
        return index!==id;
      });
    });
  };

  return (
    <>
      <Header/>
      <CreateNote passNote={addNote} />
      {addItem.map((val, index)=>{
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })
      }
      <Footer/>

    </>
  );
}

export default App;
