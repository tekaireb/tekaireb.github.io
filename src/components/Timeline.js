import React from 'react';
import '../styles/Jobs.css';

// Find number of months between two Dates
function monthDiff(d1, d2) {
    return d1.getMonth() - d2.getMonth() + (12 * (d1.getFullYear() - d2.getFullYear()))
}

export default function Timeline(props) {
    // First and last job objects
    let first = props.jobs[props.jobs.length - 1],
        last = props.jobs[0];

    // First and last dates in job timeline
    let start = new Date(first.start_date),
        end = (last.end_date !== '' ? new Date(last.end_date) : new Date()); // Use present if no end_date specified

    // Number of months between start/end dates
    let diff = monthDiff(start, end);


    var range = Array(Math.abs(diff) + 1).fill().map((_, i) => ({
        m: (i + start.getMonth()) % 12, // Month
        y: start.getFullYear() + (i + start.getMonth()) / 12 // Year
    }));
    console.log(range);

    return (
        <>
            <div className='timeline_event'></div>
            <div className='axis'>
                {/* Axis */}
                {range.map((d, i) =>
                    <>
                        {/* Gridlines */}
                        <div className='line' style={{
                            left: i * 10,
                            width: d.m ? 1 : 2, // Make width 2px on new year
                            bottom: d.m ? 30 : 25, // Make line lower on new year
                            background: d.m ? 'rgb(180, 245, 240, 0.1)' : 'rgb(180, 245, 240, 0.3)' // Make color darker on new year
                        }}></div>

                        {/* Date Labels */}
                        {d.m === 0 && <div className='year' style={{ left: i * 10 - 15 }}>{d.y}</div>}
                    </>
                )}


            </div>
        </>
    );

}