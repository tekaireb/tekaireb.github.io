import React, { useState } from 'react';
import '../styles/ProjectsPage.css';

import github from '../img/github.svg';
import link from '../img/external_link.svg';

function ProjectsListItem(props) {
    let project = props.project;

    const [open, set_open] = useState(false);

    return (
        <div className='project_item'>
            <div className={'project_item_header ' + (open ? 'open' : '')} onClick={() => set_open(!open)}>
                <div data-title="Title" className='project_item_title'>
                    {project.title}
                </div>
                <div data-title="Year" className='project_item_year'>
                    {project.end_date.slice(-4)} {/* Date format: {MONTH} {DAY}, {YEAR} */}
                </div>
                <div data-title="Links" className='project_item_links'>
                    {project.github && <a href={project.github} target='_blank' rel="noreferrer"><img src={github} alt='GitHub Link' className='icon' /></a>}
                    {project.link && <a href={project.link} target='_blank' rel="noreferrer"><img src={link} alt='External Link' className='icon' /></a>}
                </div>
            </div>
            <div className={'project_item_content ' + (open ? 'open' : '')}>
                {project.description.map(line => <span>{line}<br /></span>)}
                {project.images && project.images.map(i => <img src={i} alt={project.title + ' media'} className='project_item_image' />)}
            </div>
        </div>
    );
}

export default function ProjectsList(props) {
    return (
        <div className='projects_list'>
            {props.projects.map(project => <ProjectsListItem project={project} />)}
        </div>
    );
}