import React from "react";
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./note.styles.css";

const Note = () => {
    return (
        <>
            <div className="note">
                <h2>title</h2>
                <br/>
                <p>This is the content</p>
                <Button className='btn-d'>
                <DeleteOutlineIcon/>
                </Button>
            </div>
        </>
    );
};

export default Note;