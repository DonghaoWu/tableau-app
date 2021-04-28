import React, { useRef, useEffect, Fragment } from 'react';
import './styles.css';

const { tableau } = window;

const BasicEmbed = props => {
    const ref = useRef(null);
    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Flights";

    useEffect(() => {
        const options = {
            device: 'desktop',
            hideTabs: true
        }
        new tableau.Viz(ref.current, url, options);
    }, [])

    return (
        <Fragment>
            <h4>Basic embed</h4>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-comment'>
                <p>My opinion:</p>
            </div>
        </Fragment>
    )
}

export default BasicEmbed;
