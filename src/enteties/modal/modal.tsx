import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../shared/ui/button/button';
import styles from './modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal(props: ModalProps) {
  const { isOpen, onClose, children } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        <div className={styles.modalHeader}>
          <Button
            variant="link"
            onClick={onClose}
            className={styles.closeButton}
          >
            &times;
          </Button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
