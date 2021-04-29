import React, { useRef, useEffect, Fragment, useState } from 'react';
import './styles.css';

const { tableau } = window;

const url = "https://public.tableau.com/views/RegionalSampleWorkbook/College";

const SelectMarks = props => {
    const ref = useRef(null);
    // const [viz, setViz] = useState(null);
    let viz;
    const [sheet, setSheet] = useState(null);
    const [colleges, setColleges] = useState([]);

    const options = {
        hideTabs: true,
        onFirstInteractive: () => {
            let curSheet = viz.getWorkbook().getActiveSheet();
            setSheet(curSheet);
        }
    }

    const createViz = () => {
        viz = new tableau.Viz(ref.current, url, options);
        // setViz(newViz);
    }

    useEffect(() => {
        createViz();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const addCollegeToSelectionOptions = (e) => {
        if (e.target.value === '') return;
        setColleges([...colleges, e.target.value]);
        sheet.selectMarksAsync("College", e.target.value, tableau.SelectionUpdateType.ADD);
    }

    const removeCollegeToSelectionOptions = (e) => {
        if (e.target.value === '') return;
        let curArr = colleges.filter(el => el !== e.target.value);
        setColleges(curArr);
        sheet.selectMarksAsync("College", e.target.value, tableau.SelectionUpdateType.REMOVE);
    }

    const clearCollegeSelection = () => {
        sheet.clearSelectedMarksAsync();
        setColleges([]);
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
                    </select>
                </div>
                <div className='tableau-options'>
                    Remove College: <select id="changeYear" onChange={removeCollegeToSelectionOptions}>
                        <option value="">Select</option>
                        {
                            colleges.map((el, index) => {
                                return <option key={index} value={el}>{el}</option>
                            })
                        }
                    </select>
                </div>
                <div className='tableau-buttons'>
                    <button onClick={clearCollegeSelection}>Clear all</button>
                </div>
            </div>
            <div className='tableau-text'>
                {
                    colleges.length ?
                        <p>Selected College:{colleges.join(',')}</p>
                        :
                        <p>Selected College: none</p>
                }
            </div>
        </Fragment>
    )
}

export default SelectMarks;