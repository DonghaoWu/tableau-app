import React, { useRef, useEffect, Fragment, useState } from 'react';
import './styles.css';

const { tableau } = window;
const vizList = [
    "http://public.tableau.com/views/RegionalSampleWorkbook/Obesity",
    "http://public.tableau.com/views/RegionalSampleWorkbook/Flights",
    "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
    "http://public.tableau.com/views/RegionalSampleWorkbook/College",
    "http://public.tableau.com/views/RegionalSampleWorkbook/Stocks"
];
const vizLen = vizList.length;
const options = {
    hideTabs: true
};

const DynamicLoad = props => {
    const ref = useRef(null);

    const [viz, setViz] = useState(null);
    const [vizCount, setVizCount] = useState(0);

    const createViz = (vizPlusMinus) => {
        let currentCount = vizCount + vizPlusMinus;
        if (viz) viz.dispose();

        if (currentCount >= vizLen) currentCount = 0;
        else if (currentCount < 0) currentCount = vizLen - 1;

        let vizURL = vizList[currentCount];
        let newViz = new tableau.Viz(ref.current, vizURL, options);

        setViz(newViz);
        setVizCount(currentCount);
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
            <div className='tableau-comment'>
                <p>My opinion:</p>
            </div>
        </Fragment>
    )
}

export default DynamicLoad;
