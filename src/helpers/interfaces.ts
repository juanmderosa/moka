export interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormValuesError {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}
