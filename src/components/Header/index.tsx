import * as Dialog from "@radix-ui/react-dialog"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import { NewTransactionModal } from "../NewTransactionModal"
import Logo from "../../assets/logo.svg"

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}