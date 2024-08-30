import type { ReactNode } from 'react'

type Props = {
	isOpen: boolean
	children: ReactNode
	onClose: () => void
}

export default function Dialog({ isOpen, children, onClose }: Props) {
	return isOpen ? (
		<dialog
			open={isOpen}
			className="fixed inset-0 flex items-center justify-center z-50 w-full h-full p-4 bg-transparent"
		>
			<div className="w-full h-full bg-slate-900 p-6 rounded-lg relative">
				<div
					className="absolute right-2 top-2 bg-black opacity-20 rounded-full w-6 h-6 cursor-pointer"
					onClick={onClose}
				>
					X
				</div>
				{children}
			</div>
		</dialog>
	) : null
}
