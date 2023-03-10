export const isNotContainSpecialCharacters = (
  value: string | undefined
) => {
  if (value && /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]\s/.test(value)) {
    return true;
  } else return false;
};
