import '../styles/App.css';
import JobsData from "../content/jobs.json";
import ProjectsData from "../content/projects.json";

import Projects from './sections/Projects';

function App() {
  return (
    <div className="App">
      <Projects projects={ProjectsData} />
    </div>
  );
}

export default App;
