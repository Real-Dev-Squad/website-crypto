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
  background-color: #ee1a75;
  border: none;
  color: white;
  &:hover {
    /* background-color: white;
    border: 1px solid #4285f4;
    color: #4285f4;
    transform: translate(0, -10%);
    transition: all 0.2s; */
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
