import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { Button, InputField, PasswordField } from "../../ui";

import { FormTitle, Form, FormWrapper } from "./styles";

const SignUpForm: React.FC = () => {
  const [isLoading, toggleLoading] = useState(false);

  const form = useForm({
    mode: "onSubmit",
  });
  const { handleSubmit, formState } = form;
  const isValid = !Object.keys(formState.errors).length;

  const onSubmit = () => {
    if (isValid) {
      toggleLoading(true);
      setTimeout(() => {
        alert("Validation passed");
        toggleLoading(false);
      }, 1000);
    }
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <FormTitle>Sign Up</FormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputField type="email" name="email" placeholder="Email" />

          <PasswordField name="password" />
          <Button loading={isLoading} type="submit" title="Sign Up" />
        </Form>
      </FormProvider>
    </FormWrapper>
  );
};

export default SignUpForm;
