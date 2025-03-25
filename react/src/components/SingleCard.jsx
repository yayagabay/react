import React from 'react'
import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
    function handleClick() {
        if (!disabled) {
            handleChoice(card);
        }
    }
    return (
        <div>
            <div className="card">
                <div className={flipped ? 'flipped' : ''}>
                    <img className='front' src={card.src} alt="" />
                    <img className='back' src="https://react-memory-game-app-ct.netlify.app/img/cover.png" alt="" onClick={handleClick} />

                </div>
            </div>
        </div>
    )
}
