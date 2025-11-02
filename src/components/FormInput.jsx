import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

export function FormInput({ label, id, type, placeholder }) {
  return (
    <>
      <label htmlFor={id} className="font-bold">{label}</label>
      <input
        className="block w-full border border-gray-300 text-gray-500 px-4 py-3 rounded-lg"
        id={id}
        type={type}
        placeholder={placeholder}
      />
      <a href="#" className={type === 'password' ? 'block' : 'hidden'}>
        <FontAwesomeIcon icon={faEye} className="absolute right-0 top-10 mr-4 text-lg" />
      </a>
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