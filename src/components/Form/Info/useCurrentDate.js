import { useState, useEffect } from "react"

const formatDate = date => date.toLocaleString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
})

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(new Date())
    }, 1_000)

    return () => {
      clearInterval(dateInterval)
    }
  }, [])

  return formatDate(date)
}