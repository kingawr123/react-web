import React from 'react';
import './Column.css';
import { ButtonGoTo } from './ButtonGoTo';

export class Column extends React.Component {

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
            <div className="Card">
                <i className={this.props.icon}></i>
                <h3>{ this.props.title }</h3>
                <p>{ this.props.paragraf }</p>
                <ButtonGoTo href={this.props.href} />
            </div>
        )
    }
}