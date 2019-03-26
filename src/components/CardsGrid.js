import React from 'react'
import Card from './Card'
import { cards } from '../data'

function CardsGrid() {
  return (
    <ul className={'product-list'}>
      {cards.map(data => {
        const initialState = data.available ? 'default' : 'disabled'
        return <Card key={data.cardId} data={data} initial={initialState} />
      })}
    </ul>
  )
}

export default CardsGrid
