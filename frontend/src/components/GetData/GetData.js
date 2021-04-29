import React, { useRef, useEffect, Fragment } from 'react';
import './styles.css';

const { tableau } = window;

const GetData = props => {
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    const options = {
        hideTabs: true
    }
    let viz, sheet, table;

    const createViz = () => {
        viz = new tableau.Viz(ref.current, url, options);
    }

    useEffect(() => {
        createViz()
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const getUnderlyingData = () => {
        sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Storm Map Sheet");
        // If the active sheet is not a dashboard, then you can just enter:
        // viz.getWorkbook().getActiveSheet();
        let options = {
            maxRows: 10, // Max rows to return. Use 0 to return all rows
            ignoreAliases: false,
            ignoreSelection: true,
            includeAllColumns: false
        };

        sheet.getUnderlyingDataAsync(options).then(function (t) {
            table = t;
            let tgt = document.getElementById("dataTarget");
            tgt.innerHTML = JSON.stringify(table.getData()) + "</p>";
        });
    }

    return (
        <Fragment>
            <div className='tableau-title'>Get Data</div>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-buttons'>
                <div>To download data for a workbook, your Tableau Server user account must have the Download Summary Data and Download Full Data permissions.</div>
                <button id='getData' onClick={getUnderlyingData}>Get Data</button>
            </div>
            <div className='tableau-text'>
                <h4>Underlying Data:</h4>
                <div id="dataTarget"></div>
            </div>
        </Fragment>
    )
}

export default GetData;