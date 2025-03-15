import React from "react";

interface Button1Props{
    text: string;
    onClick: () => void;
}
  // eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-unused-vars
  const Button1:React.FC<Button1Props>=({text,onClick})=>{
    return <button onClick={onClick} className="bg-[var(--orange--color)] p-4 text-white font-bold">{text}</button>
  };
  export default Button1

