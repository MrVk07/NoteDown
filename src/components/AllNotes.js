import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'
import Noteitem from './Noteitem'

function AllNotes() {
    let { notes } = useContext(NoteContext)
    return (
        <div>

            {notes.map((note, index) => {
                return <Noteitem note={note} key={index} />
            })}
        </div>
    )
}

export default AllNotes