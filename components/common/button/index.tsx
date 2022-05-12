import { memo, MouseEventHandler, PropsWithChildren } from "react";
import { useContainerHook } from "./_hook";

interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler;
}

const Index = ({ children, className = "", onClick }: PropsWithChildren<ButtonProps>) => {
  const { onClickHandler } = useContainerHook();
  return (
    <button
      type="button"
      className={`inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white uppercase bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 rounded focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${className}`}
      onClick={onClick ?? onClickHandler}
    >
      {children}
    </button>
  );
};

export default memo(Index);
