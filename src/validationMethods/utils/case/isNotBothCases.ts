export const isNotBothCases = (value: string | undefined) => {
  if (value) {
    const upper = /[A-Z]/.test(value);
    const lower = /[a-z]/.test(value);
    return upper && lower
  } else return false
};
