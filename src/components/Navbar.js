import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = ()=>{
        setClick(!click)
    };

    const closeMobileMenu = ()=>{
        setClick(false)
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        W&N <i className="fab fa-typo3" />
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        {/* if click is true, show hamburger, otherwise show cross  */}
                        <i className={click? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                WEATHER
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
                                NEWS
                            </Link>
                        </li>
                       
                        
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar
