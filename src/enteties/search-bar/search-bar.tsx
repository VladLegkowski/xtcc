import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../shared/ui/button/button';
import { TextInput } from '../../shared/ui/form/text-input';

type SearchBarProps = {
  onClick: (value: string) => void;
};

export function SearchBar({ onClick }: SearchBarProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { searchValue: string }) => {
    onClick(data.searchValue);
  };

  return (
    <form role="search" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register('searchValue')}
        placeholder="Search trips"
        id="search-bar-input"
        aria-label="search-bar-input"
      >
        <Button icon="search" size="small" type="submit">
          Search
        </Button>
      </TextInput>
    </form>
  );
}
