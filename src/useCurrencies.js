import { useState, useEffect } from "react"

export const useCurrencies = () => {
  const [currencyData, setCurrencyData] = useState({ state: "loading" })

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN")

        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const { date, rates } = await response.json()

        setCurrencyData({
          state: "success",
          rates,
          date
        })
      } catch (error) {
        setCurrencyData({
          state: "error",
        })
      }
    }

    setTimeout(fetchCurrencies, 1_000)
  }, [])


  return currencyData
}