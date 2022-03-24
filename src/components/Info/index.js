import { useCurrentDate } from "./useCurrentDate"
import "./style.css"

const Info = props => {
  const currentDate = useCurrentDate()

  return (
    <section className="info">
      <p className="info__result">
        {props.result && `${props.result.sourceAmount} PLN = ${props.result.targetAmount} ${props.result.currency}`}
      </p>
      <p className="info__source">
        Kursy walut pochodzą ze strony nbp.pl z tabeli nr
        048/A/NBP/2022 z dnia 2022 03 10.
      </p>
      <p className="info__date">
        Dzisiaj jest {" "}
        {currentDate}
      </p>
    </section>
  )
}

export default Info