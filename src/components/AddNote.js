import { useState } from 'react'

function AddNote({ notes, handleAddNote }) {
    let ltitle = 0, ldesc = 0
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
        if (e.target.id === "title") {
            setnote({ ...note, [e.target.name]: (e.target.value).slice(0, 30) })
        }
        if (e.target.id === "description") {
            setnote({ ...note, [e.target.name]: (e.target.value).slice(0, 300) })

        }
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
                        {note.title.length < 5
                            ? <div style={{ opacity: '0.5' }}>atleast 5 characters</div>
                            : <div style={{ opacity: '0.5' }}>{30 - note.title.length} characters remaining</div>}

                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="description"><b>Description:</b></label>
                    </div>
                    <div className="col-75">
                        <textarea className='area' id="description" value={note.description} name="description" placeholder="Write something..." onChange={onChange} ></textarea>
                        {note.description.length < 10
                            ? <div style={{ opacity: '0.5' }}>atleast 10 characters</div>
                            : <div style={{ opacity: '0.5' }}>{300 - note.description.length} characters remaining</div>}
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