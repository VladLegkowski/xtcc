import React, { Suspense } from 'react';
import compose from 'compose-function';

const providers = (component: () => React.ReactNode) => () => {
  return <Suspense fallback={<div>Loading...</div>}>{component()}</Suspense>;
};
export const withProviders = compose(providers);
