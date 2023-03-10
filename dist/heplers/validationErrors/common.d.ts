export declare const commonErrorMessages: () => {
    maxLength: (value: number) => string;
    minLength: (value: number) => string;
    required: () => string;
    lettersOnly: () => string;
    numbersOnly: () => string;
    lettersAndNumbersOnly: () => string;
    containSpecialCharacters: () => string;
    lowerCase: () => string;
    upperCase: () => string;
    bothCasesRequired: () => string;
    notEmail: () => string;
    notURL: () => string;
};
