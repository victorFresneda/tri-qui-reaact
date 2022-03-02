


import React from 'react'
import { Squares } from '../Squares/Squares'
import './Board.css'

export const Board = ({squares, onClick, turn, winningSquares}) => {

    const createSqueres =  values => (
        values.map( value => (

            <Squares
                winner={winningSquares.includes(value)}
                turn={turn}
                onClick={() => onClick(value)} 
                value={squares[value]} 
                key={`squares:${value}`}    
                />


        ))

        
    )

    
  return (
    
    <div 
    className='board'
    >
        <div className='row'>
            {createSqueres([0,1,2])}

        </div>
        <div className='row'>
            {createSqueres([3,4,5])}

        </div>
        <div className='row'>
            {createSqueres([6,7,8])}

        </div>
    </div>
  )
}
