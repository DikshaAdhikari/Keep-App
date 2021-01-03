import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import "./create-note.styles.css";

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const inputEvent = (e) => {
        const {value, name} = e.target;

        setNote((prev) => {
            return{
                ...prev,
                [name]: value
            };
        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        });
        setExpand(false);
    };

    const expandIt = () => {
        setExpand(true);
    };

    return (
    <>
        <div className="main_note">
            <form>
            {expand?
                <input 
                    type='text' 
                    name="title" 
                    value={note.title} 
                    onChange={inputEvent} 
                    placeholder="Title"    
                    autoComplete='off'
                />:null}
                <textarea 
                    rows="" 
                    columns=""
                    name="content" 
                    value={note.content} 
                    onChange={inputEvent} 
                    placeholder="Take a note..."
                    onClick={expandIt}>  
                </textarea>
                {expand?
                <Button className='btn' onClick={addEvent}>
                    <AddIcon className="plus-sign"/>
                </Button>:null}
            </form>
        </div>
    </>
    );
};

export default CreateNote;