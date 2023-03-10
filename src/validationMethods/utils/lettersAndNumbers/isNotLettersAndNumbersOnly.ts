export const isNotLettersAndNumbersOnly = (
  value: string | undefined
) => {
  if (value && /^[A-Za-z0-9]\s*$/.test(value)) {
    return true;
  } else return false;
};
