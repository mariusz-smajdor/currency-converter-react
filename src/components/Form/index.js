import "./style.css"

const Form = () => {
  return (
    <form className="form">
      <h1 className="form__header">Przelicznik walut</h1>
      <label className="form__label">
        <span className="form__field-text"> Chcę wymienić*:</span>
        <input
          className="form__field"
          placeholder="Kwota w PLN"
          type="number"
          step="0.01"
          required
        />
      </label>
      <label className="form__label">
        <span className="form__field-text">Chcę dostać:</span>
        <select className="form__field">
          <option value="EUR">Euro</option>
          <option value="USD">Dolar amerykański</option>
          <option value="GBP">Funt brytyjski</option>
        </select>
      </label>
      <button className="form__button" type="submit">Przelicz!</button>
    </form>
  )
}

export default Form