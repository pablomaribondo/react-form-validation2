import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const submitHandler = event => {
    event.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) callback();
  }, [errors]); // eslint-disable-line

  return { changeHandler, values, submitHandler, errors };
};

export default useForm;
