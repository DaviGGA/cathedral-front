import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props =  React.ComponentPropsWithoutRef<'input'> & {label?: string};

const inputClass = "bg-gray-100 rounded-md placeholder-gray-500 p-2 text-black "

export function Input({label, ...props}: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-xs" htmlFor={props.id}>{label}</label>}
      <input {...props} className={twMerge(props.className, inputClass)}/>
    </div>
  )
}