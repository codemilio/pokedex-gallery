import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { useState } from 'react'
import Card from '../Card'

type Props = {
	isCustomDeck?: boolean
}
export default function Gallery({ isCustomDeck = false }: Props) {
	const [selectedCard, setSelectedCard] = useState<number | undefined>()
	const [cardImageList, setCardImageList] = useState<string[]>([])

	const handleSelectCard = (cardNumber: number) => {
		setSelectedCard(cardNumber)
	}

	const getCards = async () => {
		const cards = await PokemonTCG.findCardsByQueries({ page: 1, pageSize: 9 })
		console.log(cards)
		cards.map((item) =>
			setCardImageList((prev) => [...prev, item.images.small])
		)
	}

	// getCards()
	// const t = new SpeechSynthesisUtterance("Olá meu nome é carlos")
	// t.pitch = 0.6
	// t.rate = 1.5
	// speechSynthesis.speak(t)

	return (
		<div className='flex-1 flex flex-col first:border-r-8 border-black p-4'>
			<span className='text-white'> vc selecionou a carta: {selectedCard} </span>
			<section className="w-full flex flex-row flex-wrap justify-center items-center gap-4 p-4">
				{Array.from({ length: 9 }).map((_, i) => (
					<Card
						position={i + 1}
						onSelectCard={handleSelectCard}
						imageURL={cardImageList[i]}
						key={i.toString()}
					/>
				))}
			</section>
		</div>
	)
}
