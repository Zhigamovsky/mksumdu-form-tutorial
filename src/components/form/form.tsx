import { useState } from "react"
import { 
  Divider, 
  FormContainer, 
  Input, 
  Label, 
  ResetButton, 
  Title, 
  TitleContainer, 
  ValidateButton, 
  Error, 
  MultilineInput, 
  CheckboxLabel, 
  CheckboxInput, 
  ButtonContainer, 
  Button 
} from "./form.styled";

interface IErrors {
  id?: string,
  comment?: string,
}

export const Form = () => {
  const [id, setID] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [isUserAgree, setIsUserAgree] = useState<boolean>(false);

  const [errors, setErrors] = useState<IErrors>({})

  const handleValidate = () => {
    const localErrors = validate()

    setErrors(localErrors);
  }

  const handleChangeIsUserAgree = () => {
    setIsUserAgree(!isUserAgree);
  }

  const handleFocus = (field: keyof IErrors) => () => {
    setErrors(prevErrors => {
      const nextErrors = {...prevErrors}
      delete nextErrors[field]

      return nextErrors
    })
  }

  const validate = () => {
    let localErrors: IErrors = {}

    if (!id.trim().length) {
      localErrors.id = `Поле "Ідентифікатор товару" обов'язкове`
    } 

    const idNumber = Number(id.trim());
    if (isNaN(idNumber)) {
      localErrors.id = `Ідентифікатор може бути тільки числом`
    }

    if (!comment.trim().length) {
      localErrors.comment = `Поле "Коментар" обов'язкове`
    }

    if (comment.trim().length > 20) {
      localErrors.comment = `Максимум 20 символів`
    }

    return localErrors
  }
  
  const handleSend = () => {
    console.log()

    const localErrors = validate()

    const hasErrors = Object.values(localErrors).length

    if(hasErrors) {
      console.log(localErrors)
      setErrors(localErrors)
    }
    else {
      window.alert(`
        Форма успішно відправлена!

        ID товару -> ${id}
        Відгук -> ${comment}
      `);
      resetForm()
    }
  }

  const resetForm = () => {
    setID('')
    setComment('')
    setIsUserAgree(false)
    setErrors({})
  }

  return (
    <FormContainer>
      <TitleContainer>
        <ValidateButton onClick={handleValidate}>📝</ValidateButton>
        <Title>Відгук</Title>
        <ResetButton onClick={resetForm}>⟳</ResetButton>
      </TitleContainer>

      <Divider />

      <Label>Ідентифікатор товару</Label>
      <Input
        placeholder="Введіть ID товару (число)"
        value={id}
        onChange={event => setID(event.target.value)}
        hasErrors={!!errors.id}
        onFocus={handleFocus('id')}
      />
      {errors.id && <Error>{errors.id}</Error>}

      <Divider />

      <Label>Коментар</Label>
      <MultilineInput
        placeholder="Введіть текст відгуку"
        value={comment}
        onChange={event => setComment(event.target.value)}
        hasErrors={!!errors.comment}
        onFocus={handleFocus('comment')}
      />
      {errors.comment && <Error>{errors.comment}</Error>}

      <Divider />

      <CheckboxLabel>
        <CheckboxInput 
          type="checkbox" 
          checked={isUserAgree}
          onChange={handleChangeIsUserAgree}
        />
        Я погоджують на публікацію імені на сторінці
      </CheckboxLabel>

      <Divider />

      <ButtonContainer>
        <Button 
          onClick={handleSend}
          disabled={!isUserAgree}
        >
          Відправити
        </Button>
      </ButtonContainer>
    </FormContainer>
  )
}
