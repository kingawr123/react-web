import React from 'react';
import './Header.css';

export class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            mainTitle: '',
            secTitle:'',
        }
    }

    render(){
        return(
            < div className="Header-bg">
                <h1>{this.props.mainTitle}</h1>
                <headerH1 />
                <h2>{this.props.secTitle}</h2>
            </ div>
        );
    }
}

