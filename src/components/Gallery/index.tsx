import { useCardsContext } from '@/utils/contexts/cards.context'
import Card from '../Card'

export default function Gallery() {
	const { selectedCard, onSetSelectedCard, cardsOnPage } = useCardsContext()
	// getCards()
	// const t = new SpeechSynthesisUtterance("Olá meu nome é carlos")
	// t.pitch = 0.6
	// t.rate = 1.5
	// speechSynthesis.speak(t)

	const isEqual = (n1: number, n2: number) => {
		return n1 === n2 - 1
	}

	const isSelectedCard = (index: number) => {
		if(!selectedCard) return false 
		return selectedCard.position === index + 1
	}

	return (
		<div className="w-full h-full flex flex-col p-4">
			<span className="text-white">
				vc selecionou a carta: {selectedCard?.position}
			</span>
			<section className="flex-1 rounded-md bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 overflow-y-hidden">
				{cardsOnPage.map((card, index) => (
					<Card
						id={card.id}
						key={card.id}
						position={index}
						imageURL={card.imageUrl}
						onSelectCard={onSetSelectedCard}
						isSelected={isSelectedCard(index)}
					/>
				))}
			</section>
		</div>
	)
}
