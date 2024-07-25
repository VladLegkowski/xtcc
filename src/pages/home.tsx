import React, { useMemo, useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { deleteTrip } from '../api/trips';
import { Card } from '../enteties/card/card';
import { Header } from '../enteties/header/header';
import { SearchBar } from '../enteties/search-bar/search-bar';
import { ButtonGroup } from '../shared/ui/button-group/button-group';
import { Button } from '../shared/ui/button/button';
import { H1 } from '../shared/ui/typography/h1';
import { H5 } from '../shared/ui/typography/h5';
import { TripFilters, Trip } from '../types/trip';
import { filterTrips } from '../utils/utils';
import styles from './home.module.css';

function Home() {
  const navigate = useNavigate();
  const trips = useLoaderData() as Trip;
  const [searchValue, setSearchValue] = useState<string>('');
  const [filter, setFilter] = React.useState<TripFilters>(TripFilters.All);

  const handleDelete = async (tripId: Trip['id']) => {
    try {
      await deleteTrip(tripId);
      navigate('.');
    } catch (error) {
      console.error(error);
    }
  };

  const filteredTrips = useMemo(() => {
    const allTrips = Object.values(trips);
    const searchFiltered = filterTrips(allTrips, searchValue);

    switch (filter) {
      case TripFilters.Upcoming:
        return searchFiltered.filter((t) => t.status === 'todo');
      case TripFilters.Completed:
        return searchFiltered.filter((t) => t.status === 'done');
      default:
        return searchFiltered;
    }
  }, [searchValue, filter, trips]);

  return (
    <div className={styles.homePage}>
      <Header onCreateNewTrip={() => navigate(`/create-trip`)} />
      <H1>The places you dream of</H1>
      <H5>Let’s live new adventures</H5>
      <SearchBar onClick={setSearchValue} />
      <ButtonGroup value={filter} onClick={setFilter}>
        <Button>All</Button>
        <Button>Upcoming</Button>
        <Button>Completed</Button>
      </ButtonGroup>
      {filteredTrips.map((t) => (
        <Card
          key={t.id}
          trip={t}
          handleDetails={(tripId) => navigate(`/trip/${tripId}`)}
          handleEdit={(tripId) => navigate(`/edit-trip/${tripId}`)}
          handleDelete={handleDelete}
        />
      ))}
      <Outlet />
    </div>
  );
}

export default Home;
