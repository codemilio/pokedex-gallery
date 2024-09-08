import { type CardType, useCardsContext } from '@/utils/contexts/cards.context'
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { type ChangeEvent, useState } from 'react'
import Card from '../Card'

export function SearchCard() {
	const { onAddCard, cardToAdd, changeCard } = useCardsContext()
	const [name, setName] = useState<string | undefined>(undefined)
	const [cards, setCards] = useState<CardType[] | null>(null)

	const getCards = async () => {
		const response = await PokemonTCG.findCardsByQueries({
			q: `name:${name}`,
			page: 1,
			pageSize: 9
		})
		setCards(
			response.map((card, index) => ({
				id: card.id,
				name: card.name,
				imageUrl: card.images.small,
				position: index
			}))
		)
	}

	const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	const isSelectedCard = (index: number) => {
		if (!cardToAdd) return false
		return cardToAdd.position === index 
	}

	return (
		<section className="flex w-full flex-col p-4 gap-4 border-r-2 border-white">
			<header className="flex flex-row gap-x-4">
				<div>
					<div className="w-52 h-52 bg-gray-400 rounded-full" />
				</div>

				<aside className="w-full flex flex-col gap-y-2">
					<div className="w-full flex gap-x-2 h-fit">
						<input
							className="w-full h-8 rounded-sm"
							name="search"
							onChange={handleChangeName}
						/>
						<input className="w-12 h-8 rounded-sm" name="selected-slot" />
					</div>
					<button type="button" className="bg-yellow-300" onClick={getCards}>
						Pesquisar
					</button>
					<button type="button" className="bg-yellow-300" onClick={changeCard}>
						trocar
					</button>
				</aside>
			</header>

			<div className="flex-1 flex flex-wrap w-full rounded-md bg-gray-400">
				{cards?.length &&
					cards.map((card, index) => <Card cardData={card} key={card.id} onSelectCard={onAddCard} isSelected={isSelectedCard(index)}/>)}
			</div>

			<div className="flex w-full justify-between">
				<button type="button" className="bg-y''ellow-300">
					Página anterior
				</button>
				<button type="button" className="bg-yellow-300">
					2
				</button>
				<button type="button" className="bg-yellow-300">
					Próxima página
				</button>
			</div>
		</section>
	)
}
