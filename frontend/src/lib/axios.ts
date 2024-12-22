import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.backend_url || "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

// エラーハンドリングのインターセプター
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  },
);

// orval用のmutator関数
export const apiClient = <T>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return axiosInstance(config);
};

export default axiosInstance;
