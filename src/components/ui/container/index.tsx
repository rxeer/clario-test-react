import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  center?: boolean;
}

const Wrapper = styled.div<{ $center?: boolean }>`
  background: #f1f7fe;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  ${({ $center }) =>
    $center &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const Container: React.FC<PropsWithChildren<Props>> = ({
  children,
  center,
}) => {
  return <Wrapper $center={center}>{children}</Wrapper>;
};

export default Container;
