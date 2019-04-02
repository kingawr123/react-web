import React from 'react';
import './Header.css';

export class Header extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = { 
    //         mainTitle: '',
    //         secTitle:'',
    //     }
    // }

    render(){
        return(
            < div className="Header-bg">
                {/* <h1>{this.props.mainTitle}</h1>
                <h2>{this.props.secTitle}</h2> */}
                <h1>Moja pierwsza strona w React!</h1>
                <h2>Jest to strona, na której będę zamieszczać moje pierwsze doświadczenia z tą biblioteką (React.js).</h2>
            </ div>
        );
    }
}

