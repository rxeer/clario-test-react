import React, { useCallback, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import passwordValidator from "password-validator";
import { useFormContext, useWatch } from "react-hook-form";

import InputField from "../input-field";

import { PasswordFieldText, PasswordCriteria } from "./styles";

const validationSchema = new passwordValidator();

validationSchema
  .is()
  .min(8)
  .is()
  .max(64)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(1)
  .has()
  .not()
  .spaces();

enum PasswordValidationSteps {
  MIN = "min",
  UPPERCASE = "uppercase",
  LOWERCASE = "lowercase",
  DIGITS = "digits",
  SPACES = "spaces",
}

interface Props {
  name: string;
}

const PasswordField: React.FC<Props> = ({ name }) => {
  const {
    control,
    setError,
    clearErrors,
    formState: { isSubmitted, submitCount },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [failedValidationSteps, setFailedValidationSteps] = useState<
    PasswordValidationSteps[]
  >([]);

  const value = useWatch({
    control,
    name,
    defaultValue: "",
  });

  const getValidationCriteriaStatus = useCallback(
    (
      steps: PasswordValidationSteps[],
    ): {
      $isValid: boolean;
      $isFailed: boolean;
    } => {
      const isValid = steps.every(
        (step) => !failedValidationSteps.includes(step),
      );
      return {
        $isValid: value?.length >= 0 && isValid,
        $isFailed: isSubmitted && !isValid,
      };
    },
    [failedValidationSteps, isSubmitted, value],
  );

  useEffect(() => {
    const validationResult = validationSchema.validate(value, {
      list: true,
    }) as PasswordValidationSteps[];
    setFailedValidationSteps(validationResult);

    if (validationResult.length) {
      setError(name, {
        type: "invisible",
        message: "Password is not valid",
      });
    } else {
      clearErrors(name);
    }
  }, [value, name, clearErrors, submitCount, setError]);

  const digitCriteriaStatus = getValidationCriteriaStatus([
    PasswordValidationSteps.DIGITS,
  ]);

  const caseCriteriaStatus = getValidationCriteriaStatus([
    PasswordValidationSteps.LOWERCASE,
    PasswordValidationSteps.UPPERCASE,
  ]);

  const lengthAndSpacesCriteriaStatus = getValidationCriteriaStatus([
    PasswordValidationSteps.MIN,
    PasswordValidationSteps.SPACES,
  ]);

  return (
    <>
      <InputField
        placeholder="Create your password"
        name={name}
        type={showPassword ? "text" : "password"}
        rightIcon={
          showPassword ? (
            <FaEye color="#151d51" size={20} />
          ) : (
            <FaEyeSlash color="#151d51" size={20} />
          )
        }
        maxLength={64}
        shouldValidate={false}
        onIconClick={() => setShowPassword(!showPassword)}
      />

      <PasswordCriteria>
        <PasswordFieldText {...lengthAndSpacesCriteriaStatus}>
          8 characters or more (no spaces)
        </PasswordFieldText>
        <PasswordFieldText {...caseCriteriaStatus}>
          Uppercase and lowercase letters
        </PasswordFieldText>
        <PasswordFieldText {...digitCriteriaStatus}>
          At least one digit
        </PasswordFieldText>
      </PasswordCriteria>
    </>
  );
};

export default PasswordField;
