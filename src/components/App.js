import '../styles/App.css';
import JobsData from "../content/jobs.json";
import ProjectsData from "../content/projects.json";

import Menu from './Menu';
import Intro from './sections/Intro';
import Jobs from './sections/Jobs';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Intro />
      <Jobs jobs={JobsData} />
      <Projects projects={ProjectsData} />
      <Footer />
    </div>
  );
}

export default App;
