export const isNotNumbersOnly = (
  value: string | undefined
) => {
  if (value && /^\d\s+$/.test(value)) {
    return true;
  } else return false;
};
