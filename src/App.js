import React, { Component } from 'react';
import './App.css';
import { Header } from './Header-component/Header';
import { AboutWeb } from './About-web-component/About-web';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <Header mainTitle="Moja pierwsza strona w React!" secTitle="Jest to strona, na której będę zamieszczać moje pierwsze doświadczenia z tą biblioteją (React.js)."/>
        </header>
        <section className="About-web">
          <AboutWeb title="O mnie" paragraf="Nazywam się KInga Wrona i jestem uczennicą klasy 1 liceum." icon="fas fa-address-card" />
          <AboutWeb title="O stronie" paragraf="Będę tu umieszczać moje nieudolne próby tworzenia strony w React." icon="fas fa-info"/>
          <AboutWeb title="Aktualności" paragraf="Nie ma aktualności" icon="fas fa-exclamation"/>
        </section>
      </div>
    );
  }
}

export default App;
