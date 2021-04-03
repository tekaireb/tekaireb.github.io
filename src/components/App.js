import React, { useState } from 'react';

import '../styles/App.css';
import JobsData from "../content/jobs.json";
import ProjectsData from "../content/projects.json";

import Menu from './Menu';
import Intro from './sections/Intro';
import About from './sections/About';
import Jobs from './sections/Jobs';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  // Hold open/close state for sidebar menu (mobile only)
  const [menu_open, set_menu_open] = useState(false);

  return (
    <div className="App">
      <Menu menu_open={menu_open} set_menu_open={set_menu_open} />
      <div className={'content ' + (menu_open ? 'blur' : '')}>
        <Intro />
        <About />
        <Jobs jobs={JobsData} />
        <Projects projects={ProjectsData} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
