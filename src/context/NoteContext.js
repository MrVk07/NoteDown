import { createContext, useState } from "react";

export const NoteContext = createContext()

export const NoteState = (props) => {
    const [notes, setnotes] = useState([])
    return (
        <NoteContext.Provider value={{ notes, setnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}