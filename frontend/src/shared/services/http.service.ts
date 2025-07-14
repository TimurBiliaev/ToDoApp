export const API_URL = process.env.REACT_APP_API_URL

export async function post<T>(endpoint: string, data: unknown): Promise<T> {
	console.log("FULL URL:", `${API_URL}${endpoint}`); 

	const res = await fetch(`${API_URL}${endpoint}`, {
		 method: 'POST',
		 headers: {
			 'Content-Type': 'application/json',
		 },
		 body: JSON.stringify(data),
	 });

	if (!res.ok) {
		const error = await res.json();
		throw new Error(error.message || "Something went wrong!")
		}

	return res.json()
}

export async function get<T>(endpoint: string, params?: Record<string, string | number>): Promise<T>{
	const query = params
		? '?' +
			new URLSearchParams(
				Object.fromEntries(
					Object.entries(params).map(([key, value]) => [key, String(value)])
				)
			).toString()
		: '';
	
	const res = await fetch(`${API_URL}${endpoint}${query}`, {
		method: 'GET',
	})

	if (!res.ok) {
		const error = await res.json();
		throw new Error(error.message || "Something went wrong!"); 
	}

	return res.json()
}

export async function put<T>(endpoint: string, data: unknown, params?: Record<string, string | number>): Promise<T> {
	const query = params
		? '?' +
			new URLSearchParams(
				Object.fromEntries(
					Object.entries(params).map(([key, value]) => [key, String(value)])
				)
			).toString()
		: '';
	
	const res = await fetch(`${API_URL}${endpoint}${query}`, {
		method: 'PUT',
		headers: {
			 'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})

	if (!res.ok) {
		const error = await res.json();
		throw new Error(error.message || "Something went wrong!!!")
	}

	return res.json();

}	


export async function del<T>(
	endpoint: string,
	params?: Record<string, string | number | boolean>
): Promise<T> {
	const query = params
		? '?' +
			new URLSearchParams(
				Object.fromEntries(
					Object.entries(params).map(([key, value]) => [key, String(value)])
				)
			).toString()
		: '';

	const res = await fetch(`${API_URL}${endpoint}${query}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!res.ok) {
		const error = await res.json();
		throw new Error(error.message || 'Something went wrong!!!');
	}

	return res.json();
}