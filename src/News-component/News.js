import React, { Component } from 'react';
import './News.css';
import { List } from './List';

export class News extends React.Component {
    render() {
        return(
            <div className="news">
                <List tasks={[
                    'Router!!!!',
                    'Nowe kolorki takie różowe ładne',
                    'No i kwiotków dużo',
                    'Takie dłuższe żeby okienko było szersze. No jeszcze troche'
                ]}/>
            </div>
        )
    }
}