import { validationErrors } from "../heplers/validationErrors/index";
import { CommonValidationSettings } from "../types/common";
import validate from "../validate";

describe("string validatation", () => {
  describe("max length validation", () => {
    const maxLengthSettings: CommonValidationSettings = { maxLength: 5 };
    it("return error if string is more then max length", () => {
      const { errors } = validate("qwertyu", maxLengthSettings);
      expect(errors).toBeDefined();
    });
    it("return proper error", () => {
      const { errors } = validate("qwertyu", maxLengthSettings);
      Array.isArray(errors) &&
        expect(errors[0]).toBe(
          validationErrors.string.maxLength(maxLengthSettings.maxLength!)
        );
    });

    it("shouldn't return error if string is less then max length", () => {
      const { errors } = validate("qwery", maxLengthSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("min length validation", () => {
    const minLengthSettings: CommonValidationSettings = { minLength: 3 };
    it("return error if string is less then min length", () => {
      const { errors } = validate("hi", minLengthSettings);
      expect(errors).toBeDefined();
    });
    it("return proper error", () => {
      const { errors } = validate("hi", minLengthSettings);
      Array.isArray(errors) &&
        expect(errors[0]).toBe(
          validationErrors.string.minLength(minLengthSettings.minLength!)
        );
    });

    it("shouldn't return error if string is more then min length", () => {
      const { errors } = validate("qwertyu", minLengthSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("required field validation", () => {
    const requiredSettings: CommonValidationSettings = { required: true };
    it("return error if string is null or undefined", () => {
      const result1 = validate("", requiredSettings);
      const result2 = validate(undefined, requiredSettings);
      expect(result1.errors).toBeDefined();
      expect(result2.errors).toBeDefined();
    });
    it("return proper error", () => {
      const { errors } = validate("hi", requiredSettings);
      Array.isArray(errors) &&
        expect(errors[0]).toBe(validationErrors.string.required());
    });

    it("shouldn't return error if string is presented", () => {
      const { errors } = validate("qwertyu", requiredSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("letters only validation", () => {
    const lettersOnlySettings: CommonValidationSettings = { lettersOnly: true };
    it("return error if numbers or special characters passed", () => {
      const result1 = validate("hello 1", lettersOnlySettings);
      const result2 = validate("hello #", lettersOnlySettings);
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(validationErrors.string.lettersOnly());
      Array.isArray(result2.errors) &&
        expect(result2.errors[0]).toBe(validationErrors.string.lettersOnly());
    });
    it("shouldn't return error if string consist only of letters", () => {
      const { errors } = validate("Hello Here", lettersOnlySettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("numbers only validation", () => {
    const numbersOnlySettings: CommonValidationSettings = { numbersOnly: true };
    it("return error if letters or special characters passed", () => {
      const result1 = validate("hello 1", numbersOnlySettings);
      const result2 = validate("1234 #", numbersOnlySettings);
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(validationErrors.string.numbersOnly());
      Array.isArray(result2.errors) &&
        expect(result2.errors[0]).toBe(validationErrors.string.numbersOnly());
    });
    it("shouldn't return error if string consist only of numbers", () => {
      const { errors } = validate("1234 5", numbersOnlySettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("numbers and letters only validation", () => {
    const lettersAndNumbersOnlySettings: CommonValidationSettings = {
      lettersAndNumbersOnly: true,
    };
    it("return error if special characters passed", () => {
      const result1 = validate("1234 #", lettersAndNumbersOnlySettings);
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(
          validationErrors.string.lettersAndNumbersOnly()
        );
    });
    it("shouldn't return error if string consist only of letters and numbers", () => {
      const { errors } = validate(
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
      const result1 = validate(
        "1234 hello",
        specialCharactersOnlySettings
      );
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(
          validationErrors.string.containSpecialCharacters()
        );
    });
    it("shouldn't return error if string contain special characters", () => {
      const { errors } = validate(
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
      const { errors } = validate("qweRt 12f!", lowerCaseSettings);
      Array.isArray(errors) &&
        expect(errors).toBe(validationErrors.string.lowerCase());
    });
    it("shouldn't return error if there's only lower case", () => {
      const { errors } = validate("hello 1!", lowerCaseSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
    it("return error if lower case persists", () => {
      const result1 = validate("QWErT", upperCaseSettings);
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(validationErrors.string.upperCase());
    });
    it("shouldn't return error if there's only upper case", () => {
      const { errors } = validate("QWERT", upperCaseSettings);
      Array.isArray(errors) && expect(errors).toBeNull();
    });
    it("return error if not both cases persists", () => {
      const result1 = validate("qwet", bothCaseSettings);
      Array.isArray(result1.errors) &&
        expect(result1.errors[0]).toBe(
          validationErrors.string.bothCasesRequired()
        );
    });
    it("shouldn't return error if all cases persists", () => {
      const { errors } = validate("heLLo 123!", bothCaseSettings);
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
        "ne@gmail.c",
      ];
      const output = invalidEmails.every((invalidEmail) => {
        const { errors } = validate(invalidEmail, isEmailSettings);
        return (
          Array.isArray(errors) &&
          errors[0] === validationErrors.string.notEmail()
        );
      });
      expect(output).toBeTruthy();
    });
    it("accepts proper email", () => {
      const { errors } = validate(
        "neomonreo@gmail.com",
        isEmailSettings
      );
      Array.isArray(errors) && expect(errors).toBeNull();
    });
  });
  describe("validates URL", () => {
    const isURLsettings: CommonValidationSettings = {
      isURL: true
    };
    it("returns error", () => {
    const invalidURLs = [
      "hello",
      "hello.com",
      "try.hello.com",
      "ru.ru.ru",
      "http://",
    ]
    const output = invalidURLs.every((invalidURL) => {
      const { errors } = validate(invalidURL, isURLsettings);
      return (
        Array.isArray(errors) &&
        errors[0] === validationErrors.string.notURL()
      );
    });
      expect(output).toBeTruthy()
    });
    it("doesn't return error on proper URL", () => {
      const { errors } = validate("https://google.com", isURLsettings);
      Array.isArray(errors) &&
        expect(errors).toBeNull();
    });
  });
  describe("returns custom error message", () => {
    const settings: CommonValidationSettings = {
      minLength: 3,
      errorMessage: "This is custom error message",
      containSpecialCharacters: true,
    };
    it("returns error", () => {
      const { errors } = validate("hello", settings);
      Array.isArray(errors) && expect(errors).toBe(settings.errorMessage);
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
