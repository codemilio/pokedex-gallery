import { type ReactNode, createContext, useContext, useState } from 'react'

export type CardType = {
	id: string
	name: string
	imageUrl: string
	position: number
}

interface CardContextProps {
	cardsOnPage: CardType[] 
	selectedCard: CardType | null 
	onSetSelectedCard: (card: CardType) => void
}


const CardsContext = createContext<CardContextProps | undefined>(undefined)

const InitialDeckState: CardType[] = [
	{
		id: '00001',
		imageUrl: '',
		name: 'void',
		position: 1,
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
	},
]

export const CardsContextProvider = ({ children }: { children: ReactNode }) => {
	const [selectedCard, setSelectedCard] = useState<CardType | null>(null)
	const [cardsOnPage, setCardsOnPage] = useState<CardType[]>(InitialDeckState)

	const onSetSelectedCard = (card: CardType) => {
		setSelectedCard(card)
	}

	return (
		<CardsContext.Provider value={{ selectedCard, onSetSelectedCard, cardsOnPage }}>
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
