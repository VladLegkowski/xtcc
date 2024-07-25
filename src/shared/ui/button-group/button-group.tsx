import React from 'react';
import { TripFilters } from '../../../types/trip';
import styles from './button-group.module.css';

type ButtonGroupProps = {
  children: React.ReactNode;
  className?: string;
  value: TripFilters;
  onClick: (value: number) => void;
};

export function ButtonGroup(props: ButtonGroupProps) {
  const { children, className = '', value, onClick } = props;

  return (
    <div className={`${styles.buttonGroup} ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (
          React.isValidElement<React.HTMLAttributes<HTMLButtonElement>>(child)
        ) {
          let positionClass = '';
          if (index === 0) {
            positionClass = styles.first;
          } else if (index === React.Children.count(children) - 1) {
            positionClass = styles.last;
          }

          return React.cloneElement(child, {
            className: `${child.props.className || ''} ${styles.groupButton} ${positionClass}`,
            active: index === value,
            onClick: () => onClick(index),
          });
        }
        return child;
      })}
    </div>
  );
}
