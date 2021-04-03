import React, { useState, useEffect } from 'react';

import '../styles/App.css';
import ProjectsData from "../content/projects.json";

import Menu from './Menu';
import ProjectsList from './ProjectsList';
import Footer from './sections/Footer';

export default function ProjectsPage() {
    // Hold open/close state for sidebar menu (mobile only)
    const [menu_open, set_menu_open] = useState(false);

    useEffect(() => {
        let url = window.location.href;

        let anchor = url.substring(url.lastIndexOf('#') + 1);
        if (!anchor.startsWith('/')) {
            let project = document.querySelector('#' + anchor);
            setTimeout(() => project.scrollIntoView(), 0);
            for (let n of project.childNodes)
                n.className += ' open';
        }
            
    }, [])

    return (
        <div className="projects_page">
            <Menu menu_open={menu_open} set_menu_open={set_menu_open} />
            <div className={'content ' + (menu_open ? 'blur' : '')}>
                <header>
                    <h1 className='projects_header'>Projects</h1>
                    <h3 className='projects_subheader'><code>a list of my work</code></h3>
                </header>
                <ProjectsList projects={ProjectsData} />
                <Footer />
            </div>
        </div>
    );
}
