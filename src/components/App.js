import '../styles/App.css';
import JobsData from "../content/jobs.json";
import ProjectsData from "../content/projects.json";

import Intro from './sections/Intro';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="App">
      <Intro />
      <Projects projects={ProjectsData} />
    </div>
  );
}

export default App;
