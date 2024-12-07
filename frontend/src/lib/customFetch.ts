type CustomFetchParams = {
  url: string;
  method: string;
  headers?: HeadersInit;
  params?: Record<string, string>;
  data?: unknown;
  signal?: AbortSignal;
};

export const customFetch = async <T>({
  url,
  method,
  headers = {},
  params,
  data,
}: CustomFetchParams): Promise<T> => {
  try {
    // URLSearchParamsの構築
    const queryParams = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";

    const baseUrl = process.env.BACKEND_URL || "http://localhost:3001";
    const fullUrl = `${baseUrl}${url}${queryParams}`;

    const response = await fetch(fullUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result as T;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};
