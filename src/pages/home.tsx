import React, { useMemo, useState } from 'react';
import { Card } from '../enteties/card/card';
import { Header } from '../enteties/header/header';
import { Modal } from '../enteties/modal/modal';
import { SearchBar } from '../enteties/search-bar/search-bar';
import { TripView } from '../enteties/trip-view/trip-view';
import { ButtonGroup } from '../shared/ui/button-group/button-group';
import { Button } from '../shared/ui/button/button';
import { H1 } from '../shared/ui/typography/h1';
import { H5 } from '../shared/ui/typography/h5';
import { Trip, TripFilters, TripValue } from '../types/trip';
import { filterTrips } from '../utils/utils';
import styles from './home.module.css';

export const sampleTrips: Trip = {
  qwjoiedjq0w102: {
    id: 'qwjoiedjq0w102',
    image:
      'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    name: 'Portugal',
    completed: false,
    introduction:
      "Classic tour of Portugal's vibrant cities and cultural heritage, including Lisbon, Porto, Fatima and the flamboyant architecture of Sintra.",
    description:
      'Be captivated by the vibrant cities of Portugal on a spellbinding journey through its most inspiring destinations. Explore the lively neighborhoods of Lisbon and the fairytale castles of Sintra before traveling to the holy city of Fatima, filled with enigmatic spiritual landmarks. Finally, uncover the heart of Porto, known for its delicious wine and colorful buildings.',
    itinerary: [
      {
        day: 1,
        location: 'Lisbon',
        description:
          'Explore the oldest parts of the city to admire the ornate architecture or simply enjoy the views of the River Tagus from one of the many riverside cafes and bars.',
      },
      {
        day: 2,
        location: 'Sintra',
        description:
          'Excursion to Sintra, an unforgettable town and UNESCO World Heritage Site, filled with 19th-century Romanticist architecture, fairytale castles and exquisite gardens.',
      },
      {
        day: 3,
        location: 'Obidos',
        description:
          'One of the best-known villages in Portugal thanks to its magical cobblestone streets and charming architecture, enclosed within medieval city walls. Next, visit Nazare, a surfers paradise, home to some of the largest waves in the world.',
      },
      {
        day: 4,
        location: 'Porto',
        description:
          'Uncover the history of the Templars in Portugal, including the beautiful medieval chapel and the ornate cloister, a masterpiece of Renaissance architecture. Explore this fascinating UNESCO World Heritage site before continuing to the city of Coimbra.',
      },
    ],
  },
  qw9eiq0wie1i23112: {
    id: 'qw9eiq0wie1i23112',
    image:
      'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    name: 'Norway',
    completed: false,
    introduction:
      'Lose yourself in the magical beauty of the natural wonders Norway has to offer; from colossal Nordic landscapes such as the otherworldly Fjord of Dreams.',
    description:
      "Embark on an unforgettable journey through Norway's breathtaking landscapes. From the vibrant city of Oslo to the serene beauty of the fjords, experience the unique blend of urban culture and natural wonders. Explore picturesque villages, witness the Northern Lights, and indulge in the rich Viking history that shapes this remarkable country.",
    itinerary: [
      {
        day: 1,
        location: 'Oslo',
        description:
          'Begin your Norwegian adventure in the capital city. Visit the Viking Ship Museum and stroll through the sculpture-filled Vigeland Park.',
      },
      {
        day: 2,
        location: 'Bergen',
        description:
          'Travel to Bergen, the gateway to the fjords. Explore the colorful Bryggen district, a UNESCO World Heritage site, and take the funicular to Mount Fløyen for panoramic views.',
      },
      {
        day: 3,
        location: 'Geirangerfjord',
        description:
          'Journey to the stunning Geirangerfjord, another UNESCO site. Take a fjord cruise to see the Seven Sisters waterfall and enjoy the dramatic scenery.',
      },
      {
        day: 4,
        location: 'Tromsø',
        description:
          "Fly to Tromsø, located in the Arctic Circle. Visit the Arctic Cathedral and, if you're lucky, witness the mesmerizing Northern Lights.",
      },
    ],
  },
  qweqw0ei10021293dsa: {
    id: 'qweqw0ei10021293dsa',
    image:
      'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    name: 'Vietnam & Cambodia',
    completed: true,
    introduction:
      'A fascinating journey of discovery through Vietnam, Cambodia and Thailand!',
    description:
      'Immerse yourself in the rich cultures and stunning landscapes of Southeast Asia. From the bustling streets of Hanoi to the ancient temples of Angkor Wat, this journey takes you through the heart of Vietnam and Cambodia. Experience the vibrant local markets, serene rice paddies, and the warmth of the local people in this unforgettable adventure.',
    itinerary: [
      {
        day: 1,
        location: 'Hanoi, Vietnam',
        description:
          'Arrive in Hanoi and explore the Old Quarter. Visit the Temple of Literature and enjoy a traditional water puppet show.',
      },
      {
        day: 2,
        location: 'Ha Long Bay, Vietnam',
        description:
          'Cruise through the emerald waters of Ha Long Bay, a UNESCO World Heritage site. Explore limestone caves and enjoy fresh seafood on board.',
      },
      {
        day: 3,
        location: 'Hoi An, Vietnam',
        description:
          'Fly to Hoi An, a charming ancient town. Walk through the narrow streets, visit the Japanese Covered Bridge, and enjoy a cooking class.',
      },
      {
        day: 4,
        location: 'Siem Reap, Cambodia',
        description:
          'Travel to Siem Reap, the gateway to Angkor. Watch the sunset over the majestic Angkor Wat temple complex.',
      },
      {
        day: 5,
        location: 'Angkor, Cambodia',
        description:
          'Spend a full day exploring the Angkor Archaeological Park, including Angkor Thom and the Ta Prohm temple.',
      },
    ],
  },
};
function Home() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [filter, setFilter] = React.useState<TripFilters>(TripFilters.All);
  const [selectedTripId, setSelectedTripId] = React.useState<
    TripValue['id'] | null
  >(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTripId(null);
  };
  const handleCreateNewTrip = () => {
    openModal();
  };

  const handleDetails = (tripId: TripValue['id']) => {
    setSelectedTripId(tripId);
    openModal();
  };

  const handleEdit = (tripId: TripValue['id']) => {
    console.log('Edit', tripId);
    // Implement logic to edit trip
  };

  const handleDelete = (tripId: TripValue['id']) => {
    console.log('Delete', tripId);
    // Implement logic to delete trip
  };

  const filteredTrips = useMemo(() => {
    const allTrips = Object.values(sampleTrips);
    const searchFiltered = filterTrips(allTrips, searchValue);

    switch (filter) {
      case TripFilters.Upcoming:
        return searchFiltered.filter((trip) => !trip.completed);
      case TripFilters.Completed:
        return searchFiltered.filter((trip) => trip.completed);
      default:
        return searchFiltered;
    }
  }, [searchValue, filter]);

  const selectedTrip = selectedTripId ? sampleTrips[selectedTripId] : null;

  return (
    <div className={styles.homePage}>
      <Header onCreateNewTrip={handleCreateNewTrip} />
      <H1>The places you dream of</H1>
      <H5>Let’s live new adventures</H5>
      <SearchBar onClick={setSearchValue} />
      <ButtonGroup value={filter} onClick={setFilter}>
        <Button>All</Button>
        <Button>Upcoming</Button>
        <Button>Completed</Button>
      </ButtonGroup>
      {filteredTrips.map((trip) => (
        <Card
          key={trip.id}
          trip={trip}
          handleDetails={handleDetails}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedTrip && (
          <TripView
            trip={selectedTrip}
            onMarkAsCompleted={() => console.log('MarkAsCompleted')}
          />
        )}
      </Modal>
    </div>
  );
}

export default Home;
