import React from 'react';
import './ColumnsContainer.css';
import { Column } from './Column';

export class ColumnsContainer extends React.Component {
    render() {
        return (
            <div className="columns-container">
                <Column href="/aboutMe" title="O mnie" paragraf="Nazywam się Kinga Wrona i jestem uczennicą klasy 1 liceum." icon="fas fa-address-card" />
                <Column href="/aboutWeb" title="O stronie" paragraf="Będę tu umieszczać moje nieudolne próby tworzenia strony w React." icon="fas fa-info" />
                <Column href="/news" title="Aktualności" paragraf="Całkowita zmiana stylu. Nowe kolory. Nowy nagłówek. Nowe wszystko." icon="fas fa-exclamation" />
            </div>
        )
    }
}

document.addEventListener("DOMContentLoaded", function () {

    windowScroll();
  
    function windowScroll() {
        const Btn = document.querySelectorAll("button");
  
        for (let i = 0; i < Btn.length; i++) {
            Btn[i].addEventListener("click", () => {
                window.scrollTo({
                    left: 0,
                    top: 400 * (i+1),
                    behavior: "smooth"
                })
            })
  
        }
    }
  })
  
