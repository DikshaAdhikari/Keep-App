import React from "react";
const CreateNote = () => {
    return (<>
        <div className="main_note">
            <form>
                <input type='text' placeholder="Title"/>
                <textarea rows="" columns="" placeholder="Take a note..."></textarea>
                
            </form>
        </div>
    </>
    );
};

export default CreateNote;