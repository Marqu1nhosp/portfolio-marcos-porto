/* eslint-disable prettier/prettier */

export function Button({ name, className, icon }) {
  return (
    <button
      className={`bg-gradient-to-r from-purple-800 to-purple-900 text-white px-6 py-2.5 text-sm rounded-md shadow-md hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:ring-2 hover:ring-purple-500/60 transition duration-300 flex items-center justify-center ${className}`}
    >
      {name}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}
