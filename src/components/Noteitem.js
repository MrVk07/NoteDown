function Noteitem(props) {
    return (
        <>
            <div className="container-card">
                <h3 className='card-title'><b style={{ color: "blue" }}>Title:</b>{props.note.title}</h3>
                <p className='card-description'>
                    <b style={{ color: 'blue' }}>Description:</b><br />{props.note.description}
                </p>
            </div>
        </>
    )
}

export default Noteitem