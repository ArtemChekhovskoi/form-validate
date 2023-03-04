export declare const validationErrors: {
    common: {
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
    };
    email: string;
    password: string;
};
