import { CommonValidationSettings } from "../../types/common";

export const commonErrorMessages = () => {
  const maxLength = (value: number): string => {
    return `The maximum length must be less then ${value}`;
  };
  const minLength = (value: number): string => {
    return `The minimum length must be more then ${value}`;
  };
  const required = (): string => {
    return "This field is require";
  };

  const lettersOnly = (): string => {
    return "This field must contain only letters";
  };

  const numbersOnly = (): string => {
    return "This field must contain only numbers";
  };

  const lettersAndNumbersOnly = (): string => {
    return "This field must contain letters and numbers only";
  };

  const containSpecialCharacters = () : string => {
    return 'This field must contain special characters'
  }

  return {
    maxLength,
    minLength,
    required,
    lettersOnly,
    numbersOnly,
    lettersAndNumbersOnly,
    containSpecialCharacters
  };
};
