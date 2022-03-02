


import classNames from 'classnames';
import React from 'react'
import './Squares.css'

export const Squares = ({value, onClick, turn, winner}) => {

  const handleClick = () => {
    (turn !== null && value === null) && onClick();

  }

  let squareClass = classNames({
     square: true,
     [`square--${value}`]: value !== null,
     winner: winner,

  });

  
  return (
    <div className={squareClass} onClick={() => handleClick()}>
      
    </div>
  )
}
