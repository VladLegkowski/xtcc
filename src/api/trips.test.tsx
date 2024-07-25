import { getTrips, getTrip, createTrip, updateTrip, deleteTrip } from './trips';
import { Trip, Itinerary } from '../types/trip';

global.fetch = jest.fn();

const mockItinerary: Itinerary[] = [
  {
    day: 1,
    location: 'Lisbon',
    description: 'Explore the Alfama neighborhood and visit São Jorge Castle.',
  },
  {
    day: 2,
    location: 'Lisbon',
    description:
      'Visit the Jerónimos Monastery and the Monument to the Discoveries.',
  },
];

const mockTrip: Trip = {
  id: '1',
  title: 'Portugala',
  description:
    'Embark on a journey through Portugal, where the charming streets of Lisbon captivate you, the golden beaches of the Algarve await, and Portuguese cuisine delights with authentic flavors. Explore castles in Sintra and create unforgettable memories in this destination full of history and beauty. Portugal invites you to experience something truly unique!',
  photo_url:
    'https://a.cdn-hotels.com/gdcs/production82/d1923/447a348f-f875-4885-b00a-e9a90603fef5.jpg',
  status: 'todo',
  itinerary: mockItinerary,
};

const mockTrips: Trip[] = [
  mockTrip,
  {
    id: '2',
    photo_url: 'https://example.com/london.jpg',
    title: 'London Excursion',
    status: 'done',
    description: 'Exploring the streets of London',
    itinerary: [
      {
        day: 1,
        location: 'London',
        description: 'Visit Big Ben and Westminster Abbey',
      },
      { day: 2, location: 'London', description: 'Explore the British Museum' },
    ],
  },
];

describe('API Functions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getTrips', () => {
    it('should fetch trips successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockTrips),
      });

      const result = await getTrips();

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/travels',
        undefined,
      );
      expect(result).toEqual(mockTrips);
    });

    it('should return an error when fetch fails', async () => {
      const mockError = new Error('HTTP error! status: 404');
      (global.fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const result = await getTrips();

      expect(result).toEqual({ data: null, error: mockError });
    });
  });

  describe('getTrip', () => {
    it('should fetch a single trip successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockTrip),
      });

      const result = await getTrip('1');

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/travels/1',
        undefined,
      );
      expect(result).toEqual(mockTrip);
    });

    it('should return an error when fetch fails', async () => {
      const mockError = new Error('HTTP error! status: 404');
      (global.fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const result = await getTrip('1');

      expect(result).toEqual({ data: null, error: mockError });
    });
  });

  describe('createTrip', () => {
    it('should create a trip successfully', async () => {
      const newTrip: Trip = {
        id: '1',
        title: 'Portugal',
        description:
          'Embark on a journey through Portugal, where the charming streets of Lisbon captivate you, the golden beaches of the Algarve await, and Portuguese cuisine delights with authentic flavors. Explore castles in Sintra and create unforgettable memories in this destination full of history and beauty. Portugal invites you to experience something truly unique!',
        photo_url:
          'https://a.cdn-hotels.com/gdcs/production82/d1923/447a348f-f875-4885-b00a-e9a90603fef5.jpg',
        status: 'todo',
        itinerary: mockItinerary,
      };
      const createdTrip: Trip = { ...newTrip, id: '3' };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(createdTrip),
      });

      const result = await createTrip(newTrip);

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/travels',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTrip),
        },
      );
      expect(result).toEqual(createdTrip);
    });

    it('should return an error when creation fails', async () => {
      const mockError = new Error('HTTP error! status: 400');
      (global.fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const result = await createTrip(mockTrip);

      expect(result).toEqual({ data: null, error: mockError });
    });
  });

  describe('updateTrip', () => {
    it('should update a trip successfully', async () => {
      const updatedTrip: Trip = {
        ...mockTrip,
        title: 'Updated Paris Adventure',
      };
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(updatedTrip),
      });

      const result = await updateTrip(updatedTrip);

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/travels/1',
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTrip),
        },
      );
      expect(result).toEqual(updatedTrip);
    });

    it('should return an error when update fails', async () => {
      const mockError = new Error('HTTP error! status: 400');
      (global.fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const result = await updateTrip(mockTrip);

      expect(result).toEqual({ data: null, error: mockError });
    });
  });

  describe('deleteTrip', () => {
    it('should delete a trip successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({}),
      });

      const result = await deleteTrip('1');

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/travels/1',
        {
          method: 'DELETE',
        },
      );
      expect(result).toEqual({});
    });

    it('should return an error when deletion fails', async () => {
      const mockError = new Error('HTTP error! status: 404');
      (global.fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const result = await deleteTrip('1');

      expect(result).toEqual({ data: null, error: mockError });
    });
  });
});
