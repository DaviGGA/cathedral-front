import Image from "next/image"
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StartLogin() {
  return (
    <div className="flex flex-col w-3/4 mx-auto items-center gap-10 mt-[156px]">
      <Image
      src={logo}
      height={400}
      alt="Cathedral Logo"
      />
      <h1 className="font-bold text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl">CATHEDRAL FINANCES</h1>
      <Link className="w-1/3" href={"/login"}>
        <Button className="w-full mt-10 text-4xl">Login</Button>
      </Link>
    </div>
  )
}