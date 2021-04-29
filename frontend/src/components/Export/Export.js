import React, { useRef, useEffect, Fragment, useState } from 'react';
import './styles.css';

const { tableau } = window;
const url = "https://public.tableau.com/views/RegionalSampleWorkbook/Stocks";
const options = {
    hideTabs: true
}

const Export = props => {
    const ref = useRef(null);

    const [viz, setViz] = useState(null);

    const createViz = () => {
        let newViz = new tableau.Viz(ref.current, url, options);
        setViz(newViz);
    }

    useEffect(() => {
        createViz()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    // Opens the Download to PDF dialog box
    const exportToPDF = () => {
        viz.showExportPDFDialog();
    }

    // Opens the Download Crosstab dialog box
    const exportToCSV = () => {
        viz.showExportCrossTabDialog();
    }

    // Downloads the crosstab data in an Excel file
    const exportToExcel = () => {
        viz.exportCrossTabToExcel();
    }

    // Opens the Download Image dialog box
    const exportImage = () => {
        viz.showExportImageDialog();
    }

    // Opens the Download PowerPoint dialog box
    const exportPowerPoint = () => {
        viz.showExportPowerPointDialog();
    }
    // Opens the Download dialog box
    const showDownloadDialog = () => {
        viz.showDownloadDialog();
    }

    return (
        <Fragment>
            <div className='tableau-title'>Export</div>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-buttons'>
                <button onClick={exportToPDF}>Export to PDF</button>
                <button onClick={exportToCSV}>Export to CSV</button>
                <button onClick={exportToExcel}>Export to Excel</button>
                <button onClick={exportImage}>Export as Image</button>
                <button onClick={exportPowerPoint}>Export to PowerPoint</button>
                <button onClick={showDownloadDialog}>Show Download Dialog</button>
            </div>
            <div className='tableau-text'>
                <p>My opinion:</p>
            </div>
        </Fragment>
    )
}

export default Export;