export const isNotOnlyUppercase = (
  value: string | undefined
) => {
  if (value && /[A-Z]+$/.test(value)) {
    return true;
  } else return false;
};
