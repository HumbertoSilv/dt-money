import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number,
  description: string,
  type: "income" | "outcome",
  category: string,
  price: number,
  createdAt: string,
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionsContextProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({ children }: TransactionsContextProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransactions = async () => {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactions(data)

  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}