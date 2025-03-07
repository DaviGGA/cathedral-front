export type ValidationError = {
  _type: "validationError"
  message: string[],
  error: string,
  statusCode: number
}

export type CommonError = {
  _type: "commonError",
  message: string,
  statusCode: number
}

export type ApiError = ValidationError | CommonError;