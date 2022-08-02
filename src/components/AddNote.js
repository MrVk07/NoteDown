import { useState } from 'react'

function AddNote({ notes, handleAddNote }) {
    const [note, setnote] = useState({ title: "", description: "" })
    const submitHandler = (e) => {
        e.preventDefault()
        if (note.title.length < 5) {
            alert("Title has less than 5 characters")
            return
        }
        if (note.description.length < 10) {
            alert("Description has less than 10 characters")
            return
        }
        handleAddNote(note)
        setnote({ title: "", description: "" })
        alert("Added successfully")
    }

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="title"><b>Title:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="title" value={note.title} name="title" placeholder="Title" onChange={onChange} />
                        <div style={{ opacity: '0.5' }}>atleast 5 characters</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="description"><b>Description:</b></label>
                    </div>
                    <div className="col-75">
                        <textarea className='area' id="description" value={note.description} name="description" placeholder="Write something..." onChange={onChange} ></textarea>
                        <div style={{ opacity: '0.5' }}>atleast 10 characters</div>
                    </div>
                </div>
                <div className="row">
                    <input className='submitbutton' type="submit" value="Submit" onClick={submitHandler} />
                </div>
            </form>
        </div>
    )
}

export default AddNote