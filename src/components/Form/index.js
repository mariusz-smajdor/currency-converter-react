import { useState, useRef } from "react"

import { Wrapper, Title, Label, LabelText, Input, Button } from "./styled"

const Form = props => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState(Object.keys(props.rates)[0])

  const inputRef = useRef(null)

  const focusInput = input => input.current.focus()

  const formSubmitHandler = event => {
    event.preventDefault()

    const rate = props.rates[currency]

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
          {Object.keys(props.rates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </Input>
      </Label>
      <Button>Przelicz!</Button>
    </Wrapper>
  )
}

export default Form