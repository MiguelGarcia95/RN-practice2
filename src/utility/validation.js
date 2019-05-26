const validate = (value, rules) => {
  let isValid = true;
  for (let rule in rules) {
    switch(rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(value);
        break;
      case 'midLength':
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;
      case 'midLength':
        isValid = isValid && equalToValidator(value, rules[rule]);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
}

const emailValidator = value => {

}

const minLengthValidator = (val, minLength) => {

}

const equalToValidator = (val, checkValue) => {

}