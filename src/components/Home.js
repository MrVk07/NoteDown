import AddNote from './AddNote'
import AllNotes from './AllNotes'

function Home({ notes, handleAddNote, handleDeleteNote }) {
    return (
        <>
            <AddNote notes={notes} handleAddNote={handleAddNote} />
            <div className='your-notes'>
                <b>Your Notes:</b>
            </div>
            <AllNotes notes={notes} handleDeleteNote={handleDeleteNote} />
        </>
    )
}

export default Home
