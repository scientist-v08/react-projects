import useFormState from './useFormState';

export function SimpleFormHook() {
  const [age, ageHandleChange, ageReset] = useFormState('');
  return (
    <>
      <h1 className="text-3xl">The age is: {age}</h1>
      <div>
        <input
          value={age}
          onChange={ageHandleChange}
          type="number"
          className="
                px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                text-gray-800 text-lg w-64
                shadow-sm
            "
        />
        <button
          className="
                bg-slate-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md
                transition duration-300 ease-in-out transform hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                shadow-md hover:shadow-lg m-4
            "
          onClick={ageReset}
        >
          Reset
        </button>
      </div>
    </>
  );
}
