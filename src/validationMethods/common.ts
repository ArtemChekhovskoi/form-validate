import { validationErrors } from "../heplers/validationErrors/index";
import {
  CommonValidationParametersArray,
  CommonValidationSettings,
} from "../types/common";

export const validateCommonString = (
  value: string | undefined,
  settings: CommonValidationSettings
): { errors: string[] | null } => {
  const errorsMessages: string[] = [];
  const validationParameters = Object.keys(
    settings
  ) as CommonValidationParametersArray;
  validationParameters.forEach((parameter) => {
    switch (parameter) {
      case "maxLength":
        value &&
          value.length > settings?.maxLength! &&
          errorsMessages.push(
            validationErrors.common.maxLength(settings?.maxLength!)
          );
        break;
      case "minLength":
        value &&
          value.length < settings?.minLength! &&
          errorsMessages.push(
            validationErrors.common.minLength(settings?.minLength!)
          );
        break;
      case "required":
        !value && errorsMessages.push(validationErrors.common.required());
        break;
      case "lettersOnly":
        value &&
          !/^[A-Za-z\s]*$/.test(value) &&
          errorsMessages.push(validationErrors.common.lettersOnly());
        break;
      case "numbersOnly":
        value &&
          /^\d\s+$/.test(value) &&
          errorsMessages.push(validationErrors.common.numbersOnly());
        break;
      case "lettersAndNumbersOnly":
        value &&
          /^[A-Za-z0-9]\s*$/.test(value) &&
          errorsMessages.push(validationErrors.common.lettersAndNumbersOnly());
        break;
      case "containSpecialCharacters":
        value &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]\s/.test(value) &&
          errorsMessages.push(
            validationErrors.common.containSpecialCharacters()
          );
        break;
      default:
        return { errors: null };
    }
  });
  if (errorsMessages[0]) {
    return { errors: errorsMessages };
  } else {
    return { errors: null };
  }
};
