import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1.6rem;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const Input = styled.input<{
  $error: boolean;
  $success?: boolean;
  $rightGap: boolean;
}>`
  background: #fff;
  border: 2px solid #ccced8;
  border-radius: 2rem;
  padding: 1.4rem 1.6rem;
  font-size: 1.6rem;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: #5b6185;
    font-weight: 400;
    font-size: 1.6rem;
  }

  &[disabled] {
    cursor: not-allowed;
    background: #e8e8ed;
    border-color: #bebfce;
  }

  &:focus {
    outline: none;
    border-color: #151d51;
  }

  ${({ $error }) =>
    $error &&
    `
    border-color: #ed5f59;
    background: #feeeee;
  `}

  ${({ $success }) =>
    $success &&
    `
    border-color: #80dfce;
    background: #effbf9;
  `}
  
  ${({ $rightGap }) =>
    $rightGap &&
    `
    padding-right: 5rem;
  `}
`;

export const ErrorMessage = styled.span`
  font-size: 1.4rem;
  color: #ed5f59;
  margin-top: 1rem;
  padding-left: 1rem;
`;

export const RightIconWrapper = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
