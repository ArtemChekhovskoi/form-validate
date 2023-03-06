import { validationErrors } from "../heplers/validationErrors/index";
import { CommonValidationSettings } from "../types/common";
import validate from "../validate";

describe("Common validatation", () => {
  describe("max length validation", () => {
    const maxLengthSettings: CommonValidationSettings = { maxLength: 5 };
    it("return error if string is more then max length", () => {
      const { errors } = validate.common("qwertyu", maxLengthSettings);
      expect(errors).toBeDefined();
    });
    it("return proper error", () => {
      const { errors } = validate.common("qwertyu", maxLengthSettings);
      Array.isArray(errors) &&
        expect(errors[0]).toBe(
          validationErrors.common.maxLength(maxLengthSettings.maxLength!)
        );
    });

    it("shouldn't return error if string is less then max length", () => {
      const { errors } = validate.common("qwery", maxLengthSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("min length validation", () => {
    const minLengthSettings: CommonValidationSettings = { minLength: 3 };
    it("return error if string is less then min length", () => {
      const { errors } = validate.common("hi", minLengthSettings);
      expect(errors).toBeDefined();
    });
    it("return proper error", () => {
      const { errors } = validate.common("hi", minLengthSettings);
      Array.isArray(errors) &&
        expect(errors[0]).toBe(
          validationErrors.common.minLength(minLengthSettings.minLength!)
        );
    });

    it("shouldn't return error if string is more then min length", () => {
      const { errors } = validate.common("qwertyu", minLengthSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("required field validation", () => {
    const requiredSettings: CommonValidationSettings = { required: true };
    it("return error if string is null or undefined", () => {
      const result1 = validate.common("", requiredSettings);
      const result2 = validate.common(undefined, requiredSettings);
      expect(result1.errors).toBeDefined();
      expect(result2.errors).toBeDefined();
    });
    it("return proper error", () => {
      const { errors } = validate.common("hi", requiredSettings);
      Array.isArray(errors) &&
        expect(errors[0]).toBe(validationErrors.common.required());
    });

    it("shouldn't return error if string is presented", () => {
      const { errors } = validate.common("qwertyu", requiredSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("letters only validation", () => {
    const lettersOnlySettings: CommonValidationSettings = { lettersOnly: true };
    it("return error if numbers or special characters passed", () => {
      const result1 = validate.common("hello 1", lettersOnlySettings);
      const result2 = validate.common("hello #", lettersOnlySettings);
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(validationErrors.common.lettersOnly());
      Array.isArray(result2.errors) &&
        expect(result2.errors[0]).toBe(validationErrors.common.lettersOnly());
    });
    it("shouldn't return error if string consist only of letters", () => {
      const { errors } = validate.common("Hello Here", lettersOnlySettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("numbers only validation", () => {
    const numbersOnlySettings: CommonValidationSettings = { numbersOnly: true };
    it("return error if letters or special characters passed", () => {
      const result1 = validate.common("hello 1", numbersOnlySettings);
      const result2 = validate.common("1234 #", numbersOnlySettings);
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(validationErrors.common.numbersOnly());
      Array.isArray(result2.errors) &&
        expect(result2.errors[0]).toBe(validationErrors.common.numbersOnly());
    });
    it("shouldn't return error if string consist only of numbers", () => {
      const { errors } = validate.common("1234 5", numbersOnlySettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("numbers and letters only validation", () => {
    const lettersAndNumbersOnlySettings: CommonValidationSettings = {
      lettersAndNumbersOnly: true,
    };
    it("return error if special characters passed", () => {
      const result1 = validate.common("1234 #", lettersAndNumbersOnlySettings);
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(
          validationErrors.common.lettersAndNumbersOnly()
        );
    });
    it("shouldn't return error if string consist only of letters and numbers", () => {
      const { errors } = validate.common(
        "hello 123",
        lettersAndNumbersOnlySettings
      );
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("special characters validation", () => {
    const specialCharactersOnlySettings: CommonValidationSettings = {
      containSpecialCharacters: true,
    };
    it("return error if there is no special characters", () => {
      const result1 = validate.common(
        "1234 hello",
        specialCharactersOnlySettings
      );
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(
          validationErrors.common.containSpecialCharacters()
        );
    });
    it("shouldn't return error if string contain special characters", () => {
      const { errors } = validate.common(
        "hello 123!",
        specialCharactersOnlySettings
      );
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("case sensative validation", () => {
    const lowerCaseSettings: CommonValidationSettings = {
      case: "lower",
    };
    const upperCaseSettings: CommonValidationSettings = {
      case: "upper",
    };
    const bothCaseSettings: CommonValidationSettings = {
      case: "both required",
    };
    it("return error if upper case persists", () => {
      const { errors } = validate.common("qweRt 12f!", lowerCaseSettings);
      Array.isArray(errors) &&
        expect(errors).toBe(validationErrors.common.lowerCase());
    });
    it("shouldn't return error if there's only lower case", () => {
      const { errors } = validate.common("hello 1!", lowerCaseSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
    it("return error if lower case persists", () => {
      const result1 = validate.common("QWErT", upperCaseSettings);
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(validationErrors.common.upperCase());
    });
    it("shouldn't return error if there's only upper case", () => {
      const { errors } = validate.common("QWERT", upperCaseSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
    it("return error if not both cases persists", () => {
      const result1 = validate.common("qwet", bothCaseSettings);
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(
          validationErrors.common.bothCasesRequired()
        );
    });
    it("shouldn't return error if all cases persists", () => {
      const { errors } = validate.common("heLLo 123!", bothCaseSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("is real email validation", () => {
    const isEmailSettings: CommonValidationSettings = { isEmail: true };
    it("return error if email is invalid", () => {
      const invalidEmails = [
        "",
        undefined,
        "qwer",
        "qwer@",
        "qwert@t",
        "@gmail.com",
        "gmail.com",
        "neom@gmail",
        "ne@gmail.c"
      ];
      const output = invalidEmails.every((invalidEmail) => {
        const { errors } = validate.common(invalidEmail, isEmailSettings);
        return (
          Array.isArray(errors) &&
          errors[0] === validationErrors.common.notEmail()
        );
      });
      expect(output).toBeTruthy()
    });
    it("accepts proper email", () => {
      const { errors } = validate.common(
        "neomonreo@gmail.com",
        isEmailSettings
      );
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("combain settings validation", () => {
    const specialCharactersOnlySettings: CommonValidationSettings = {
      minLength: 3,
      maxLength: 8,
      containSpecialCharacters: true,
      required: true,
    };
  });
});
