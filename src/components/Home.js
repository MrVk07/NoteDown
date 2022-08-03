import { useState } from 'react'
import AddNote from './AddNote'
import AllNotes from './AllNotes'

function Home({ notes, handleAddNote, handleDeleteNote }) {
    const [searchtext, setsearchtext] = useState("")

    const onChange = (e) => {
        setsearchtext(e.target.value)
    }
    return (
        <>
            <AddNote notes={notes} handleAddNote={handleAddNote} />
            <div className='your-notes'>
                <div className="notes-search">
                    <b style={{ marginBlockEnd: "2px" }}>Your Notes:</b>
                    <div className="search-box">
                        <img className='search-icon' src="https://img.icons8.com/ios-filled/344/search.png" alt="search icon" />
                        <input type="text" className="searchtext" value={searchtext} name="searchtext" placeholder="search..." onChange={onChange} />
                    </div>
                </div>
                <AllNotes notes={notes.filter((note) => note.title.includes(searchtext))} handleDeleteNote={handleDeleteNote} />
            </div>
        </>
    )
}

export default Home
