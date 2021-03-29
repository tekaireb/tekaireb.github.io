import React from 'react';
import '../../styles/Jobs.css';

import Timeline from '../Timeline';

export default function Jobs(props) {
    return (
        <div className='jobs' id='jobs'>
            <h1>Work History</h1>
            <div className='jobs_container'>
                <div className='jobs_timeline'>
                    <div className='events'></div>
                    <Timeline jobs={props.jobs} />
                </div>
            </div>
        </div>
    );
}