import React, { useRef, useEffect, Fragment } from 'react';
import './styles.css';

const { tableau } = window;

const Export = props => {
    const ref = useRef(null);
    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Stocks";
    const options = {
        hideTabs: true
    }
    let viz;

    const createViz = () => {
        viz = new tableau.Viz(ref.current, url, options);
    }

    useEffect(() => {
        createViz()
    }, [])

    // Opens the Download to PDF dialog box
    function exportToPDF() {
        viz.showExportPDFDialog();
    }

    // Opens the Download Crosstab dialog box
    function exportToCSV() {
        viz.showExportCrossTabDialog();
    }

    // Downloads the crosstab data in an Excel file
    function exportToExcel() {
        viz.exportCrossTabToExcel();
    }

    // Opens the Download Image dialog box
    function exportImage() {
        viz.showExportImageDialog();
    }

    // Opens the Download PowerPoint dialog box
    function exportPowerPoint() {
        viz.showExportPowerPointDialog();
    }
    // Opens the Download dialog box
    function showDownloadDialog() {
        viz.showDownloadDialog();
    }

    return (
        <Fragment>
            <h4>Export</h4>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-buttons'>
                <button onClick={exportToPDF}>Export to PDF</button>
                <button onClick={exportToCSV}>Export to CSV</button>
                <button onClick={exportToExcel}>Export to Excel</button>
                <button onClick={exportImage}>Export as Image</button>
                <button onClick={exportPowerPoint}>Export to PowerPoint</button>
                <button onClick={showDownloadDialog}>Show Download Dialog</button>
            </div>
            <div className='tableau-comment'>
                <p>My opinion:</p>
            </div>
        </Fragment>
    )
}

export default Export;