import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { useState } from "react";
import Card from "../Card";
import Dialog from "../Dialog";

export default function Gallery(){
  const [showDialog, setShowDialog] = useState(false)
  const [selectedCard, setSelectedCard] = useState<number | undefined>(undefined)
  const [cardImageList, setCardImageList] = useState<string[]>([])

  const closeDialog = () => {
    setShowDialog(false)
  }

  const handleClickCard = () => {
    setShowDialog(true)
  }

  const getCards = async () => {
    const cards = await PokemonTCG.findCardsByQueries({ page: 1, pageSize: 9 })
    cards.map(item => setCardImageList(prev => [...prev, item.images.small]))
  }

  getCards()

  return(
    <section className="w-full flex flex-row flex-wrap justify-center items-center gap-4 p-4">
      {Array.from({ length: 9 }).map((_, i) =>
          <Card 
            handleClick={handleClickCard} 
            position={i + 1} 
            onSelectNumber={setSelectedCard} 
            key={i.toString()}
            imageURL={cardImageList[i]}
          />
      )}

      <Dialog isOpen={showDialog} onClose={closeDialog}> 
        <h2> { selectedCard } </h2>
      </Dialog>
    </section>
  )
}