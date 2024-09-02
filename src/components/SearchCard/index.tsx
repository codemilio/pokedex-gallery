export function SearchCard() {
	return (
		<section className="flex flex-col p-4 gap-x-4 border-r-2 border-white">
			<header className="flex flex-row p-4 gap-x-4">
				<div>
					<div className="w-52 h-52 bg-gray-400 rounded-full" />
				</div>
				<div className="flex gap-x-2 h-fit">
					<input className="h-8 rounded-sm" name="search" />
					<input className="h-8 rounded-sm" name="selected-slot" />
				</div>
			</header>
		</section>
	)
}
