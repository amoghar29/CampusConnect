import { useState } from "react";
import axios from "axios";
import RegistrationSuccess from "../components/RegistrationSuccess";
import RegistrationFailure from "../components/RegistrationFailure";
import RegistrationForm from "../components/RegistrationForm";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);

  async function register(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 201) {
        setRegistrationSuccess(true);
        setRegistrationError(false);
      }
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      setRegistrationError(true);
      setRegistrationSuccess(false);
    }
  }
  const handleTryAgain = () => {
    setUsername("");
    setPassword("");
    setRegistrationSuccess(false);
    setRegistrationError(false);
  };
  return (
    <div>
      {registrationSuccess && <RegistrationSuccess />}
      {registrationError && <RegistrationFailure onTryAgain={handleTryAgain} />}
      <RegistrationForm 
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        register={register}
      />
    </div>
  );
}
