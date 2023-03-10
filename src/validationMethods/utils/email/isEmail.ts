export const isEmail = (value: string | undefined): boolean => {
  if (!value) {
    return false;
  }
  {
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]{2,4}$/;
    if (mailformat.test(value)) {
      return true;
    } else {
      return false;
    }
  }
};
