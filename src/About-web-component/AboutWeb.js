import React from 'react';
import './AboutWeb.css';
import {List} from './List';

export class AboutWeb extends React.Component {
    render(){
        return(
            <div className="about-web">
                <List tasks={[
                    'Strona stworzona przeze mnie',
                    'Będę zamieszczać tu różne nie istotne rzeczy',
                    'Próbuję korzystać z React'
                ]}/>
            </div>
        )
    }
}