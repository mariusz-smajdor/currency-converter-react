import { Error } from "./styled.js"

const Failure = props => <strong><Error>{props.children}</Error></strong>

export default Failure