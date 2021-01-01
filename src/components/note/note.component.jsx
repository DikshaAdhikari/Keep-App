import React from "react";
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./note.styles.css";

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id);
    };
    return (
        <>
            <div className="note">
                <h2>{props.title}</h2>
                <br/>
                <p>{props.content}</p>
                <Button className='btn-d' onClick={deleteNote}>
                <DeleteOutlineIcon/>
                </Button>
            </div>
        </>
    );
};

export default Note;