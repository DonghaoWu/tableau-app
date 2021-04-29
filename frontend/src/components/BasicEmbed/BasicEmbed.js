import React, { useRef, useEffect, Fragment } from 'react';
import './styles.css';

const { tableau } = window;
const url = "https://public.tableau.com/views/RegionalSampleWorkbook/Flights";
const options = {
    hideTabs: true
}

const BasicEmbed = props => {
    const ref = useRef(null);

    useEffect(() => {
        new tableau.Viz(ref.current, url, options);
    }, [])

    return (
        <Fragment>
            <div className='tableau-title'>Basic embed</div>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-text'>
                <p>My opinion:</p>
            </div>
        </Fragment>
    )
}

export default BasicEmbed;
