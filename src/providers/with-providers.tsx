import React, { Suspense } from 'react';
import compose from 'compose-function';
import { ErrorBoundary } from 'react-error-boundary';

const providers = (component: () => React.ReactNode) => () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>{component()}</Suspense>;
    </ErrorBoundary>
  );
};
export const withProviders = compose(providers);
