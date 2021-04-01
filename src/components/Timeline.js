import React, { useState } from 'react';
import '../styles/Jobs.css';

import arrow_down from '../img/arrow_down.svg';

// Determine if two Dates have the same month and year
function sameDate(d1, d2) {
    return d1.getMonth === d2.getMonth && d1.getFullYear() === d2.getFullYear();
}

// Find number of months between two Dates
function monthDiff(d1, d2) {
    return d1.getMonth() - d2.getMonth() + (12 * (d1.getFullYear() - d2.getFullYear()))
}

// Determine whether or not two (date) ranges overlap
function rangesOverlap(a_start, a_end, b_start, b_end) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end && b_end <= a_end) return true; // b ends in a
    if (b_start < a_start && a_end < b_end) return true; // a in b
    return false;
}

// Counts number of collisions between range and other_ranges
function countOverlaps(range, other_ranges) {
    let count = 0;

    other_ranges.forEach(r => {
        if (rangesOverlap(range.start_date, range.end_date, r.start_date, r.end_date))
            count++;
    });

    return count;
}

export default function Timeline(props) {
    const TICK = 15; // Distance between months on timeline (in px)

    // Convert date strings to Date objects
    let jobs = props.jobs.map(job => ({
        ...job,
        start_date: new Date(job.start_date),
        end_date: (job.end_date !== '' ? new Date(job.end_date) : new Date()) // Use present if no end_date specified
    }));

    // First and last job objects
    let first = jobs[props.jobs.length - 1],
        last = jobs[0];

    // First and last dates in job timeline
    let start = first.start_date,
        end = last.end_date;

    // Number of months between start/end dates
    let diff = monthDiff(end, start);

    // Generate array of objects containing every month/year between start and end, inclusive
    var range = Array(diff + 1).fill().map((_, i) => ({
        m: (i + start.getMonth()) % 12, // Month
        y: start.getFullYear() + (i + start.getMonth()) / 12 // Year
    }));

    // Getter/Setter for current active job index
    const [active_job, set_active_job] = useState(0);

    // Current active job
    let j = jobs[active_job];

    const next_event = (direction, value = -1) => {
        // Increment or decrement active_job
        if (value === -1) {
            if (direction && active_job !== 0) set_active_job(active_job - 1);
            if (!direction && active_job !== jobs.length - 1) set_active_job(active_job + 1);
        } else set_active_job(value);

        // Bring active job bar on timeline into view
        document.getElementById('job_bar_' + active_job).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }

    

    return (
        <>
            <div className='timeline_event'>
                <p className='event_header'>
                    {j.title} @ <a href={j.link}>{j.company}</a>
                </p>
                <code className='event_timeframe'>
                    {j.start_date.toLocaleString('default', { month: 'long' })} {j.start_date.getFullYear()} -&nbsp;
                    {sameDate(j.end_date, new Date()) ? 'Present' : j.end_date.toLocaleString('default', { month: 'long' }) + ' ' + j.end_date.getFullYear()}
                </code>
                <div className='event_description'>
                    {j.description.map(line => <span>{line}<br /></span>)}
                </div>

                {active_job !== jobs.length - 1 && <div className='event_left' onClick={() => next_event(0)}>
                    <img src={arrow_down} alt='arrow left' className='left_arrow' />
                </div>}
                {active_job !== 0 && <div className='event_right' onClick={() => next_event(1)}>
                    <img src={arrow_down} alt='arrow right' className='right_arrow' />
                </div>}
            </div>
            <div className='axis'>
                {/* Axis */}
                {range.map((d, i) =>
                    <>
                        {/* Gridlines */}
                        <div className='line' style={{
                            left: i * TICK,
                            width: d.m ? 1 : 2, // Make width 2px on new year
                            bottom: d.m ? 40 : 30, // Make line lower on new year
                            background: d.m ? 'rgb(180, 245, 240, 0.1)' : 'rgb(180, 245, 240, 0.3)' // Make color darker on new year
                        }}></div>

                        {/* Date Labels */}
                        {d.m === 0 && <div className='year' style={{ left: i * TICK - 15 }}>{d.y}</div>}
                    </>
                )}

                {/* Jobs */}
                {jobs.map((job, i) =>
                    <div
                        className='job_bar' id={'job_bar_' + i}
                        style={{
                            left: monthDiff(job.start_date, start) * TICK,
                            width: monthDiff(job.end_date, job.start_date) * TICK,
                            top: countOverlaps(job, jobs.slice(0, i)) * (15) + 5,
                            background: i === active_job ? '#00d9f0' : '#b4f5f0'
                        }}
                        onClick={() => next_event(0, i)}
                    ></div>
                )}
            </div>
        </>
    );

}