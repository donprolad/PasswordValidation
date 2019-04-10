export const specialChars = str =>
  str.match(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*!@#$%^&*-+~`:;'"<>,.?|])([a-zA-Z0-9*!@#$%^&*-+~`:;'"<>,.?|]{8,20})$/
  )
    ? true
    : "Password must contain special characters for e.g !*&%$#@+-';/.,?";

export const numbers = str =>
  str.match(/[0-9]/) ? true : "Password must contain \
a number";

export const passwordLength = (passwordValue, minLength) =>
  passwordValue < minLength ? true : false;

export const alpha = str =>
  str.match(/[A-Z]/) ? true : "Password must contain Uppercase \
characters";
