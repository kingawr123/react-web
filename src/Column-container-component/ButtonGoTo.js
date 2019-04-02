import React from 'react';
import './ButtonGoTo.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

export class ButtonGoTo extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="button-container">
                <Link to={this.props.href}><button>Przejdź do</button></Link>
            </div>
        )
    }
}
