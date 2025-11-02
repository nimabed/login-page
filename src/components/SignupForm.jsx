import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';


export function SignupForm() {

  return (
    <>
      <form className="mt-[32px]">
        {/* FullName */}
        <div>
          <label htmlFor="fullname" className="font-bold">Full Name</label>
          <input
            className="block w-full border border-gray-300 text-gray-500 px-4 py-3 rounded-lg"
            id="fullname"
            type="text"
            placeholder="Enter your full name"
          />
        </div>
        {/* Email */}
        <div className="mt-5">
          <label htmlFor="email" className="font-bold">Email</label>
          <input
            className="block w-full border border-gray-300 text-gray-500 px-4 py-3 rounded-lg"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        {/* Password */}
        <div className="relative mt-5">
          <label htmlFor="password" className="font-bold">Password</label>
          <input
            className="block w-full border border-gray-300 text-gray-500 px-4 py-3 rounded-lg"
            id="password"
            type="password"
            placeholder="Create a password"
          />
          <a href="#">
            <FontAwesomeIcon icon={faEye} className="absolute right-0 top-10 mr-4 text-lg" />
          </a>
        </div>
        {/* Confirm password */}
        <div className="relative mt-5">
          <label htmlFor="passwordconfirm" className="font-bold">Confirm Password</label>
          <input
            className="block w-full border border-gray-300 text-gray-500 px-4 py-3 rounded-lg"
            id="passwordconfirm"
            type="password"
            placeholder="Re-enter your password"
          />
          <a href="#">
            <FontAwesomeIcon icon={faEye} className="absolute right-0 top-10 mr-4 text-lg" />
          </a>
        </div>
        {/* Sign up button */}
        <button
          type="submit"
          className="mt-[32px] w-full bg-blue-500 hover:bg-blue-700 text-white py-3 font-semibold text-xl rounded-lg cursor-pointer"
        >Sign Up</button>
      </form>
    </>
  );
}