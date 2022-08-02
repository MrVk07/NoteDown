// import React, { useContext, useEffect } from 'react'
import Noteitem from './Noteitem'

function AllNotes({ notes, handleDeleteNote }) {
    return (
        <div>

            {notes.map((note) => {
                return <Noteitem note={note} key={note.id} handleDeleteNote={handleDeleteNote} />
            })}
        </div>
    )
}

export default AllNotes