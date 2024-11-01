import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/login`,
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        navigate('/home');
      }
      console.log(response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
  }
  return (
    <div className="bg-gray-100 text-gray-900 flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
        <div className="mx-5 border border-gray-300 shadow-lg rounded-lg bg-white p-1.5">
          <div className="flex flex-col p-6 text-center">
            <h1 className="text-2xl font-semibold leading-7 tracking-tight text-center text-black">Club Login</h1>
            <p className="mt-2 text-lg font-medium text-gray-600 text-center">
              Welcome back, enter your credentials to continue.
            </p>
          </div>
          <div className="p-6 pt-0">
            <form onSubmit={login}>
              <div>
                <div className="group relative rounded-lg border border-gray-400 focus-within:border-purple-600 px-4 pb-2 pt-3 duration-200 focus-within:ring focus-within:ring-purple-300/30">
                  <div className="flex justify-between">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-gray-800 text-gray-500">
                      Username
                    </label>
                    <div className="absolute right-3 translate-y-2 text-green-200"></div>
                  </div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    className="block w-full border-0 bg-transparent p-0 text-base placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:leading-7 text-gray-800"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="group relative rounded-lg border border-gray-400 focus-within:border-purple-600 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-purple-300/30">
                  <div className="flex justify-between">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-gray-800 text-gray-500">
                      Password
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full border-0 bg-transparent p-0 text-base placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:leading-7 text-gray-800"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    className="outline-none focus:outline focus:outline-sky-300"
                  />
                  <span className="text-xs">Remember me</span>
                </label>
                {/* <link
                  className="text-sm font-medium text-gray-600 underline"
                  to="/forgot-password"
                >
                  Forgot password?
                </link> */}
              </div>
              <div className="mt-4 flex flex-col items-center justify-end gap-y-2 sm:flex-row sm:gap-x-2">
                <Link
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2"
                  to="/Register"
                >
                  Register
                </Link>
                <button
                  className="font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition duration-300 inline-flex items-center justify-center rounded-md text-sm h-10 px-4 py-2"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
