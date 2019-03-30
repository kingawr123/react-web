import React from 'react';
import './ButtonGoTo.css';

export class ButtonGoTo extends React.Component {
    render(){
        return(
            <div className="button-container">
                <button onClick = {() => alert('Wciśnięto!!!')}>Przejdź do</button>
            </div>
        )
    }
}
