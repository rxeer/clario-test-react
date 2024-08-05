import { RegisterOptions } from "react-hook-form";
import { EMAIL_REGEX } from "../constants/validation";

interface IProps {
  type?: string;
  required: boolean;
}

const getFormValidationOptions = ({
  type,
  required,
}: IProps): RegisterOptions => {
  const optionsObject: RegisterOptions = {
    required,
  };

  if (type === "email") {
    optionsObject.required = "Enter a valid email address";
    optionsObject.pattern = {
      value: EMAIL_REGEX,
      message: "Enter a valid email address",
    };
  }

  return optionsObject;
};

export default getFormValidationOptions;
