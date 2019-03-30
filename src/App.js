import React, { Component } from 'react';
import './App.css';
import { Header } from './Header-component/Header';
import { AboutWeb } from './About-web-component/About-web';
import { List } from './List-with-img/List';
import { MyImage } from './List-with-img/MyImg';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header >
          <Header mainTitle="Moja pierwsza strona w React!" secTitle="Jest to strona, na której będę zamieszczać moje pierwsze doświadczenia z tą biblioteką (React.js)." />
        </header>
        <section className="About-web">
          <AboutWeb title="O mnie" paragraf="Nazywam się Kinga Wrona i jestem uczennicą klasy 1 liceum." icon="fas fa-address-card" />
          <AboutWeb title="O stronie" paragraf="Będę tu umieszczać moje nieudolne próby tworzenia strony w React." icon="fas fa-info" />
          <AboutWeb title="Aktualności" paragraf="Całkowita zmiana stylu. Nowe kolory. Nowy nagłówek. Nowe wszystko." icon="fas fa-exclamation" />
        </section>
        <section className="List-with-img">
          <List tasks={[
            'Nazywam się Kinga Wrona', 
            'Mam obecnie 17 lat', 
            'Chodzę do pierwszej klasy liceum', 
            'Uczęszczam do szkoły im.Juliusza Słowackiego w Kielcach', 
            'Chodzę do klasy o profilu mat-fiz-inf z patronatem TT'
          ]}/>
          <MyImage />
        </section>
      </div>
    );
  }
}

export default App;
