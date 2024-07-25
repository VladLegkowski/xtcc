import { Trip } from '../types/trip';

const API_URL = 'http://localhost:3000/travels';

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
}

async function apiCall<T>(
  url: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error ? error : new Error('An unknown error occurred'),
    };
  }
}

export async function getTrips(): Promise<ApiResponse<Trip[]>> {
  return apiCall<Trip[]>(API_URL);
}

export async function getTrip(
  id: string | undefined,
): Promise<ApiResponse<Trip>> {
  return apiCall<Trip>(`${API_URL}/${id}`);
}

export async function createTrip(tripData: Trip): Promise<ApiResponse<Trip>> {
  return apiCall<Trip>(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tripData),
  });
}

export async function updateTrip(tripData: Trip): Promise<ApiResponse<Trip>> {
  return apiCall<Trip>(`${API_URL}/${tripData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tripData),
  });
}

export async function deleteTrip(id: string): Promise<ApiResponse<void>> {
  return apiCall<void>(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}
