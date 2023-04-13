const regEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const regNumber =
  /^(\+1-?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})-?[2-9][0-9]{2}-?[0-9]{4}$|^(\+|00)([1-9]\d{0,2}|\d{2,3})[-. ]?\d{1,9}[-. ]?\d{1,9}$/;

export const isValidEmail = (email: string) => {
  const isValidEmail = regEmail.test(email);
  return isValidEmail;
};
export const isValidPhone = (phone: string) => {
  const isValidPhone = regNumber.test(phone);
  return isValidPhone;
};
export const isValidFirstName = (firstName: string) => {
  if (firstName.trim().length > 0 && firstName.length < 30) {
    return true;
  }
  return false;
};
export const isValidSecondName = (secondName: string) => {
  if (secondName.trim().length > 0 && secondName.length < 30) {
    return true;
  }
  return false;
};
