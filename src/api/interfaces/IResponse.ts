export interface IResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
}