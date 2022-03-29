import { Fragment, useState } from "react"

import { useCurrencies } from "./useCurrencies"
import Failure from "./UI/Failure/Failure"
import LoadingSpinner from "./UI/Spinner/LoadingSpinner"
import Container from "./components/Container"
import Form from "./components/Form"
import Info from "./components/Info"

function App() {
  const [result, setResult] = useState()
  const { rates, state, date } = useCurrencies()

  const calculateResultHandler = (amount, currency, rate) => {
    setResult({
      sourceAmount: amount,
      targetAmount: (amount * rate).toFixed(2),
      currency
    })
  }

  return (
    <Container>
      {state === "loading" && <LoadingSpinner />}
      {state === "error" && <Failure>ERROR!</Failure>}
      {state === "success" &&
        <Fragment>
          <Form onCalculateResult={calculateResultHandler} rates={rates} />
          <Info result={result} date={date} />
        </Fragment>
      }

    </Container>
  );
}

export default App;
