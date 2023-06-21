import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import Logo from "../../assets/logo.svg"

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}