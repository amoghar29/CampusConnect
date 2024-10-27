import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import RegistrationSuccess from '../components/RegistrationSuccess';
import RegistrationFailure from '../components/RegistrationFailure';
import RegistrationForm from '../components/RegistrationForm';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clubName, setClubName] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function register(e) {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      const response = await axios.post(
        'https://campusconnect-cxtc.onrender.com/register',
        { email, password, clubName },
        { 
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true 
        }
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
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-black text-white px-[10%]"> {/* Added 10% padding */}
      {isSubmitted ? (
        <>
          {registrationSuccess && <RegistrationSuccess />}
          {registrationError && <RegistrationFailure onTryAgain={handleTryAgain} />}
        </>
      ) : (
        <RegistrationForm
          email={email}
          password={password}
          clubName={clubName}
          setEmail={setEmail}
          setPassword={setPassword}
          setClubName={setClubName}
          register={register}
        />
      )}
    </div>
  );
}
