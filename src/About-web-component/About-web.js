import React from 'react';
import './About-web.css';
import { ButtonGoTo } from './ButtonGoTo';

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
                <i className={this.props.icon}></i>
                <h3>{ this.props.title }</h3>
                <p>{ this.props.paragraf }</p>
                <ButtonGoTo />
            </div>
        )
    }
}