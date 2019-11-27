import React from 'react'
import './Sidebar.css'
import { FaBehance } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <section className="sidebar">
            <nav className="nav-grid">
                <div className="logo">
                    <h2><b>Bjørnstad</b></h2>
                    <h2><span className="grafisk">Grafisk</span></h2>
                </div>
                <div className="linker">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">UX examples</a></li>
                        <li><a href="#">React modules</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="message">
                    <div className="social-icons">
                        <a href=''><FaBehance /></a>
                    </div>
                    <p>This site is built using <span className="span-purple">React</span></p>
                    <p>Have a nice day!</p>
                </div>
            </nav>
        </section>
    )
}

export default Sidebar