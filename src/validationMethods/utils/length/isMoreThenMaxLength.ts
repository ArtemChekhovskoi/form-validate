import { CommonValidationSettings } from "../../../types/common";

export const isMoreThenMaxLength = (
  value: string | undefined,
  settings: CommonValidationSettings
) => {
  if (value && value.length >= settings?.maxLength!) {
    return true;
  } else return false;
};
