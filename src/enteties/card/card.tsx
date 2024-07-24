import React from 'react';
import { H4 } from '../../shared/ui/typography/h4';
import { Text } from '../../shared/ui/typography/text';
import { Button } from '../../shared/ui/button/button';
import { TripValue } from '../../types/trip';
import styles from './card.module.css';

interface CardProps {
  trip: TripValue;
  handleDetails: (trip: TripValue['id']) => void;
  handleEdit: (trip: TripValue['id']) => void;
  handleDelete: (tripId: TripValue['id']) => void;
}

export function Card({
  trip,
  handleDetails,
  handleEdit,
  handleDelete,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={trip.image} alt={trip.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <H4>{trip.name}</H4>
        <Text variant="normal" className={styles.introduction}>
          {trip.introduction}
        </Text>
        <div className={styles.actions}>
          <Button variant="link" onClick={() => handleDetails(trip.id)}>
            See trip details
          </Button>
          <div className={styles.subactions}>
            <Button variant="link" onClick={() => handleEdit(trip.id)}>
              Edit
            </Button>
            <Button variant="link-danger" onClick={() => handleDelete(trip.id)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
