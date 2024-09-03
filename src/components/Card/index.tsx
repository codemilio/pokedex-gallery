'use client'

type Props = {
	position: number
	onSelectCard: (cardNumber: number) => void
	imageURL: string
}

export default function Card({ position, onSelectCard, imageURL }: Props) {
	const numberPosition = position < 10 ? `0${position}` : position
	const selectCard = () => {
		onSelectCard(position)
	}

	return (
		<div className="flex justify-center">
			<button
				onClick={selectCard}
				className="max-w-[215px] aspect-[215/300] bg-gray-400 rounded-lg cursor-pointer hover:scale-[1.15] shadow-lg transition-all ease-in p-2"
				style={{ maxHeight: 'calc((100vh - 10rem) / 3)' }}
			>
				<div className="w-full h-full rounded-md flex justify-center items-center bg-gray-300 text-[#191A1C] font-black text-4xl">
					{/* <img src={imageURL} alt="" className="h-full" /> */}
					{numberPosition}
				</div>
			</button>
		</div>
	)
}
