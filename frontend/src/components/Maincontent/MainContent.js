import React from 'react';
import './styles.css';
import BasicEmbed from '../BasicEmbed/BasicEmbed';
import DynamicLoad from '../DynamicLoad/DynamicLoad';
import Export from '../Export/Export';

import {
    Switch,
    Route,
} from "react-router-dom";

const MainContent = props => {
    return (
        <div className='main-content'>
            <div className='content-container'>
                <Switch>
                    <Route exact path="/basic-embed">
                        <BasicEmbed />
                    </Route>
                    <Route path="/dynamic-load">
                        <DynamicLoad />
                    </Route>
                    <Route path="/export">
                        <Export />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default MainContent
