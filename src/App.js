import React from 'react'
import PromoTitle from './components/PromoTitle'
import CardsGrid from './components/CardsGrid'

function App() {
  return (
    <div className={'app-container'}>
      <PromoTitle>Ты сегодня покормил кота?</PromoTitle>
      <CardsGrid />
    </div>
  )
}

export default App
