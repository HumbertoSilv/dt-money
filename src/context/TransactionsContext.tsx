import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number,
  description: string,
  type: "income" | "outcome",
  category: string,
  price: number,
  createdAt: string,
}

type CreateTransactionInput = Omit<Transaction, "id" | "createdAt">

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => void
  createTransaction: (data: CreateTransactionInput) => void
}

interface TransactionsContextProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({ children }: TransactionsContextProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query
      }
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(async ({description, category, price, type}: CreateTransactionInput) => {
    const response = await api.post("transactions", {
      description,
      category,
      price,
      type,
      createdAt: new Date()
    })

    setTransactions((state) => [response.data, ...state])
  }, []) 

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}