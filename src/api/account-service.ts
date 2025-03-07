import { Account } from "@/@types/Account"
import { api } from "./api"
import { Response } from "@/@types/Response"
import { AxiosError } from "axios"
import { ApiError, CommonError, ValidationError } from "@/@types/ApiError"

export type CreateAccount = {
  email: string,
  password: string
}

export async function createAccount(
  createAccount: CreateAccount
): Response<Account> {
  try {
    const response = await api.post<Account>("/account", createAccount);
    return {...response.data, _type: "success"};
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;

    if (axiosError.status == 400) {
      return {
        ...axiosError.response!.data, 
        _type: "validationError"
      } as ValidationError
    }

    return {
      ...axiosError.response!.data,
       _type: "commonError"
    } as CommonError
  }
  
}