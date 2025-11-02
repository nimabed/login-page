import { FormInput, Button } from './FormInput';

export function SignupForm(){

  return (
    <>
      <form className="mt-[32px]">
        {/* FullName */}
        <div>
          <FormInput 
            id={'fullname'}
            label={'Full Name'}
            type={'text'}
            placeholder={'Enter your name'}
          />
        </div>
        {/* Email */}
        <div className="mt-5">
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
            placeholder={'Create a password'}
          />
        </div>
        {/* Confirm password */}
        <div className="relative mt-5">
          <FormInput
            id={'passwordconfirm'}
            type={'password'}
            label={'Confirm Password'}
            placeholder={'Re-enter your password'}
          />
        </div>
        {/* Sign up button */}
        <Button label={'Sign Up'} />
      </form>
    </>
  );
}