import React from 'react';
import './Clock.css';

export class Clock extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
    
    render(){
        return(
            <div className="clock">
                <h3>{this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}