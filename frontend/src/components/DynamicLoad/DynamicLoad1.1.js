import React, { useRef, useEffect, Fragment } from 'react';
import './styles.css';

const { tableau } = window;

const DynamicLoad = props => {
    const ref = useRef(null);
    const vizList = [
        "http://public.tableau.com/views/RegionalSampleWorkbook/Obesity",
        "http://public.tableau.com/views/RegionalSampleWorkbook/Flights",
        "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
        "http://public.tableau.com/views/RegionalSampleWorkbook/College",
        "http://public.tableau.com/views/RegionalSampleWorkbook/Stocks"
    ];

    let viz;
    let vizCount = 0;
    const vizLen = vizList.length;

    const createViz = (vizPlusMinus) => {
        const options = {
            hideTabs: true
        };

        vizCount = vizCount + vizPlusMinus;

        if (vizCount >= vizLen) {
            vizCount = 0;
        } else if (vizCount < 0) {
            vizCount = vizLen - 1;
        }

        if (viz) {
            viz.dispose();
        }

        var vizURL = vizList[vizCount];
        viz = new tableau.Viz(ref.current, vizURL, options);
    }

    useEffect(() => {
        createViz(0);
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Fragment>
            <h4>Dynamic Load</h4>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-buttons'>
                <button onClick={() => createViz(-1)}>Previous</button>
                <button onClick={() => createViz(1)}>Next</button>
            </div>
            <div className='tableau-text'>
                <p>My opinion:</p>
            </div>
        </Fragment>
    )
}

export default DynamicLoad;
