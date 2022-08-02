function Noteitem({ note, handleDeleteNote }) {
    return (
        <>
            <div className="container-card">
                <h3 className='card-title'><b style={{ color: "blue" }}>Title:</b>{note.title}</h3>
                <p className='card-description'>
                    <b style={{ color: 'blue' }}>Description:</b><br />{note.description}
                </p>
                <button className="delete" onClick={() => { handleDeleteNote(note.id) }}>Delete</button>
            </div>
        </>
    )
}

export default Noteitem