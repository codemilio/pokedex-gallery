import { useState } from "react";
import Card from "../Card";
import Dialog from "../Dialog";

export default function Gallery(){
  const [showDialog, setShowDialog] = useState(false)
  const [selectedCard, setSelectedCard] = useState<number | undefined>(undefined)

  const closeDialog = () => {
    setShowDialog(false)
  }

  const handleClickCard = () => {
    setShowDialog(true)
  }

  return(
    <section className="w-full flex flex-row flex-wrap justify-center items-center gap-4 p-4">
      {Array.from({ length: 9 }).map((_, i) =>
          <Card handleClick={handleClickCard} position={i + 1} onSelectNumber={setSelectedCard} />
      )}

      <Dialog isOpen={showDialog} onClose={closeDialog}> 
        <h2> { selectedCard } </h2>
      </Dialog>
    </section>
  )
}