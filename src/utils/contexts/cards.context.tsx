import { type ReactNode, createContext, useContext, useState } from 'react'

interface MyContextType {
	value: string
	setValue: (newValue: string) => void
}

const CardsContext = createContext<MyContextType | undefined>(undefined)

export const CardsContextProvider = ({ children }: { children: ReactNode }) => {
	const [value, setValue] = useState<string>('valor inicial')

	return (
		<CardsContext.Provider value={{ value, setValue }}>
			{children}
		</CardsContext.Provider>
	)
}

export const useCardsContext = () => {
	const context = useContext(CardsContext)
	if (!context) {
		throw new Error('useCardContext error')
	}
	return context
}
