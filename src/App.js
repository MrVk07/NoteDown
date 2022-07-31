import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import { NoteState } from './context/NoteContext';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <NavBar />
          <div className="container">
            <Routes>
              <Route exact path="/NoteDown" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
