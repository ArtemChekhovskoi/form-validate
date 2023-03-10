import { CommonValidationSettings } from "../../../types/common";

export const isLessThenMinLength = (
  value: string | undefined,
  settings: CommonValidationSettings
) => {
  if (value && value.length <= settings?.minLength!) {
    return true;
  } else return false;
};
