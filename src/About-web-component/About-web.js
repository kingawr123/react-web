import React from 'react';
import './About-web.css';

export class AboutWeb extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            title: '',
            paragraf:'',
        }
    }
  
    render() {
        return(
            <div className="Card-about-web">
                <h1>{ this.props.title }</h1>
                <p>{ this.props.paragraf }</p>
            </div>
        )
    }
}