import React, { useRef, useEffect, Fragment } from 'react';
import './styles.css';

const { tableau } = window;

const SelectMarks = props => {
    const ref = useRef(null);
    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/College";
    let viz, sheet;

    const options = {
        "Academic Year": "",
        hideTabs: true,
        onFirstInteractive: () => sheet = viz.getWorkbook().getActiveSheet()
    }

    const createViz = () => {
        viz = new tableau.Viz(ref.current, url, options);
    }

    useEffect(() => {
        createViz()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const addCollegeToSelectionOptions = (e) => {
        if (e.target.value === '') return;
        sheet.selectMarksAsync("College", e.target.value, tableau.SelectionUpdateType.ADD);
    }

    const removeCollegeToSelectionOptions = (e) => {
        if (e.target.value === '') return;

        sheet.selectMarksAsync("College", e.target.value, tableau.SelectionUpdateType.REMOVE);
    }

    const clearCollegeSelection = () => {
        sheet.clearSelectedMarksAsync();
    }

    return (
        <Fragment>
            <h4>Select Marks</h4>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-controllers'>
                <div className='tableau-options'>
                    Add College: <select id="changeYear" onChange={addCollegeToSelectionOptions}>
                        <option value="">Select</option>
                        <option value="Arts & Sciences">Arts & Sciences</option>
                        <option value="Business">Business</option>
                        <option value="Communication">Communication</option>
                        <option value="Education">Education</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Music">Music</option>
                        <option value="Public Affairs">Public Affairs</option>
                        <option value="Public Health">Public Health</option>
                        <option value="Public Affairs">Public Affairs</option>
                    </select>
                </div>
                <div className='tableau-options'>
                    Remove College: <select id="changeYear" onChange={removeCollegeToSelectionOptions}>
                        <option value="">Select</option>
                        <option value="Arts & Sciences">Arts & Sciences</option>
                        <option value="Business">Business</option>
                        <option value="Communication">Communication</option>
                        <option value="Education">Education</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Music">Music</option>
                        <option value="Public Affairs">Public Affairs</option>
                        <option value="Public Health">Public Health</option>
                        <option value="Public Affairs">Public Affairs</option>
                    </select>
                </div>
                <div className='tableau-buttons'>
                    <button onClick={clearCollegeSelection}>Clear all</button>
                </div>
            </div>
            <div className='tableau-comment'>
                <p>Selected College:</p>
            </div>
        </Fragment>
    )
}

export default SelectMarks;