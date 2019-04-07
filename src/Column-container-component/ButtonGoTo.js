import React from 'react';
import './ButtonGoTo.css';
import { Link } from 'react-router-dom';

export class ButtonGoTo extends React.Component { 
    render(){
        return(
            <div className="button-container">
                <Link to={this.props.href}><button>Przejdź do</button></Link>
            </div>
        )
    }
}