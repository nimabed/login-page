import { MainBackground } from './components/MainBackground';
import { LoginForm } from './components/LoginForm';
import firstImage from './assets/image-1.png';
import secondImage from './assets/image-2.png';
import thirdImage from './assets/image-3.png';
import fourthImage from './assets/image-4.png';
import fifthImage from './assets/image-5.png';

export function LoginPage() {

  return (
    <>
      <div className="relative w-full sm:flex">
        <MainBackground />

        <div className="relative sm:w-full h-screen rounded-bl-[3rem] rounded-tr-[3rem] sm:rounded-bl-[3rem] bg-gray-100  sm:rounded-tr-none z-1">
          {/*----- Content Wrapper -----*/}
          <div className="relative top-1/2 -translate-y-1/2 max-w-[350px] sm:max-w-[480px] mx-auto">
            {/* Logo section */}
            <div className="text-center sm:text-start text-4xl font-extrabold text-blue-500">Logo</div>
            {/* Desktop title section */}
            <div className="hidden sm:block mt-[32px]">
              <span className="block font-extrabold text-3xl mb-2">Log in to Your Account</span>
              <span className="block text-gray-500">Welcome back! Choose your preferred sign-in method.</span>
            </div>

            {/*----- Form inputs section -----*/}
            <LoginForm />

            {/* Forgot password */}
            <div className="mt-5 text-center">
              <a href="#" className="sm:hidden text-blue-500 font-semibold">
              <span>Forgot password?</span>
              </a>
            </div>
            {/*----- "or" line seperator -----*/}
            <div className="flex my-[40px]">
              <span className="w-full border-t border-gray-200"></span>
              <span className="-mt-[10px] mx-3 text-gray-400 text-sm font-bold">or</span>
              <span className="w-full border-t border-gray-200"></span>
            </div>
            {/*----- Footer logo images -----*/}
            <div className="flex justify-between max-w-[350px] m-auto mb-[40px]">
              <a href="#" className="sm:order-2">
                <img src={fifthImage} alt="fifthImage" className="size-13" />
              </a>
              <a href="#" className="sm:order-3">
                <img src={fourthImage} alt="fourthImage" className="size-13" />
              </a>
              <a href="#" className="sm:order-4">
                <img src={thirdImage} alt="thirdImage" className="size-13" />
              </a>
              <a href="#" className="sm:order-5">
                <img src={secondImage} alt="secondImage" className="size-13 " />
              </a>
              <a href="#" className="sm:order-1">
                <img src={firstImage} alt="firstImage" className="size-13" />
              </a>
            </div>

            <div className="max-w-[320px] m-auto text-center">
              <span className="inline-block text-gray-700 mt-[40px]">New here?&nbsp;Create an account 👉
                <a href="#" className="underline text-blue-500 font-semibold ml-2">Sign Up</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
