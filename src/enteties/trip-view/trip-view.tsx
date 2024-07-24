import React from 'react';
import { TripValue } from '../../types/trip';
import { H1 } from '../../shared/ui/typography/h1';
import { Text } from '../../shared/ui/typography/text';
import { Button } from '../../shared/ui/button/button';
import styles from './trip-view.module.css';

interface TripViewProps {
  trip: TripValue;
  onMarkAsCompleted: (tripId: string) => void;
}

export function TripView({ trip, onMarkAsCompleted }: TripViewProps) {
  return (
    <div className={styles.tripView}>
      <img src={trip.image} alt={trip.name} className={styles.image} />
      <H1>{trip.name}</H1>
      {!trip.completed && (
        <Button
          variant="link"
          onClick={() => onMarkAsCompleted(trip.id)}
          disabled={trip.completed}
        >
          Mark as completed ☑️
        </Button>
      )}
      <Text variant="normal" className={styles.introduction}>
        {trip.introduction}
      </Text>
      <Text variant="normal" className={styles.description}>
        {trip.description}
      </Text>
      <h2 className={styles.itineraryTitle}>Itinerary</h2>
      <ul className={styles.itinerary}>
        {trip.itinerary.map((item) => (
          <li key={item.day} className={styles.itineraryItem}>
            <h3 className={styles.itineraryDay}>
              Day {item.day}: {item.location}
            </h3>
            <Text variant="normal">{item.description}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}
