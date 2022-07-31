import AddNote from './AddNote'
import AllNotes from './AllNotes'

function Home() {
    return (
        <>
            <AddNote />
            <div className='your-notes'>
                <b>Your Notes:</b>
            </div>
            <AllNotes />
        </>
    )
}

export default Home
