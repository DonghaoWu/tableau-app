import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

const SideNav = props => {
    return (
        <div className='side-nav'>
            <div className='nav-options'>
                <ul>
                    <li>
                        <Link to="/basic-embed">Basic embed</Link>
                    </li>
                    <li>
                        <Link to="/dynamic-load">Dynamic Load</Link>
                    </li>
                    <li>
                        <Link to="/export">Export</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default SideNav
