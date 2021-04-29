import React, { useRef, useEffect, Fragment, useState } from 'react';
import './styles.css';

const { tableau } = window;
const url = "http://public.tableau.com/views/RegionalSampleWorkbook/College";
const options = {
    "Academic Year": "",
    hideTabs: true
}

const Filter = props => {
    const ref = useRef(null);

    const [viz, setViz] = useState(null);
    const [year, setYear] = useState('All')

    const createViz = () => {
        let newViz = new tableau.Viz(ref.current, url, options);
        setViz(newViz);
    }

    useEffect(() => {
        createViz()
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const yearFilter = (e) => {
        let currentYear = e.target.value;
        let sheet = viz.getWorkbook().getActiveSheet();
        if (currentYear === "") {
            sheet.clearFilterAsync("Academic Year");
            setYear('All');
        } else {
            sheet.applyFilterAsync("Academic Year", currentYear, tableau.FilterUpdateType.REPLACE);
            setYear(currentYear);
        }
    }

    return (
        <Fragment>
            <div className='tableau-title'>Filter</div>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-options'>
                Year: <select id="changeYear" onChange={yearFilter}>
                    <option value="">All</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                </select>
            </div>
            <div className='tableau-text'>
                <p>Current Year: {year}</p>
            </div>
        </Fragment>
    )
}

export default Filter;