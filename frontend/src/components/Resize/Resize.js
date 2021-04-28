import React, { useRef, useEffect, Fragment } from 'react';
import './styles.css';

const { tableau } = window;

const Resize = props => {
    const ref = useRef(null);
    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Stocks";
    const options = {
        "Academic Year": "",
        hideTabs: true
    }
    let viz;

    const createViz = () => {
        viz = new tableau.Viz(ref.current, url, options);
    }

    useEffect(() => {
        createViz()
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const vizResize = () => {
        let width = document.getElementById("resizeWidth").value;
        let height = document.getElementById("resizeHeight").value;

        viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
    }

    return (
        <Fragment>
            <h4>Resize</h4>
            <div ref={ref} className='tableau-content'></div>
            <form className='tableau-form'>
                <input type="text" id="resizeWidth" placeholder="Width" />
                <input type="text" id="resizeHeight" placeholder="Height" />
                <button type="button" onClick={vizResize}>Resize</button>
            </form>
        </Fragment>
    )
}

export default Resize;