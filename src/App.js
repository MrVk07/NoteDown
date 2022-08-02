import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setnotes] = useState(JSON.parse(localStorage.getItem('array')) ?? [])

  const handleAddNote = (note) => {
    const newnote = {
      id: nanoid(),
      title: note.title,
      description: note.description
    }
    setnotes([...notes, newnote])
  }

  const handleDeleteNote = (id) => {
    let newnotes = notes.filter((note) => note.id !== id)
    setnotes(newnotes)
  }

  useEffect(() => {
    localStorage.setItem('array', JSON.stringify(notes))
  }, [notes])

  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/NoteDown" element={<Home notes={notes} handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
