import { TripValue } from '../types/trip';

export const filterTrips = (
  trips: TripValue[],
  search: string,
): TripValue[] => {
  if (!search) return trips;

  const lowercasedSearch = search.toLowerCase();
  return trips.filter(
    (trip) =>
      trip.name.toLowerCase().includes(lowercasedSearch) ||
      trip.introduction.toLowerCase().includes(lowercasedSearch) ||
      trip.description.toLowerCase().includes(lowercasedSearch) ||
      trip.itinerary.some(
        (item) =>
          item.location.toLowerCase().includes(lowercasedSearch) ||
          item.description.toLowerCase().includes(lowercasedSearch),
      ),
  );
};
