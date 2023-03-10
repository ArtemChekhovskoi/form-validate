export const isURL = (value: string | undefined) => {
  if (value) {
    try {
      new URL(value);
      return true;
    } catch (e) {
      return false;
    }
  } else return false;
};
