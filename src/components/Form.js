import { useState } from 'react';

import spaceshipImage from '../assets/img-2.svg';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="form-container">
      <span className="close-btn">x</span>
      <div className="form-content-left">
        <img src={spaceshipImage} alt="spaceship" className="form-img" />
      </div>
      {isSubmitted ? <FormSuccess /> : <FormSignup submitForm={submitForm} />}
    </div>
  );
};

export default Form;
