import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { SearchBar } from './search-bar';
describe('SearchBar', () => {
  const setup = (onClick = jest.fn()) => {
    const utils = render(<SearchBar onClick={onClick} />);
    const input = screen.getByLabelText('search-bar-input');
    const form = screen.getByRole('search');
    const button = screen.getByRole('button', { name: /search/i });
    return {
      input,
      form,
      button,
      onClick,
      ...utils,
    };
  };

  test('check search value', async () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'Portugal' } });
    expect(input.value).toBe('Portugal');
  });

  test('submit dispatched and onClick called with correct value', async () => {
    const { input, form, onClick } = setup();

    fireEvent.change(input, { target: { value: 'Portugal' } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(onClick).toHaveBeenCalledWith('Portugal');
    });
  });

  test('submit triggered by clicking the search button', async () => {
    const { input, button, onClick } = setup();
    fireEvent.change(input, { target: { value: 'Spain' } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledWith('Spain');
    });
  });
});
