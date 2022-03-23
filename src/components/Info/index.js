import { useState, useEffect } from "react"
import "./style.css"

const formatDate = date => date.toLocaleString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
})

const Info = props => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(new Date())
    }, 1_000)

    return () => {
      clearInterval(dateInterval)
    }
  }, [])

  return (
    <section className="info">
      <p className="info__result">{props.result && `${props.result.sourceAmount} PLN = ${props.result.targetAmount} ${props.result.currency}`}</p>
      <p className="info__source">
        Kursy walut pochodzą ze strony nbp.pl z tabeli nr
        048/A/NBP/2022 z dnia 2022 03 10.
      </p>
      <p className="info__date">
        Dzisiaj jest {" "}
        {formatDate(date)}
      </p>
    </section>
  )
}

export default Info