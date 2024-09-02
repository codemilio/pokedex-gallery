'use client'
import Gallery from '@/components/Gallery'
import { SearchCard } from '@/components/SearchCard'

export default function App() {
	return (
		<main className="w-full h-screen flex">
			<SearchCard />
			<Gallery />
		</main>
	)
}
