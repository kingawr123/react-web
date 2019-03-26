import React, { Component } from 'react';
import './App.css';
import { Header } from './Header-component/Header';
import { AboutWeb } from './About-web-component/About-web';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <Header />
        </header>
        <section className="About-web">
          <AboutWeb title="O mnie" paragraf="Nazywam się KInga Wrona i jestem uczennicą klasy 1 liceum." />
          <AboutWeb title="O stronie" paragraf="Będę tu umieszczać moje nieudolne próby tworzenia strony w React."/>
          <AboutWeb title="Aktualności" paragraf="Nie ma aktualności"/>
        </section>
      </div>
    );
  }
}

export default App;
