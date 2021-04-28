import React from 'react';
import './styles.css';
import BasicEmbed from '../BasicEmbed/BasicEmbed';
import DynamicLoad from '../DynamicLoad/DynamicLoad';
import Export from '../Export/Export';
import Filter from '../Filter/Filter';
import GetData from '../GetData/GetData';
import Resize from '../Resize/Resize';
import EventsResponse from '../EventsResponse/EventsResponse';
import SelectMarks from '../SelectMarks/SelectMarks';

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
                    <Route path="/fliter">
                        <Filter />
                    </Route>
                    <Route path="/get-data">
                        <GetData />
                    </Route>
                    <Route path="/resize">
                        <Resize />
                    </Route>
                    <Route path="/events-response">
                        <EventsResponse />
                    </Route>
                    <Route path="/select-marks">
                        <SelectMarks />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default MainContent
