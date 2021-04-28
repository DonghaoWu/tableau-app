import React, { useRef, useEffect, Fragment } from 'react';
import './styles.css';

const { tableau } = window;

const Filter = props => {
    const ref = useRef(null);
    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/College";
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

    const yearFilter = (e) => {
        let year = e.target.value;
        let sheet = viz.getWorkbook().getActiveSheet();
        if (year === "") {
            sheet.clearFilterAsync("Academic Year");
        } else {
            sheet.applyFilterAsync("Academic Year", year, tableau.FilterUpdateType.REPLACE);
        }
    }

    return (
        <Fragment>
            <h4>Filter</h4>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-options'>
                Year: <select id="changeYear" onChange={yearFilter}>
                    <option value="">All</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                </select>
            </div>
            <div className='tableau-comment'>
                <p>My opinion:</p>
            </div>
        </Fragment>
    )
}

export default Filter;