import React from 'react';
import { H4 } from '../../shared/ui/typography/h4';
import { Text } from '../../shared/ui/typography/text';
import { Button } from '../../shared/ui/button/button';
import { Trip } from '../../types/trip';
import styles from './card.module.css';

type CardProps = {
  trip: Trip;
  handleDetails: (trip: Trip['id']) => void;
  handleEdit: (trip: Trip['id']) => void;
  handleDelete: (tripId: Trip['id']) => void;
};

export function Card(props: CardProps) {
  const { trip, handleDetails, handleEdit, handleDelete } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={trip.photo_url} alt={trip.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <H4>{trip.title}</H4>
        <Text variant="normal" className={styles.introduction}>
          {`${trip.description.split('.')[0]}.`}
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
