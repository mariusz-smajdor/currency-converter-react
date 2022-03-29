import { useCurrentDate } from "./useCurrentDate"
import { Wrapper, InfoPar } from "./styled"

const Info = props => {
  const currentDate = useCurrentDate()

  return (
    <Wrapper>
      <InfoPar styledResult>
        {props.result && `${props.result.sourceAmount} PLN = ${props.result.targetAmount} ${props.result.currency}`}
      </InfoPar>
      <InfoPar>
        Kursy walut pobierane są z Europejskiego Banku Centralnego. Aktualne na dzień: {props.date}
      </InfoPar>
      <InfoPar>
        Dzisiaj jest {" "}
        {currentDate}
      </InfoPar>
    </Wrapper>
  )
}

export default Info