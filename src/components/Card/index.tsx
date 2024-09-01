'use client'

type Props = {
	position: number
	onSelectCard: (cardNumber: number) => void
	imageURL: string
}

export default function Card({
	position,
	onSelectCard,
	imageURL
}: Props) {
	
	const numberPosition = position < 10 ? `0${position}` : position
	const selectCard = () => {
		onSelectCard(position)
	}

	return (
		<button
			onClick={selectCard}
			className="flex-shrink-0 w-[215px] h-[300px] bg-gray-400 rounded-lg cursor-pointer hover:scale-[1.15] shadow-lg transition-all ease-in p-2"
		>
			<div className="w-full h-full rounded-md flex justify-center items-center bg-gray-300 text-[#191A1C] font-black text-4xl">
				{/* <img src={imageURL} alt="" className="h-full" /> */}
				{ numberPosition }
			</div>
		</button>
	)
}
