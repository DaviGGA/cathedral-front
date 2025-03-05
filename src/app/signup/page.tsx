import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Signup() {
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
        <Input
        label="Confirm password"
        placeholder="confirm password"
        type="password"
        />
        <Button className="w-full mt-3">Create account</Button>
        <p className="text-sm sm:text-base">Alrealdy have an account? <Link className="text-secondary" href={"/login"}>Login</Link></p>
      </div>
    </div>
    
    
  )
}