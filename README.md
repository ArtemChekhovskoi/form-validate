# Easy input validation with form validator

This library will help you validate any strings (emails, passwords, URLs, etc) and show an error if the validation fails.

Features:

- Small size.
- No extra npm dependecies.
- Typescript support.
- Full test coverage.
- Support all platforms.

## Table of contents

- [Quick start](#quick-start)
- [Usage example](#usage-example)
  - [React](#react)
- [Settings](#settings)
- [Typescript](#typescript)
- [Bug reporting](#bug-reporting)
- [Support](#support)

## Quick start

For start using:

```shell
npm i simple-string-validator
```

or

```shell
yarn add simple-string-validator
```

## Usage example

### React:

```shell
import React, { useState } from 'react';
import validate from 'simple-string-validator';

function InputValidation() {
  const [email, setEmail] = useState('');
  const [emailErrors, setEmailErrors] = useState<string[] | null>();

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailErrors(null);
    const { errors } = validate(email, { isEmail: true, required: true });
    if (errors) {
      setEmailErrors(errors);
      return;
    }
    //submit form logic
  };

  return (
    <form onSubmit={submitForm}>
      <h1>Enter your email to subscribe.</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {emailErrors &&
        emailErrors.map((error) => {
          return <p>{error}</p>;
        })}
      <button>Submit</button>
    </form>
  );
}

export default InputValidation;
```

You could get all the validation errors from the "errors" array.

You could also provide your custom error message (see accepted parameters below).

## Settings

| Parameter                | Type                              | Description                                                                                                                |
| ------------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| maxLength                | number                            | Sets the maximum allowed string length.                                                                                    |
| minLength                | number                            | Sets the minimum allowed string length.                                                                                    |
| required                 | boolean                           | Indicates whether this string is required                                                                                  |
| numbersOnly              | boolean                           | A flag that indicates that only numbers should be contained in the string.                                                 |
| lettersOnly              | boolean                           | A flag that indicates that only letters should be contained in the string.                                                 |
| lettersAndNumbersOnly    | boolean                           | A flag that indicates that only numbers and letters should be contained in the string. Special characters are not allowed. |
| case                     | "lower", "upper", "both required" | Sets the case in which the string should be                                                                                |
| containSpecialCharacters | boolean                           | Indicates that the string must contain special characters.                                                                 |
| isEmail                  | boolean                           | Checks if a string is an email                                                                                             |
| isURL                    | boolean                           | Checks if a string is an URL                                                                                               |
| errorMessage             | string                            | Allows you to set a custom error message that will be displayed if the string fails validation.                            |

**Custom error messages example**:

```shell
const { errors } = validate(email, {
      isEmail: true,
      required: true,
      errorMessage: 'Please, provide correct email'
    })
```

## Typescript
This library has full Typescript support.

## Bug reporting
You could send it to achekhovskoi@gmail.com or open an issue on https://github.com/ArtemChekhovskoi/form-validate/issues.

## License
ISC Licensed. Artem Chekhvskoi, 2023.

### Keywords
[validate](https://www.npmjs.com/search?q=keywords:validate) [form](https://www.npmjs.com/search?q=keywords:form) [inputs](https://www.npmjs.com/search?q=keywords:inputs) [string](https://www.npmjs.com/search?q=keywords:string) [validation](https://www.npmjs.com/search?q=keywords:validation) [validator](https://www.npmjs.com/search?q=keywords:validator) [password](https://www.npmjs.com/search?q=keywords:password) [email](https://www.npmjs.com/search?q=keywords:email)
