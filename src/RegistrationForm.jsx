import React, { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && password) {
      console.log('Registration successful!');
    } else {
      if (!email) {
        setEmailError('Please enter a valid email address.');
      }
      if (!password) {
        setPasswordError('Please enter a password.');
      }
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
        {emailError && <span className="error">{emailError}</span>}
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
        {passwordError && <span className="error">{passwordError}</span>}
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;