import { useState } from "react";
import Card from "../Card";
import Dialog from "../Dialog";

export default function Gallery(){
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedCard, setSelectedCard] = useState<number | undefined>(undefined)

  return(
    <section className="w-full flex flex-row flex-wrap justify-center items-center gap-4 p-4">
      {Array.from({ length: 9 }).map((_, i) =>
          <Card handleClick={() => setOpenDialog(true)} position={i + 1} onSelectNumber={setSelectedCard} />
      )}

      <Dialog isOpen={openDialog} onClose={() => setOpenDialog(false)}> 
        <h2> { selectedCard } </h2>
      </Dialog>
    </section>
  )
}