import { CommonValidationSettings } from "./types/common";
declare class Validate {
    common(value: string | undefined, settings: CommonValidationSettings): {
        errors: string[] | null;
    };
    email(): void;
    password(): void;
}
declare const validate: Validate;
export default validate;
