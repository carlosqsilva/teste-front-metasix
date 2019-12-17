import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

api.defaults.headers.common["X-Parse-Application-Id"] = "br.com.metasix.poc";

export function Get<T>(url: string, config?: AxiosRequestConfig) {
  return api.get<any, AxiosResponse<T>>(url, config);
}
