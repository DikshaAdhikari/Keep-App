import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import "./create-note.styles.css";

const CreateNote = () => {
    return (<>
        <div className="main_note">
            <form>
                <input type='text' placeholder="Title"/>
                <textarea rows="" columns="" placeholder="Take a note..."></textarea>
                <Button className='btn'>
                    <AddIcon className="plus-sign"/>
                </Button>
            </form>
        </div>
    </>
    );
};

export default CreateNote;