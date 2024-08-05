import React, { useEffect, useCallback } from "react";
import { useFormContext } from "react-hook-form";

import getFormValidationOptions from "../../../utils/getFormValidationOptions";

import {
  Wrapper,
  RightIconWrapper,
  Input,
  InputWrapper,
  ErrorMessage,
} from "./styles";

interface Props {
  name: string;
  type?: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  shouldValidate?: boolean;
  rightIcon?: React.ReactNode;
  onIconClick?: () => void;
}

const InputField: React.FC<Props> = ({
  placeholder,
  name,
  disabled,
  maxLength,
  required = true,
  shouldValidate = true,
  type = "text",
  rightIcon,
  onIconClick,
}) => {
  const {
    register,
    setValue,
    formState: { errors, isDirty, isSubmitted },
  } = useFormContext();

  useEffect(() => {
    register(name, {
      ...getFormValidationOptions({ type, required }),
      value: "",
    });
  }, [name, register, required, type]);

  const handleInputChange = useCallback(
    (nextValue: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(name, nextValue.target.value, {
        shouldValidate: shouldValidate && isSubmitted,
      });
    },
    [name, setValue, shouldValidate, isSubmitted],
  );

  const hasError = !!errors?.[name];

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type={type}
          name={name}
          id={name}
          disabled={disabled}
          maxLength={maxLength}
          $rightGap={!!rightIcon}
          $error={isSubmitted && hasError}
          $success={!hasError && isDirty && isSubmitted}
          placeholder={placeholder}
          aria-invalid={hasError}
          onChange={handleInputChange}
          aria-describedby={hasError ? `${name}-error` : undefined}
        />

        {rightIcon && (
          <RightIconWrapper onClick={onIconClick}>{rightIcon}</RightIconWrapper>
        )}
      </InputWrapper>
      {errors?.[name]?.type !== "invisible" && errors?.[name]?.message && (
        <ErrorMessage id={`${name}-error`}>
          {errors?.[name]?.message?.toString()}
        </ErrorMessage>
      )}
    </Wrapper>
  );
};

export default InputField;
