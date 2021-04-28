import React, { useRef, useEffect, Fragment } from 'react';
import './styles.css';

const { tableau } = window;

const Resize = props => {
    const ref = useRef(null);
    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/College";
    let viz;

    const listenToMarksSelection = () => {
        viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
    }

    const onMarksSelection = (marksEvent) => {
        return marksEvent.getMarksAsync().then(reportSelectedMarks);
    }

    const reportSelectedMarks = (marks) => {
        let html = "";

        for (let markIndex = 0; markIndex < marks.length; markIndex++) {
            let pairs = marks[markIndex].getPairs();
            html += "<b>Mark " + markIndex + ":</b><ul>";

            for (let pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
                let pair = pairs[pairIndex];
                html += "<li><b>Field Name:</b> " + pair.fieldName;
                html += "<br/><b>Value:</b> " + pair.formattedValue + "</li>";
            }

            html += "</ul>";
        }

        let infoDiv = document.getElementById('markDetails');
        infoDiv.innerHTML = html;
    }
    
    const options = {
        "Academic Year": "",
        hideTabs: true,
        onFirstInteractive: () => listenToMarksSelection()
    }

    const createViz = () => {
        viz = new tableau.Viz(ref.current, url, options);
    }

    useEffect(() => {
        createViz()
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Fragment>
            <h4>Events Response</h4>
            <div ref={ref} className='tableau-content'></div>
            <div className='tableau-data'>
                <div id="markDetails">Information about selected marks displays here.</div>
            </div>
        </Fragment>
    )
}

export default Resize;