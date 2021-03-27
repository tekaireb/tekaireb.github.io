import React from 'react';
import Project from '../Project';
import '../../styles/Projects.css';

export default function Projects(props) {
    return (
        <div class='projects'>
            <h1>Projects</h1>
            <h3 class='projects_subheader'>view more on GitHub</h3>
            <div className='projects_grid'>
                {props.projects.map(project => <Project project={project} />)}
            </div>
        </div>
    );
}