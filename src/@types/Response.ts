import { ApiError } from "./ApiError";

export type Response<T>  = Promise<T & {_type: "success"} | ApiError>;