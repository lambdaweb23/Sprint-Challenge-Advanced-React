import React from 'react';

import UseDarkMode from '../hooks/UseDarkMode';

const NavBar = () => {
    const [darkMode, setDarkMode] = UseDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Players</h1>
            <div className="dark-mode__toggle"
                onClick={toggleMode}>
                <div
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default NavBar;