import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css'

function Sidebar() {
    return (
    <>
    <nav className="sidebar">
        <div className = "sidebar-container">
            <Link to="/" className = "sidebar-logo">
                Prescription logo
            </Link>
            <div className="header">
                Welcome.
            </div>
            <div>
                Prescription history
            </div>
            <div>Notifications</div>

        </div>
    </nav>
    </>
    )
}

export default Sidebar