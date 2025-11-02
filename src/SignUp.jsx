import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import firstImage from './assets/image-1.png';
import secondImage from './assets/image-2.png';
import thirdImage from './assets/image-3.png';
import fourthImage from './assets/image-4.png';
import fifthImage from './assets/image-5.png';


export function SignUp() {

  return (
    <>
      <div className="relative w-full sm:flex">
        <div className="hidden w-full sm:flex flex-col gap-y-3 justify-center items-center bg-[#185aff] bg-[url('/bg-image.png')] bg-center bg-cover bg-no-repeat sm:rounded-tr-[3rem] z-1">
        {/* Desktop Title */}
          <span className="text-white text-6xl font-semibold">
            Let's make every day <br />Meaningful together.
          </span>
          <span className="text-white font-semibold">"Building meaningful experiences together."</span>
        </div>
        
        {/* Underlay boxes for rounding top and bottom center of page  */}
        <div className="hidden sm:flex flex-col justify-between align-items-center absolute left-[50%] translate-x-[-50%] z-0 h-full">
          <div className="size-[100px] bg-gray-100"></div>
          <div className="size-[100px] bg-[#3971FF] bg-[url('/bg-image.png')] bg-center bg-cover bg-no-repeat"></div>
        </div>

        {/* Underlay boxes for rounding top right and bottom left of page */}
        <div className="sm:hidden absolute z-0 w-[100px] h-[100px] right-0 bg-[#3971FF]"></div>
        <div className="sm:hidden absolute z-0 w-[100px] h-[100px] bottom-0 bg-[#3971FF]"></div>

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
            <form className="mt-[32px]">
              {/* FullName */}
              <div className="">
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
            {/*----- "or" line seperator -----*/}
            <div className="flex my-[32px]">
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
              <span className="text-gray-700">Already have an account? 👉
                <a href="#" className="underline text-blue-500 font-semibold ml-2">Sign In</a>
              </span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}