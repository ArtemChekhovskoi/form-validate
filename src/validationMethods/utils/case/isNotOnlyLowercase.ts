export const isNotOnlyLowerCase = (
  value: string | undefined
) => {
  if (
    value &&
    /[a-z]^\d\[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]s+$/.test(value)
  ) {
    return true;
  } else return false;
};
