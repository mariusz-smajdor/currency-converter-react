import { useState } from "react"

import { currencies } from "../../currencies"
import "./style.css"

const Form = props => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("EUR")

  const formSubmitHandler = event => {
    event.preventDefault()

    const currencyInfo = currencies.find(curr => curr.short === currency)
    const rate = currencyInfo.rate

    props.onCalculateResult(amount, currency, rate)
  }

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <h1 className="form__header">Przelicznik walut</h1>
      <label className="form__label">
        <span className="form__field-text">Chcę wymienić*:</span>
        <input
          className="form__field"
          placeholder="Kwota w PLN"
          type="number"
          step="0.01"
          required
          value={amount}
          onChange={event => setAmount(event.target.value)}
        />
      </label>
      <label className="form__label">
        <span className="form__field-text">Chcę dostać:</span>
        <select
          className="form__field"
          value={currency}
          onChange={event => setCurrency(event.target.value)}
        >
          {currencies.map(currency => (
            <option key={currency.short} value={currency.short}>{currency.name}</option>
          ))}
        </select>
      </label>
      <button className="form__button" type="submit">Przelicz!</button>
    </form>
  )
}

export default Form