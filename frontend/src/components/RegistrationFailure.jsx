import { Link } from "react-router-dom";

export default function RegistrationFailure({onTryAgain}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-red-500 text-white rounded-lg shadow-xl p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-3xl font-bold">Registration Failed!</h2>
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <p className="mb-6 text-lg">There was an issue with your registration. Please try again.</p>

        <Link
        onClick={onTryAgain}
          to="/Register"
          className="inline-block bg-white text-red-500 font-semibold rounded-md px-6 py-3 hover:bg-red-600 hover:text-white transition duration-300 shadow-md"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
