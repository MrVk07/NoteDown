import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../context/NoteContext'

function AddNote() {
    const [note, setnote] = useState({ title: "", description: "" })
    let { notes, setnotes } = useContext(NoteContext)
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
        setnotes([...notes, note])
        setnote({ title: "", description: "" })
        alert("Added successfully")
    }

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setnotes([...notes])
    }, [setnotes])


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