import React from 'react';
import './Column-container.css';
import { ButtonGoTo } from './ButtonGoTo';

export class ColumnContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            title: '',
            paragraf:'',
            icon: '',
            href: ''
        }
    }
  
    render() {
        return(
            <div className="Card-about-web">
                <i className={this.props.icon}></i>
                <h3>{ this.props.title }</h3>
                <p>{ this.props.paragraf }</p>
                <ButtonGoTo href={this.props.href} />
            </div>
        )
    }
}