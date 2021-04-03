import React from 'react';
import '../styles/Project.css';

export default function Project(props) {

    let project = props.project;

    return (
        <div className='project'>
            <a href={'/#/projects#' + project.title.replaceAll(' ', '_')}>
                <div>
                    <h3 className='project_header'>{project.title}</h3>
                    <p className='project_description'>{project.blurb}</p>
                    {project.images && project.images.map(i => <img src={i} alt={project.title + ' media'} className='project_image' />)}
                </div>
                <div className='project_tags'>
                    {project.tags.map(tag => <code className='project_tag'>{tag}</code>)}
                </div>
            </a>
        </div>
    );
}