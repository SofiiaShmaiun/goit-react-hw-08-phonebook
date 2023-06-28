import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';

export const Navigation = () => {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 10px' }}>
      <SharedLayout />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
