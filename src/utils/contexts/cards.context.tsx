import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { type ReactNode, createContext, useContext, useState } from 'react'

export type CardType = {
	id: string
	name: string
	imageUrl: string
	position: number
}

interface CardContextProps {
	cardsOnPage: CardType[]
	cardToAdd: CardType | null
	selectedCard: CardType | null
	onSetSelectedCard: (card: CardType) => void
	onAddCard: (card: CardType) => void
	onChangeCard: () => void
	onDeleteCardSelected: () => void
	onSpeakAboutPokemon: () => Promise<void>
}

const CardsContext = createContext<CardContextProps | undefined>(undefined)

const InitialDeckState: CardType[] = [
	{
		id: '00001',
		imageUrl: '',
		name: 'void',
		position: 1
	},
	{
		id: '00002',
		imageUrl: '',
		name: 'void',
		position: 2
	},
	{
		id: '00003',
		imageUrl: '',
		name: 'void',
		position: 3
	},
	{
		id: '00004',
		imageUrl: '',
		name: 'void',
		position: 4
	},
	{
		id: '00005',
		imageUrl: '',
		name: 'void',
		position: 5
	},
	{
		id: '00006',
		imageUrl: '',
		name: 'void',
		position: 6
	},
	{
		id: '00007',
		imageUrl: '',
		name: 'void',
		position: 7
	},
	{
		id: '00008',
		imageUrl: '',
		name: 'void',
		position: 8
	},
	{
		id: '00009',
		imageUrl: '',
		name: 'void',
		position: 9
	}
]

export const CardsContextProvider = ({ children }: { children: ReactNode }) => {
	const [cardToAdd, setCardToAdd] = useState<CardType | null>(null)
	const [selectedCard, setSelectedCard] = useState<CardType | null>(null)
	const [cardsOnPage, setCardsOnPage] = useState<CardType[]>(InitialDeckState)

	const onAddCard = (card: CardType) => {
		setCardToAdd(card)
	}

	const onSetSelectedCard = (card: CardType) => {
		setSelectedCard(card)
	}

	const onChangeCard = () => {
		if (!selectedCard || !cardToAdd) return
		const id = selectedCard.id

		setCardsOnPage((prev) =>
			prev.map((item) =>
				item.id === id ? { ...cardToAdd, position: item.position } : item
			)
		)
	}

	const onDeleteCardSelected = () => {
		if (!selectedCard || !cardToAdd) return
		const { id, position } = selectedCard
		const blankCardOnPosition = InitialDeckState[position - 1]

		setCardsOnPage((prev) =>
			prev.map((item) => (item.id === id ? { ...blankCardOnPosition } : item))
		)
	}

	const onSpeakAboutPokemon = async () => {
		if (!selectedCard || !cardToAdd) return
		const { id } = selectedCard
		const response = await PokemonTCG.findCardByID(id)
		const { name, types, flavorText } = response
		const flatTypes = types ? types[0] : 'normal'
		const pokedexText = `${name} é um pokemon do tipo ${flatTypes} e ${flavorText}`
		console.log(pokedexText)
		const speaker = new SpeechSynthesisUtterance(pokedexText)
		speaker.pitch = 0.6
		speaker.rate = 1.5
		speechSynthesis.speak(speaker)
	}

	return (
		<CardsContext.Provider
			value={{
				selectedCard,
				onSetSelectedCard,
				cardsOnPage,
				onAddCard,
				onChangeCard,
				cardToAdd,
				onDeleteCardSelected,
				onSpeakAboutPokemon
			}}
		>
			{children}
		</CardsContext.Provider>
	)
}

export const useCardsContext = () => {
	const context = useContext(CardsContext)
	if (!context) {
		throw new Error('useCardContext error')
	}
	return context
}
