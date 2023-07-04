import { useContext, useMemo } from "react"
import { TransactionsContext } from "../context/TransactionsContext"

interface IUseSummary {
  income: number,
  outcome: number,
  total: number
}

export const useSummary = (): IUseSummary => {
  const { transactions } = useContext(TransactionsContext)

  const summary = useMemo(() => { // useMemo: mesmo se o compon. renderizar novamente, a variavel não vai ser calculada novamente
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
  
      return acc
    }, {
      income: 0,
      outcome: 0,
      total: 0
    })
  }, [transactions])

  return summary
}