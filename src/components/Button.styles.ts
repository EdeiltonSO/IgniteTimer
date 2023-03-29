import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'rgb(168, 0, 246)',
  secondary: 'rgb(255, 173, 74)',
  success: 'rgb(69, 185, 69)',
  danger: 'rgb(255, 115, 115)',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};
  border-radius: 5px;
  border: none;
  margin: 10px 0px 0px 10px;

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
