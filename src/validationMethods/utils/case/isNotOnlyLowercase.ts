export const isNotOnlyLowerCase = (
  value: string | undefined
) => {
  if (value && /[a-z]+$/.test(value)) {
    return true;
  } else return false;
};
