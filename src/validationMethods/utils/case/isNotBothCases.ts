export const isNotBothCases = (value: string | undefined) => {
  if (value) {
    const upper = /[A-Z]^\d\[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]s+$/.test(
      value
    );
    const lower = /[a-z]^\d\[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]s+$/.test(
      value
    );
    return upper && lower
  } else return false
};
