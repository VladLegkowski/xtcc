import React from 'react';
import { App } from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test', () => {
  const app = <App />;
  it('test 1', () => {
    render(app);
    expect(screen.queryByText(/apps by host/i)).toBeInTheDocument();
  });
});
