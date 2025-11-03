import { Link } from 'react-router-dom';
import { MainBackground } from './components/MainBackground';
import { SignupForm } from './components/SignupForm';
import { FooterLogos } from './components/FooterLogos';


export function SignUp() {

  return (
    <>
      <title>Sign Up</title>
      <div className="relative w-full sm:flex">
        <MainBackground />

        <div className="relative sm:w-full h-screen rounded-bl-[3rem] rounded-tr-[3rem] sm:rounded-bl-[3rem] bg-gray-100  sm:rounded-tr-none z-1">
          {/*----- Content Wrapper -----*/}
          <div className="relative top-1/2 -translate-y-1/2 max-w-[350px] sm:max-w-[480px] mx-auto">
            {/* Logo section */}
            <div className="text-center sm:text-start text-4xl font-extrabold text-blue-500">Logo</div>
            {/* Desktop title section */}
            <div className="hidden sm:block mt-[32px]">
              <span className="block font-extrabold text-3xl mb-2">Create Your Account</span>
              <span className="block text-gray-500">Join us and start your journey today.</span>
            </div>

            {/*----- Form inputs section -----*/}
            <SignupForm />

            {/*----- "or" line seperator -----*/}
            <div className="flex my-[32px]">
              <span className="w-full border-t border-gray-200"></span>
              <span className="-mt-[10px] mx-3 text-gray-400 text-sm font-bold">or</span>
              <span className="w-full border-t border-gray-200"></span>
            </div>
            {/*----- Footer logo images -----*/}
            <FooterLogos />

            <div className="max-w-[320px] m-auto text-center">
              <span className="text-gray-700">Already have an account? 👉
                <Link to="/signin" className="underline text-blue-500 font-semibold ml-2">Sign In</Link>
              </span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}