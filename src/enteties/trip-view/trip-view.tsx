import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { H1 } from '../../shared/ui/typography/h1';
import { Text } from '../../shared/ui/typography/text';
import { Button } from '../../shared/ui/button/button';
import { Modal } from '../modal/modal';
import styles from './trip-view.module.css';

export function TripView() {
  const trip = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(`/`);
  };

  React.useEffect(() => {
    if (params.id) {
      setIsModalOpen(true);
    }
  }, [params.id]);

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className={styles.tripView}>
        <img src={trip.photo_url} alt={trip.title} className={styles.image} />
        <H1>{trip.title}</H1>
        {trip.status === 'todo' && (
          <Button variant="link" disabled={trip.status === 'completed'}>
            Mark as completed ☑️
          </Button>
        )}
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
    </Modal>
  );
}
