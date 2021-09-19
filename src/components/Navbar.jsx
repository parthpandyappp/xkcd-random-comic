import React from "react";

function Navbar(props) {
  return (
    <div className="flex justify-between p-6 m-2 bg-gray-800 rounded-lg">
      <h1 className="flex font-bold text-white">
        <span className="px-2">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        XKCD-Comic
      </h1>
      <div className="flex space-x-2 text-white font-bold">
        <p>Github</p>
        <p>About me</p>
      </div>
    </div>
  );
}

export default Navbar;
