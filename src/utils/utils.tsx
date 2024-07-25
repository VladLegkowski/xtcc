import { Itinerary, Trip } from '../types/trip';

export const filterTrips = (
  trips: (string | Itinerary[] | 'todo' | 'done')[],
  search: string,
): Trip[] => {
  if (!search) return trips;

  const lowercasedSearch = search.toLowerCase();
  return trips.filter(
    (trip) =>
      trip.title.toLowerCase().includes(lowercasedSearch) ||
      trip.description.toLowerCase().includes(lowercasedSearch) ||
      trip.itinerary.some(
        (item) =>
          item.location.toLowerCase().includes(lowercasedSearch) ||
          item.description.toLowerCase().includes(lowercasedSearch),
      ),
  );
};
