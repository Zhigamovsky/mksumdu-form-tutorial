import styled from "styled-components"

export const FormContainer = styled.div`
  width: 500px;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 25px;
  
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const Title = styled.div`
  width: 100%;
  font-size: 30px;
  text-align: center;
`

export const Label = styled.div`
  width: 100%;
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 20px;
`

export const Input = styled.input<{hasErrors: boolean}>`
  width: 100%;
  border-radius: 5px;
  background-color: #d9eafc;
  border-color: transparent;
  height: 35px;
  padding: 5px;
  padding-left: 10px;

  color: black;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;

  transition: 0.3s;

  &:focus {
    outline: none;
    background-color: #cce5ff
  }

  &::placeholder {
    color: #999;
  }

  ${(props) => props.hasErrors && `
    border-width: 1px;
    border-color: red;
  `}
`

export const Divider = styled.div`
  height: 20px;
`

export const MultilineInput = styled.textarea<{hasErrors: boolean}>`
  width: 100%;
  border-radius: 5px;
  background-color: #d9eafc;
  border-color: transparent;
  height: 35px;
  padding: 5px;
  padding-left: 10px;

  color: black;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -.5px;

  resize: none;
  min-height: 200px;
  /* max-height: 200px; */

  transition: 0.3s;

  &:focus {
    outline: none;
    background-color: #cce5ff
  }

  &::placeholder {
    color: #999;
  }

  ${(props) => props.hasErrors && `
    border-color: red;
  `}
`

export const CheckboxLabel = styled.label`
  margin-left: 10px;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`

export const CheckboxInput = styled.input`
  cursor: pointer;
  margin-right: 10px;
  height: 20px;
  width: 20px;
`

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 15px;
  background-color: #627cff;

  color: white;
  font-size: 20px;

  border: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #7c92ff;
  }

  &:active {
    background-color: #516eff;
  }

  ${(props) => props.disabled && `
    background-color: grey !important;
    font-size: 16px;
  `}
`

export const Error = styled.div`
  width: 100%;
  color: #f00000;
  font-size: 15px;
  margin-top: 5px;
  margin-left: 10px;
`

export const ValidateButton = styled.div`
  padding-left: 10px;
  font-size: 25px;

  cursor: pointer;
  transition: 0.3s;

  height: 40px;
  width: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    font-size: 20px;
  }
`

export const ResetButton = styled.div`
  font-size: 40px;
  color: #00aeff;

  cursor: pointer;
  transition: 0.3s;

  height: 40px;
  width: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    font-size: 35px;
  }
`
