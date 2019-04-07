import React from 'react';
import './Header.css';
import {Clock} from './Clock'

export class Header extends React.Component {

    render(){
        return(
            < div className="Header-bg">
                <Clock />
                <h1>Moja pierwsza strona w React!</h1>
                <h2>Jest to strona, na której będę zamieszczać moje pierwsze doświadczenia z tą biblioteką (React.js).</h2>
            </ div>
        );
    }
}

