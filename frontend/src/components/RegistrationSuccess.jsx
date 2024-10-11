import { Link } from "react-router-dom";
export default function RegisterSuccess() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-green-500 text-white rounded-lg shadow-xl p-8 text-center">
        {" "}
        {/* Increased padding and shadow */}
        <div className="flex items-center justify-center mb-4">
          {" "}
          {/* Flex container for icon and text */}
          <h2 className="text-3xl font-bold">Registration Successful! </h2>{" "}
          {/* Increased text size */}
          <span className="bg-color-green justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </span>
        </div>
        <p className="mb-6 text-lg">Click below to login.</p>{" "}
        {/* Increased text size */}
        <Link
          to="/login"
          className="inline-block bg-white text-green-500 font-semibold rounded-md px-6 py-3 hover:bg-green-600 hover:text-white transition duration-300 shadow-md" // Improved button styling
        >
          Login
        </Link>
      </div>
    </div>
  );
}
