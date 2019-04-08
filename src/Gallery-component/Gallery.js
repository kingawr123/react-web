import React from 'react';
import './Gallery.css';
import { MyImage } from '../About-me-component/MyImg';

export class Galery extends React.Component{
    render(){
        return(
            <div className="gallery-container">
                <MyImage containerClass="img-in-gallery-cont" imgClass="img-in-gallery"/>
            </div>
        )
    }
}