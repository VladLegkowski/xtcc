export type Itinerary = {
  day: number;
  location: string;
  description: string;
};

export type TripValue = {
  id: string;
  image: string;
  name: string;
  completed: boolean;
  introduction: string;
  description: string;
  itinerary: Itinerary[];
};

export type Trip = {
  [key: string]: TripValue;
};

export enum TripFilters {
  All = 0,
  Upcoming = 1,
  Completed = 2,
}
