export const isNotLettersOnly = (
  value: string | undefined
) => {
  if (value && !/^[A-Za-z\s]*$/.test(value)) {
    return true;
  } else return false;
};
