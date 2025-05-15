import { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export interface ResponseErrorAPI {
  message: string;
  errors?: string[] | string;
}

export interface RequestConfig<D = unknown> extends AxiosRequestConfig<D> {
  skipAuth?: boolean;
}

export interface CustomInternalAxiosRequestConfig
  extends InternalAxiosRequestConfig {
  skipAuth?: boolean;
}
