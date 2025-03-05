import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex flex-col gap-5 w-3/4 2xl:w-1/3 mx-auto items-center mt-20">
      <Image
      src={logo}
      alt="Cathedral logo"
      className="w-30 h-30"
      />
      <h1 className="font-bold text-2xl sm:text-4xl">CATHEDRAL FINANCES</h1>
      <div className="w-full flex flex-col items-center gap-5 mt-5">
        <Input
        label="Email"
        placeholder="email"
        />
        <Input
        label="Password"
        placeholder="password"
        type="password"
        />
        <Link 
        className="text-secondary text-xs self-end"
        href={"/"}>
        Forgot Password?
        </Link>
        <Button className="w-full">Login</Button>
        <p className="text-sm sm:text-base">Want to create an account? <Link className="text-secondary" href={"/signup"}>Create Account</Link></p>
      </div>
    </div>
    
    
  )
}