import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
    return (

        <div>
            <ul className='navbar'>
                <li className='routes'><NavLink activeclassname='links active' className='deco' to="/NoteDown">NoteDown</NavLink></li>
                <li className='routes'><NavLink activeclassname='links active' className='deco' to="/about">About</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar