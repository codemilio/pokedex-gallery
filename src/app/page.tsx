"use client"

import Gallery from '@/components/Gallery'
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

export default function App() {
  const getCard = async () => {
    const cards = await PokemonTCG.findCardsByQueries({ q: 'nationalPokedexNumbers:1'})
    console.log(cards)
  }

  return (
    <main className='w-full h-screen'>
      <Gallery />
    </main>
  )
}