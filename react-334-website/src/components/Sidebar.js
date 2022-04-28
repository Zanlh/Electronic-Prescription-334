import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
    <>
    <nav className="sidebar">
        <div className = "sidebar-container">
            <Link to="/" className = "sidebar-logo">
                Prescription logo
            </Link>

        </div>
    </nav>
    </>
    )
}

export default Sidebar