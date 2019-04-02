import React from 'react';
import './ColumnsContainer.css';
import { ColumnContainer } from './Column-container';

export class ColumnsContainer extends React.Component {
    render() {
        return (
            <div className="columns-container">
                <ColumnContainer href="/aboutMe" title="O mnie" paragraf="Nazywam się Kinga Wrona i jestem uczennicą klasy 1 liceum." icon="fas fa-address-card" />
                <ColumnContainer href="/aboutWeb" title="O stronie" paragraf="Będę tu umieszczać moje nieudolne próby tworzenia strony w React." icon="fas fa-info" />
                <ColumnContainer href="/news" title="Aktualności" paragraf="Całkowita zmiana stylu. Nowe kolory. Nowy nagłówek. Nowe wszystko." icon="fas fa-exclamation" />
            </div>
        )
    }
}