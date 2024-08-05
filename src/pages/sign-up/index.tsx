import React from "react";
import { Container } from "../../components/ui";
import { SignUpForm } from "../../components/sign-up";

const SignUpPage: React.FC = () => {
  return (
    <Container center>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
