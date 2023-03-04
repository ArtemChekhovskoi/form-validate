import { validationErrors } from "../heplers/validationErrors/index";
import {
  CommonValidationParametersArray,
  CommonValidationSettings,
} from "../types/common";
import { isNotBothCases } from "./utils/case/isNotBothCases";
import { isNotOnlyLowerCase } from "./utils/case/isNotOnlyLowercase";
import { isNotOnlyUppercase } from "./utils/case/isNotOnlyUppercase";
import { isLessThenMinLength } from "./utils/length/isLessThenMinLength";
import { isMoreThenMaxLength } from "./utils/length/isMoreThenMaxLength";
import { isNotContainSpecialCharacters } from "./utils/lettersAndNumbers/isNotContainSpecialCharacters";
import { isNotLettersAndNumbersOnly } from "./utils/lettersAndNumbers/isNotLettersAndNumbersOnly";
import { isNotLettersOnly } from "./utils/lettersAndNumbers/isNotLettersOnly";
import { isNotNumbersOnly } from "./utils/lettersAndNumbers/isNotNumbersOnly";

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
        isMoreThenMaxLength(value, settings) &&
          errorsMessages.push(
            validationErrors.common.maxLength(settings?.maxLength!)
          );
        break;
      case "minLength":
        isLessThenMinLength(value, settings) &&
          errorsMessages.push(
            validationErrors.common.minLength(settings?.minLength!)
          );
        break;
      case "required":
        !value && errorsMessages.push(validationErrors.common.required());
        break;
      case "lettersOnly":
        isNotLettersOnly(value) &&
          errorsMessages.push(validationErrors.common.lettersOnly());
        break;
      case "numbersOnly":
        isNotNumbersOnly(value) &&
          errorsMessages.push(validationErrors.common.numbersOnly());
        break;
      case "lettersAndNumbersOnly":
        isNotLettersAndNumbersOnly(value) &&
          errorsMessages.push(validationErrors.common.lettersAndNumbersOnly());
        break;
      case "containSpecialCharacters":
        isNotContainSpecialCharacters(value) &&
          errorsMessages.push(
            validationErrors.common.containSpecialCharacters()
          );
        break;
      case "case":
        if (settings.case === "upper") {
          isNotOnlyUppercase(value) &&
            errorsMessages.push(validationErrors.common.upperCase());
          break;
        }
        if (settings.case === "lower") {
          isNotOnlyLowerCase(value) &&
            errorsMessages.push(validationErrors.common.lowerCase());
          break;
        }
        if (settings.case === "both required") {
          isNotBothCases(value) &&
            errorsMessages.push(validationErrors.common.bothCasesRequired());
        }
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
