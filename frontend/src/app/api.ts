import type { Todo } from "@/types/api";

export const getTodos = async (): Promise<Todo[]> => {
	try {
		const res = await fetch(`${process.env.BACKEND_URL}/api/todos`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Failed to fetch todos:", error);
		return [];
	}
};
