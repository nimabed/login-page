import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

export function FormInput({ label, id, type, placeholder }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <label htmlFor={id} className="font-bold">{label}</label>
      <input
        className="block w-full border border-gray-300 text-gray-500 focus:text-gray-800 px-4 py-3 rounded-lg"
        id={id}
        type={type !== 'password' ? type : (isShown ? 'text' : 'password')}
        placeholder={placeholder}
        onFocus={(event) => event.target.placeholder = ''}
        onBlur={(event) => event.target.placeholder = placeholder}
      />
      <span 
        className={`cursor-pointer ${type !== 'password' ? 'hidden' : 'block'}`}
        onClick={() => setIsShown(!isShown)}
        >
        <FontAwesomeIcon icon={isShown ? faEyeSlash : faEye} className="absolute right-0 top-10 mr-4 text-lg" />
      </span>
    </>
  );
}

export function Button({ label }){

  return (
    <button
      type="submit"
      className="mt-[32px] w-full bg-blue-500 hover:bg-blue-700 text-white py-3 font-semibold text-xl rounded-lg cursor-pointer"
    >{label}
    </button>
  );
}