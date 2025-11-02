import { FormInput, Button } from './FormInput';

export function LoginForm() {

  return (
    <>
      <form className="mt-[32px]">
        {/* Email */}
        <div>
          <FormInput
            id={'email'}
            type={'email'}
            label={'Email'}
            placeholder={'Enter your email'}
          />
        </div>
        {/* Password */}
        <div className="relative mt-5">
          <FormInput
            id={'password'}
            type={'password'}
            label={'Password'}
            placeholder={'Enter your password'}
          />
        </div>
        {/* Remember */}
        <div className="mt-5 flex items-center sm:justify-between ">
          <label className="text-sm flex items-center">
            <input type="checkbox" name="rememberme" value="remember" className="size-4 mr-1 border rounded-sm border-gray-300" />
            <span className="text-gray-700 font-semibold">Remember me for 30 days</span>
          </label>

          <a href="#" className="hidden sm:inline text-blue-500 font-semibold">
            <span className="mr-2">Forgot password?</span>>
          </a>
        </div>
        {/* Sign in button */}
        <Button label={'Sign In'} />
      </form>
    </>
  );
}