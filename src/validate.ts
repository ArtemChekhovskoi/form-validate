import {
  CommonValidationSettings,
} from "./types/common";
import { validateCommonString } from "./validationMethods/common";

class Validate {
  common(
    value: string | undefined,
    settings: CommonValidationSettings
  ): { errors: string[] | null } {
    return validateCommonString(value, settings);
  }
  email() {}

  password() {}
}

const validate = new Validate();

export default validate;
