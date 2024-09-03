export function SearchCard() {
	return (
		<section className="flex w-full flex-col p-4 gap-4 border-r-2 border-white">
			<header className="flex flex-row gap-x-4">
				<div>
					<div className="w-52 h-52 bg-gray-400 rounded-full" />
				</div>
				<div className="w-full flex gap-x-2 h-fit">
					<input className="w-full h-8 rounded-sm" name="search" />
					<input className="w-12 h-8 rounded-sm" name="selected-slot" />
				</div>
			</header>
      <div className="flex-1 rounded-md bg-gray-400">

      </div>
		</section>
	)
}
