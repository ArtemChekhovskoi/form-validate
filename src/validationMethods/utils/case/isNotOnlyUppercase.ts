export const isNotOnlyUppercase = (
  value: string | undefined
) => {
  if (
    value &&
    /[A-Z]^\d\[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]s+$/.test(value)
  ) {
    return true;
  } else return false;
};
