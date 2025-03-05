import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

const btnClass = "bg-white rounded-2xl text-primary font-bold p-4 cursor-pointer hover:opacity-90 transition duration-200"

export function Button({children, ...props}: Props) {


  return(
    <button {...props} className={twMerge(props.className, btnClass)}>
      {children}
    </button>
  )
}