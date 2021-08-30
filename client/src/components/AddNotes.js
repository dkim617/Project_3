import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_NOTES } from "../utils/mutations";

import Auth from "../utils/auth";

const NoteForm = ({ userId }) => {
  const [notes, addNoteText] = useState("");
  const [addNotes, { error }] = useMutation(ADD_NOTES);

  const handleSaveClick = async (event) => {
    event.preventDefault();
    try {
      const data = await addNotes({
        variables: {
          userId,
          notes,
        },
      });
      addNoteText("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <div className="note new">
          <textarea
            rows="8"
            cols="10"
            placeholder="Type to add a note..."
            value={notes}
            onChange={(event) => addNoteText(event.target.value)}
          ></textarea>
          <div className="note-footer">
            <button className="save" onClick={handleSaveClick}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <p>please sign up</p>
      )}
    </div>
  );
};

export default NoteForm;
