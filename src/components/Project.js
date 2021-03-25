import React from 'react';
import '../styles/Project.css';

export default function Project(props) {
    return (
        <div className='project'>
            <h2 className='project_header'>{props.project.title}</h2>
            <p className='project_description'>{props.project.description.map(line => <span>{line}<br /></span>)}</p>
        </div>
    );
}