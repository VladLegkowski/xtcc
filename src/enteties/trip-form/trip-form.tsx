import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm, useFieldArray } from 'react-hook-form';
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { createTrip, updateTrip } from '../../api/trips';
import { Modal } from '../modal/modal';
import { H1 } from '../../shared/ui/typography/h1';
import { H4 } from '../../shared/ui/typography/h4';
import { Trip } from '../../types/trip';
import { TextInput } from '../../shared/ui/form/text-input';
import { TextArea } from '../../shared/ui/form/text-area';
import { Button } from '../../shared/ui/button/button';
import styles from './trip-form.module.css';

export function TripForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const trip = useLoaderData() as Trip;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { register, control, handleSubmit } = useForm({
    defaultValues: trip || {
      id: '',
      title: '',
      photo_url: '',
      description: '',
      status: 'todo',
      itinerary: [{ day: 1, location: '', description: '' }],
    },
  });

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
    navigate('.');
  };

  React.useEffect(() => {
    if (
      location.pathname === '/create-trip' ||
      location.pathname === `/edit-trip/${params.id}`
    ) {
      setIsModalOpen(true);
    }
  }, [location.pathname]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'itinerary',
  });

  const onFormSubmit = async (data: Trip) => {
    try {
      await createTrip({ ...data, id: uuidv4() });
      closeModal();
    } catch (e) {
      console.log('Error submitting trip', e);
    }
  };

  const onFormEdit = async (data: Trip) => {
    try {
      await updateTrip(data);
      closeModal();
    } catch (e) {
      console.log('Error updating trip', e);
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <form
        onSubmit={handleSubmit(trip ? onFormEdit : onFormSubmit)}
        className={styles.form}
      >
        <H1>{trip ? `Edit your ${trip?.title} trip` : 'Create trip'}</H1>

        <TextInput label="Title" id="title" {...register('title')} />

        <TextInput
          label="Image URL"
          id="photo_url"
          {...register('photo_url')}
        />

        <TextArea
          label="Description"
          id="description"
          {...register('description')}
        />

        <div className={styles.itinerarySection}>
          <H4>Itinerary</H4>
          {fields.map((field, index) => (
            <div key={field.id} className={styles.itineraryItem}>
              <TextInput
                id={`itinerary.${index}.day`}
                type="number"
                {...register(`itinerary.${index}.day` as const)}
              />
              <TextInput
                label="Location"
                id={`itinerary.${index}.location`}
                {...register(`itinerary.${index}.location` as const)}
              />
              <TextArea
                label="Description"
                id={`itinerary.${index}.description`}
                {...register(`itinerary.${index}.description` as const)}
              />
              <Button
                type="button"
                onClick={() => remove(index)}
                variant="link-danger"
              >
                Remove Day
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() =>
              append({ day: fields.length + 1, location: '', description: '' })
            }
          >
            Add Day
          </Button>
        </div>

        <Button type="submit">{trip ? 'Edit trip' : 'Create trip'}</Button>
      </form>
    </Modal>
  );
}
