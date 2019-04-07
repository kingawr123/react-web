import React, { Component } from 'react';
import './App.css';
import { Header } from './Header-component/Header';
import { AboutMe } from './About-me-component/AboutMe';
import { AboutWeb } from './About-web-component/AboutWeb';
import { ColumnsContainer } from './Column-container-component/ColumnsContainer';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { News } from './News-component/News';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header >
            <Header />
          </header>
          <section>
            <ColumnsContainer />
          </section>
        </div>
        <div className="About-route">
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/aboutWeb" component={AboutWeb} />
          <Route path="/news"component={News}/>
        </div>
      </Router>
    );
  }
}

export default App;


