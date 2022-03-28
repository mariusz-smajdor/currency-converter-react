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
        Kursy walut pochodzą ze strony nbp.pl z tabeli nr
        048/A/NBP/2022 z dnia 2022 03 10.
      </InfoPar>
      <InfoPar>
        Dzisiaj jest {" "}
        {currentDate}
      </InfoPar>
    </Wrapper>
  )
}

export default Info