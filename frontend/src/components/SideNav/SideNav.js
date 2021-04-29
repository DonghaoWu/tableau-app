import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

const SideNav = props => {
    return (
        <div className='side-nav'>
            <div className='nav-options'>
                <li>
                    <Link to="/">Basic embed</Link>
                </li>
                <li>
                    <Link to="/dynamic-load">Dynamic Load</Link>
                </li>
                <li>
                    <Link to="/export">Export</Link>
                </li>
                <li>
                    <Link to="/fliter">Fliter</Link>
                </li>
                <li>
                    <Link to="/get-data">Get Data</Link>
                </li>
                <li>
                    <Link to="/resize">Resize</Link>
                </li>
                <li>
                    <Link to="/events-response">Events Response</Link>
                </li>
                <li>
                    <Link to="/select-marks">Select Marks</Link>
                </li>
            </div>
        </div>
    )
}

export default SideNav
