import React from 'react';
import { Button } from '../../shared/ui/button/button';
import { TextInput } from '../../shared/ui/form/text-input';

type SearchBarProps = {
  onClick: (value: string) => void;
};
export function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = React.useState('');
  const { onClick } = props;
  return (
    <TextInput
      value={searchValue}
      onChange={setSearchValue}
      placeholder="Search trips"
      id="search-bar-input"
    >
      <Button icon="search" size="small" onClick={() => onClick(searchValue)}>
        Search
      </Button>
    </TextInput>
  );
}
