import React from 'react';
import './List.css';

export class List extends React.Component{
    render(){
        return(
            <div className="List">
                <h3>O mnie</h3>
                <ul>
                {this.props.tasks.map((task, index) => <li key={index}><i className="fas fa-angle-right"></i>{task}</li>)}
                </ul>
            </div>
        )
    }
}