import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import { Controller, useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"])
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const { control, register, reset, handleSubmit, formState: { isSubmitting } } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  const handleCreateNewTransaction = async (data: NewTransactionFormInputs) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")} />
          <input
            type="text"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })} />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")} />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={
                    (value: NewTransactionFormInputs["type"]) => field.onChange(value)
                  }
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}