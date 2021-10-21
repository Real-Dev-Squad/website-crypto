import styled, { css } from 'styled-components';

const InvertedButtonStles = css`
  background-color: white;
  border: none;
  color: black;
  &:hover {
    background-color: black;
    color: white;
    @media screen and (max-width: 800px) {
      transition: unset;
      background-color: white;
      color: black;
      transform: unset;
    }
  }
`;

const primaryStyle = css`
  -webkit-transition: background 0.2s; /* For Safari 3.0 to 6.0 */
  background-color: var(--colorButtonPink); /* For modern browsers */
  border: 1px solid var(--colorButtonBorder);
  color: white;
  transition: background 0.2s;
  &:hover {
    background: var(--colorBackgroundLight);
    border: 1px solid var(--colorButtonPink);
    color: var(--colorButtonPink);
  }
`;
const BaseButtonStyles = css`
  background-color: black;
  border: 1px solid black;
  color: white;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transform: translate(0, -10%);
    transition: all 0.2s;
  }
`;
const selectButton = (props) => {
  if (props.buttonPrimary) {
    return primaryStyle;
  }

  return props.inverted ? InvertedButtonStles : BaseButtonStyles;
};
// console.log(selectButton(props));
export const CustomButtonContainer = styled.button`
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 165px;
  padding: 0 35px 0 35px;
  width: auto;
  ${selectButton}
  @media screen and (max-width: 800px) {
    min-width: 70%;
  }
`;
