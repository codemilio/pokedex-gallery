"use client";
import type { Dispatch, SetStateAction } from "react";

type Props = {
	position: number;
	onSelectNumber: Dispatch<SetStateAction<number | undefined>>;
	handleClick: () => void;
	imageURL: string;
};

export default function Card({
	position,
	onSelectNumber,
	handleClick,
	imageURL,
}: Props) {
	const numberPosition = position < 10 ? `0${position}` : position;

	const openModal = () => {
		onSelectNumber(position);
		handleClick();
	};

	return (
		<button
			onClick={openModal}
			className="select-none flex-shrink-0 w-[215px] h-[300px] bg-gray-400 rounded-lg cursor-pointer hover:scale-[1.15] shadow-lg transition-all ease-in p-2"
		>
			<div className="w-full h-full rounded-md flex justify-center items-center bg-gray-300 text-[#191A1C] font-black text-4xl">
				<img src={imageURL} alt="" className="h-full" />
			</div>
		</button>
	);
}
