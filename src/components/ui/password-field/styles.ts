import styled from "styled-components";

export const PasswordFieldText = styled.div<{
  $isValid?: boolean;
  $isFailed?: boolean;
}>`
  font-size: 1.4rem;
  padding-left: 2rem;
  line-height: 2.5rem;

  ${({ $isValid }) =>
    $isValid &&
    `
    color: #009796;
  `}

  ${({ $isFailed }) =>
    $isFailed &&
    `
    color: #ed5f59;
  `}
`;

export const PasswordCriteria = styled.div`
  margin-bottom: 1.6rem;
`;
