import {
  CommonValidationSettings,
} from "./types/common";
import { validateString } from "./validationMethods/common";

const validate = (value: string | undefined,
    settings: CommonValidationSettings) : { errors: string[] | null } => {

    return validateString(value, settings);
}

export default validate;
