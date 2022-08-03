function Noteitem({ note, handleDeleteNote }) {
    return (
        <>
            <div className="container-card">
                <div className="note">
                    <h3 className='card-title'>{note.title}</h3>
                    <p className='card-description'>{note.description}</p>
                </div>
                <button className="delete" onClick={() => { handleDeleteNote(note.id) }}>Delete</button>
            </div>
        </>
    )
}

export default Noteitem