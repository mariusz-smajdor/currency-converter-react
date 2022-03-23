import { useState } from "react"

import Container from "./components/Container"
import Form from "./components/Form"
import Info from "./components/Info"

function App() {
  const [result, setResult] = useState()

  const calculateResultHandler = (amount, currency, rate) => {
    setResult({
      sourceAmount: amount,
      targetAmount: (amount / rate).toFixed(2),
      currency
    })

    console.log(amount, currency, rate, amount / rate)
  }

  return (
    <Container>
      <Form onCalculateResult={calculateResultHandler} />
      <Info result={result} />
    </Container>
  );
}

export default App;
