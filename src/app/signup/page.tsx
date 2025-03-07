"use client"

import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createAccount } from "@/api/account-service";
import {toast} from "react-toastify"

type AccountForm = {
  email: string,
  password: string,
  confirmPassword: string
}



export default function Signup() {

  const [accountForm, setAccountForm] = useState<AccountForm>({
    email: "",
    password: "",
    confirmPassword: ""
  })

  

  async function onClickCreateAccount(form: AccountForm) {

    if(form.password !== form.confirmPassword) {
      alert("Password mismatch!");
      return
    }

    const response = await createAccount(accountForm);

    if (response._type == "validationError") {
      return response.message.forEach(message => {
        toast.warning(message, {theme: "dark"});
      })
    }

    if(response._type == "commonError") {
      return toast.error("Oops! An Error occurred.");
    }

    toast.success("User successfully created!")
  }
  

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
        value={accountForm.email}
        onChange={e => setAccountForm({...accountForm, email: e.target.value})}
        />
        <Input
        label="Password"
        placeholder="password"
        type="password"
        value={accountForm.password}
        onChange={e => setAccountForm({...accountForm, password: e.target.value})}
        />
        <Input
        label="Confirm password"
        placeholder="confirm password"
        type="password"
        value={accountForm.confirmPassword}
        onChange={e => setAccountForm({...accountForm, confirmPassword: e.target.value})}
        />
        <Button
        className="w-full mt-3"
        onClick={() => onClickCreateAccount(accountForm)}>
          Create account
        </Button>
        <p className="text-sm sm:text-base">Alrealdy have an account? <Link className="text-secondary" href={"/login"}>Login</Link></p>
      </div>
    </div>
    
    
  )
}