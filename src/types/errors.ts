import { CommonValidationSettings } from "./common"

export type ErrorMessages<ValidationSettings> = { [key in keyof ValidationSettings]: string }

export interface IErrorsMessages {
    string: ErrorMessages<CommonValidationSettings>,
    email: '',
    password: ''
}