import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css'

function Sidebar() {
    return (
    <>
    <nav className="sidebar">
        <div className = "sidebar-container">
            <div className="sidebar_item">Welcome.</div>
            <div className="sidebar_item"> Prescription history</div>
            <div className="sidebar_item">Notifications</div>
            <div className="sidebar_item">Treatment Plans</div>
            <div className="sidebar_item">Medications</div>
            <div className="sidebar_item">My Tokens</div>
            <div className="sidebar_item">Settings</div>

        </div>
    </nav>
    </>
    )
}

export default Sidebar