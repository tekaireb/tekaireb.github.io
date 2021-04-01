import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './styles/index.css';
import App from './components/App';
import ProjectsPage from './components/ProjectsPage';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const routes = (
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <Route exact path="/" component={App} />
      <Route path="/projects" component={ProjectsPage} />
    </>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
