import React from 'react';
import Project from '../Project';
import '../../styles/Projects.css';

export default function Projects(props) {
    return (
        <div className='projects' id='projects'>
            <h1>Projects</h1>
            <h3 className='projects_subheader'><code><a href='/projects'>view more projects</a></code></h3>
            <div className='projects_grid'>
                {props.projects.map(project => <Project project={project} />)}
            </div>
        </div>
    );
}