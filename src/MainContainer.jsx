// import background from './assets/bg-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';



export function MainContainer() {

  return (
    <>
      <div className="relative w-full sm:flex">
        <div className="hidden w-full sm:block bg-[#3971FF] bg-[url('/bg-image.png')] bg-center bg-cover bg-no-repeat sm:rounded-tr-[3rem] z-1">
        </div>
        
        <div className="d-none sm:flex flex-col justify-between align-items-center absolute left-[50%] translate-x-[-50%] z-0 h-full">
          <div className="size-[100px] bg-gray-100"></div>
          <div className="size-[100px] bg-[#3971FF] bg-[url('/bg-image.png')] bg-center bg-cover bg-no-repeat"></div>
        </div>

        <div className="sm:hidden absolute z-1 w-[100px] h-[100px] right-0 bg-[#3971FF] bg-[url('/bg-image.png')] bg-center bg-cover bg-no-repeat">1</div>
        <div className="sm:hidden absolute z-1 w-[100px] h-[100px] bottom-0 bg-[#3971FF] bg-[url('/bg-image.png')] bg-center bg-cover bg-no-repeat">2</div>

        {/*----- Content Wrapper -----*/}
        <div className="relative sm:w-full h-screen sm:rounded-bl-[3rem] bg-gray-100 rounded-tr-[3rem] sm:rounded-tr-none rounded-bl-[3rem] z-1 pt-[4rem]">
          <div className="max-w-[350px] sm:max-w-[480px] mx-auto">
            {/* Logo section */}
            <div className="text-center sm:text-start text-4xl font-extrabold text-blue-500">Logo</div>
            {/* Desktop title section */}
            <div className="hidden sm:block mt-[32px]">
              <span className="block font-extrabold text-3xl mb-2">Create Your Account</span>
              <span className="block text-gray-500">Join us and start your journey today.</span>
            </div>

            {/*----- Form inputs section -----*/}
            <form className="my-[32px]">
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

            <div className="flex">
              <span className="w-full border-t border-gray-400"></span>
              <span className="-mt-[10px] mx-3 text-gray-500 text-sm">or</span>
              <span className="w-full border-t border-gray-400"></span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}