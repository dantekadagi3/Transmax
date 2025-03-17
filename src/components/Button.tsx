import React from "react";

interface Button1Props{
    text: string;
    onClick: () => void;
}

  const Button1:React.FC<Button1Props>=({text,onClick})=>{
    return <button onClick={onClick} className="bg-[var(--orange--color)] p-4 text-white font-bold">{text}</button>
  };
  export default Button1

