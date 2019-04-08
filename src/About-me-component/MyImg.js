import React from 'react';
import './MyImg.css';

export class MyImage extends React.Component {

    render() {
        return (
            <div className={this.props.containerClass}>
                <div className={this.props.imgClass}></div>
            </div>
        )
    }
}