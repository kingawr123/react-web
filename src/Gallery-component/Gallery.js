import React from 'react';
import './Gallery.css';
import { Slides } from './Slides';

export class Gallery extends React.Component {

    render() {
        return (
            <div className="slider-container">
                <div className="previous-arrow"><i className="fas fa-chevron-left"></i></div>
                <Slides tasks={[
                    'flower',
                    'bird'
                ]} />
                <div className="next-arrow"><i className="fas fa-chevron-right"></i></div>
            </div>
        )
    }
}