import Noteitem from './Noteitem'

function AllNotes({ notes, handleDeleteNote }) {
    return (
        <div className='notes-list'>
            {notes.map((note) => {
                return <Noteitem note={note} key={note.id} handleDeleteNote={handleDeleteNote} />
            })}
        </div>
    )
}

export default AllNotes