import { Trip } from '../types/trip';

const API_URL = 'http://localhost:3000/travels';

export async function getTrips(): Promise<Trip[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch trips');
  }
  return response.json();
}

export async function getTrip(id: string | undefined): Promise<Trip> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch trip');
  }
  return response.json();
}

export async function createTrip(tripData: Trip): Promise<Trip> {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tripData),
  });

  if (!response.ok) {
    throw new Error('Failed to create trip');
  }

  return response.json();
}

export async function updateTrip(tripData: Trip): Promise<Trip> {
  const response = await fetch(`${API_URL}/${tripData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tripData),
  });

  if (!response.ok) {
    throw new Error('Failed to update trip');
  }

  return response.json();
}

export async function deleteTrip(id: string): Promise<void> {
  console.log('delete', id);
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete trip');
  }
}
