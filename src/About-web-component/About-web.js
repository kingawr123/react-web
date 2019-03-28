import React from 'react';
import './About-web.css';

export class AboutWeb extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            title: '',
            paragraf:'',
            icon: '',
        }
    }
  
    render() {
        return(
            <div className="Card-about-web">
                <i class={this.props.icon}></i>
                <h3>{ this.props.title }</h3>
                <p>{ this.props.paragraf }</p>
            </div>
        )
    }
}