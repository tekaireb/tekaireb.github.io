import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import './styles/index.css';
import App from './components/App';
import ProjectsPage from './components/ProjectsPage';

import ScrollToTop from './components/ScrollToTop';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const routes = (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" ><ScrollToTop><App /></ ScrollToTop></Route>
      <Route exact path="/projects">
        <ScrollToTop><ProjectsPage /></ ScrollToTop>
      </Route>
    </Switch>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
