import { useState, useRef, Fragment } from "react"

import { useCurrencies } from "../../useCurrencies"
import Failure from "../../UI/Failure/Failure"
import LoadingSpinner from "../../UI/Spinner/LoadingSpinner"
import Info from "./Info"
import { Wrapper, Title, Label, LabelText, Input, Button } from "./styled"

const Form = () => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("AED")
  const [result, setResult] = useState()

  const inputRef = useRef(null)

  const { rates, state, date } = useCurrencies()

  const calculateResultHandler = (amount, currency, rate) => {
    setResult({
      sourceAmount: amount,
      targetAmount: (amount * rate).toFixed(2),
      currency
    })
  }

  const focusInput = input => input.current.focus()

  const formSubmitHandler = event => {
    event.preventDefault()

    const rate = rates[currency]

    if (!amount) {
      focusInput(inputRef)
      return
    }

    calculateResultHandler(amount, currency, rate)

    setAmount("")
    focusInput(inputRef)
  }

  return (
    <Wrapper onSubmit={formSubmitHandler}>
      <Title>Przelicznik walut</Title>
      {state === "loading" && <LoadingSpinner />}
      {state === "error" && <Failure>
        Coś poszło nie tak! 💥 Sprawdź, czy masz połączenie z internetem. <br />
        Jeśli masz... to wygląda na to, że to nasza wina. Może spróbuj później? 🙂
      </Failure>}
      {state === "success" && <Fragment>
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
            {Object.keys(rates).map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </Input>
        </Label>
        <Button>Przelicz!</Button>
        <Info result={result} date={date} />
      </Fragment>}
    </Wrapper>
  )
}

export default Form