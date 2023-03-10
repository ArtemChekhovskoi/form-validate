type CaseSettings = 'upper'| 'lower' | 'both required'

export type CommonValidationSettings = {
    maxLength?: number,
    minLength?: number,
    required?: boolean,
    numbersOnly?: boolean,
    lettersOnly?: boolean,
    lettersAndNumbersOnly?: boolean,
    containSpecialCharacters?: boolean,
    case?: CaseSettings,
    isEmail?: boolean;
    isURL?: boolean;
    errorMessage?: string;
}

export type ValidationParametersArray<ValidationSettings> = (keyof ValidationSettings) []
export type CommonValidationParametersArray = ValidationParametersArray<CommonValidationSettings>