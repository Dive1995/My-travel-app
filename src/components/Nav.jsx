import '../css/nav.css'
import React from 'react'

function Nav() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>ANB</h1>
            </div>
            <div className="search">
                <form action="">
                    <input type="text" placeholder="Search here"/>
                    <button className="btn btn-search">Search</button>
                </form>
            </div>
            <ul>
                <li className="sign-in">Sign in</li>
            </ul>
        </nav>
    )
}

export default Nav
