import { PropsWithChildren } from "react";

interface ButtonProps {}

export const Button = ({ children }: PropsWithChildren<ButtonProps>) => (
  <button
    type="button"
    className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white uppercase bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 rounded focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
  >
    {children}
  </button>
);
