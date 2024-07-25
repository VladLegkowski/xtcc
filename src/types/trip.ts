export type Itinerary = {
  day: number;
  location: string;
  description: string;
};

export type Trip = {
  id: string;
  photo_url: string;
  title: string;
  status: 'todo' | 'done';
  description: string;
  itinerary: Itinerary[];
};

export enum TripFilters {
  All = 0,
  Upcoming = 1,
  Completed = 2,
}
