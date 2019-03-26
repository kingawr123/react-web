import React from 'react';
import './Header.css';

export class Header extends React.Component{
    render(){
        return(
            < div className="Header-bg">
                <h1>Moja pierwsza strona w React!</h1>
                <h2>Będzie to strona, na której będę zamieszczać moje pierwsze doświadczenia z tą biblioteją (React.js).</h2>
            </ div>
        );
    }
}