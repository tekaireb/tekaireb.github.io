import React, {useState} from 'react';
import '../styles/ProjectsPage.css';

function ProjectsListItem(props) {
    let project = props.project;

    const [open, set_open] = useState(false);

    return (
        <div className='project_item'>
            <div className='project_item_header' onClick={() => set_open(!open)}>
                <div data-title="Title" className={'project_item_title ' + (open ? 'open' : '')}>{project.title}</div>
                <div data-title="Year">{project.start_date.slice(-4)}</div> {/* Date format: {MONTH} {DAY}, {YEAR} */}
                <div data-title="Links">
                    <a href={project.link}>LINK</a>
                </div>
            </div>
            <div className={'project_item_content ' + (open ? 'open' : '')}>
                {project.description.map(line => <span>{line}<br /></span>)}
            </div>
        </div>
    );
}

export default function ProjectsList(props) {
    return (
        <div className='projects_list'>
            {props.projects.map(project => <ProjectsListItem project={project} />
                // <div className='project_item'>
                //     <div className='project_item_header'>
                //         <div data-title="Title" className='project_item_title'>{project.title}</div>
                //         <div data-title="Year">{project.start_date.slice(-4)}</div> {/* Date format: {MONTH} {DAY}, {YEAR} */}
                //         <div data-title="Links">
                //             <a href={project.link}>LINK</a>
                //         </div>
                //     </div>
                //     <div className='project_item_content'>

                //     </div>
                // </div>
            )}
        </div>
    );
}