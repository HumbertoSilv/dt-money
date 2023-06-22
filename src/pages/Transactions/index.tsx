import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles"

export const Transactions = () => {
  return (
    <div>
      <Header/>
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 12.000,00
                </PriceHighLight>
                </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Galpões</td>
              <td>
                <PriceHighLight variant="outcome">
                  R$ -59,00
                </PriceHighLight>
              </td>  
              <td>Fundos</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}