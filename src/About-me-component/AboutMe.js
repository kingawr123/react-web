import React from 'react';
import './AboutMe.css';
import { List } from './List';
import { MyImage } from './MyImg';

export class AboutMe extends React.Component {
    render(){
        return(
            <div className="about-me">
            <List tasks={[
              'Nazywam się Kinga Wrona', 
              'Mam obecnie 17 lat', 
              'Chodzę do pierwszej klasy liceum', 
              'Uczęszczam do szkoły im.Juliusza Słowackiego w Kielcach', 
              'Chodzę do klasy o profilu mat-fiz-inf z patronatem TT'
            ]}/>
            <MyImage />
          </div>
        )
    }
}