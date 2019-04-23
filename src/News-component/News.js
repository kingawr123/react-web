import React from 'react';
import './News.css';
import { List } from './List';

export class News extends React.Component {
    render() {
        return(
            <div className="news">
                <List tasks={[
                    'Strzałka do góry!!!',
                    'Nowe kolorki takie różowe ładne',
                    'Cliknij w przycisk!!, dłuższy napis mi jest potrzebny',
                    'Zegar (działa!!) (i nie jest do niczego potrzebny xd)'
                ]}/>
            </div>
        )
    }
}