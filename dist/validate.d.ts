import { CommonValidationSettings } from "./types/common";
declare const validate: (value: string | undefined, settings: CommonValidationSettings) => {
    errors: string[] | null;
};
export default validate;
