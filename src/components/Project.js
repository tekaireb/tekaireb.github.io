import React from 'react';
import '../styles/Project.css';

export default function Project(props) {
    return (
        <div className='project'>
            <div>
                <h3 className='project_header'>{props.project.title}</h3>
                <p className='project_description'>{props.project.description.map(line => <span>{line}<br /></span>)}</p>
            </div>
            <div className='project_tags'>
                {props.project.tags.map(tag => <span className='project_tag'>{tag}</span>)}
            </div>
        </div>
    );
}