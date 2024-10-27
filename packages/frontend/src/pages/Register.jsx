import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import RegistrationSuccess from '../components/RegistrationSuccess';
import RegistrationFailure from '../components/RegistrationFailure';
import RegistrationForm from '../components/RegistrationForm';
const API_URL = 'https://campusconnect-cxtc.onrender.com';
export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clubName, setClubName] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);

  async function register(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        API_URL + '/register',
        { email, password, clubName },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 201) {
        setRegistrationSuccess(true);
        setRegistrationError(false);
      }
    } catch (error) {
      console.error(
        'Registration error:',
        error.response?.data || error.message
      );
      setRegistrationError(true);
      setRegistrationSuccess(false);
    }
  }

  const handleTryAgain = () => {
    setEmail('');
    setPassword('');
    setClubName('');
    setRegistrationSuccess(false);
    setRegistrationError(false);
  };

  return (
    <div>
      {registrationSuccess && <RegistrationSuccess />}
      {registrationError && <RegistrationFailure onTryAgain={handleTryAgain} />}
      <RegistrationForm
        email={email}
        password={password}
        clubName={clubName}
        setEmail={setEmail}
        setPassword={setPassword}
        setClubName={setClubName}
        register={register}
      />
    </div>
  );
}
