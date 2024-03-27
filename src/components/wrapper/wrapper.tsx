import styled from "styled-components"
import { Form } from "../form/form"

const WrapperContainer = styled.div`
  background-color: #353535;
  min-width: 100vw;
  min-height: 100vh;
  font-weight: 600;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Wrapper = () => {
  return (
    <WrapperContainer>
      <Form />
    </WrapperContainer>
  )
}
