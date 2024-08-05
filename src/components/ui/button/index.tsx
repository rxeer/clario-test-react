import React from "react";

import { ButtonWrapper, Spinner } from "./styles";

interface Props {
  title: string;
  onClick?: () => void;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<Props> = ({
  title,
  onClick,
  loading,
  type = "button",
}) => {
  return (
    <ButtonWrapper type={type} onClick={onClick}>
      {loading ? <Spinner /> : title}
    </ButtonWrapper>
  );
};

export default Button;
