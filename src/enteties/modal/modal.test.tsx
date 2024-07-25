import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Modal } from './modal';

describe('Modal Component', () => {
  it('renders when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen onClose={() => {}}>
        modal content
      </Modal>,
    );
    expect(getByText('modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        modal content
      </Modal>,
    );
    expect(queryByText('modal content')).not.toBeInTheDocument();
  });

  it('handles onClose when a keydown event (Escape) is dispatched', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal isOpen onClose={onClose}>
        modal content
      </Modal>,
    );
    fireEvent.keyDown(container, { key: 'Escape', code: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
