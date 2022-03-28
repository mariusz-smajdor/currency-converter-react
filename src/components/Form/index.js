import { useState, useRef } from "react"

import { Wrapper, Title, Label, LabelText, Input, Button } from "./styled"
import { currencies } from "../../currencies"

const Form = props => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("EUR")

  const inputRef = useRef(null)

  const focusInput = input => input.current.focus()

  const formSubmitHandler = event => {
    event.preventDefault()

    const currencyInfo = currencies.find(curr => curr.short === currency)
    const rate = currencyInfo.rate

    if (!amount) {
      focusInput(inputRef)
      return
    }

    props.onCalculateResult(amount, currency, rate)

    setAmount("")
    focusInput(inputRef)
  }

  return (
    <Wrapper onSubmit={formSubmitHandler}>
      <Title>Przelicznik walut</Title>
      <Label>
        <LabelText>Chcę wymienić*:</LabelText>
        <Input
          ref={inputRef}
          placeholder="Kwota w PLN"
          type="number"
          step="0.01"
          required
          value={amount}
          onChange={event => setAmount(event.target.value)}
        />
      </Label>
      <Label>
        <LabelText>Chcę dostać:</LabelText>
        <Input as="select"
          value={currency}
          onChange={event => setCurrency(event.target.value)}
        >
          {currencies.map(currency => (
            <option key={currency.short} value={currency.short}>{currency.name}</option>
          ))}
        </Input>
      </Label>
      <Button>Przelicz!</Button>
    </Wrapper>
  )
}

export default Form