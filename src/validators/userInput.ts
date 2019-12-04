import isEmpty from './is-empty';

const validateInput = (data) => {
  let errors = {};

  data = !isEmpty(data) ? data : '';

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateInput