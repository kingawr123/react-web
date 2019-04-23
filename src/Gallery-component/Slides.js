import React from 'react';
import './Slides.css';

export class Slides extends React.Component{
    render(){
        return(
            <div className="slider-stage">
                <ul className="slider">
                {this.props.tasks.map((imgClass, i) => <li key={i}><div className={imgClass}/></li> )}
                </ul>
            </div>
        )
    }
}