import React, { useRef, useEffect, Fragment } from 'react';
import './styles.css';

const { tableau } = window;

const BasicEmbed = props => {
    const ref = useRef(null);
    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Obesity";

    useEffect(() => {
        const options = {
            device: 'desktop',
            hideTabs: true
        }
        new tableau.Viz(ref.current, url, options);
    }, [])

    return (
        <Fragment>
            <p>Basic embed</p>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-comment'>
                <p>My opinion:</p>
            </div>
        </Fragment>
    )
}

export default BasicEmbed;
