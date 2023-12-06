export type Nullable<T> = T | null;

export type ValidationErrors = {
  path: string;
  message: string;
}[];
