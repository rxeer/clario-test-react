import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: ${spin} 1s linear infinite;
`;

export const ButtonWrapper = styled.button`
  background: #007aff;
  border: none;
  color: #fff;
  padding: 1.4rem 1.6rem;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 2rem;
  min-width: 120px;
  width: 100%;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  background-image: linear-gradient(to right, #70c3ff 0%, #4d67ff 100%);
  background-size: 200% auto;

  &:hover {
    background-position: right center;
  }
`;
