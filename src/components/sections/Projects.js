import React from 'react';
import Project from '../Project';
import '../../styles/Projects.css';

export default function Projects(props) {
    return (
        <div className='projects_grid'>
            {props.projects.map(project => <Project project={project} />)}
        </div>
    );
}