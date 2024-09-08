'use client'
import type { CardType } from '@/utils/contexts/cards.context'
import clsx from 'clsx'

type Props = {
	cardData: CardType
	onSelectCard: (card: CardType) => void
	isSelected?: boolean
}

export default function Card({
	cardData,
	onSelectCard,
	isSelected = false
}: Props) {

	const selectCard = () => {
		onSelectCard(cardData)
	}


	return (
		<div className="flex justify-center">
			<button
				type="button"
				onClick={selectCard}
				className={clsx(
					'border max-w-[215px] aspect-[215/300] bg-gray-400 rounded-lg cursor-pointer hover:scale-[1.15] shadow-lg transition-all ease-in p-2',
					{
						'border-8 border-black': isSelected
					}
				)}
				style={{ maxHeight: 'calc((100vh - 10rem) / 3)' }}
			>
				<div className="w-full h-full rounded-md flex justify-center items-center bg-gray-300 text-[#191A1C] font-black text-4xl">
					<img src={cardData.imageUrl} alt="" className="h-full" />
				</div>
			</button>
		</div>
	)
}
