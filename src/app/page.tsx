'use client'
import Gallery from '@/components/Gallery'
import { SearchCard } from '@/components/SearchCard'
import { CardsContextProvider } from '@/utils/contexts/cards.context'

export default function App() {
	return (
		<CardsContextProvider>
			<main className="w-full h-screen flex">
				<SearchCard />
				<Gallery />
			</main>
		</CardsContextProvider>
	)
}
