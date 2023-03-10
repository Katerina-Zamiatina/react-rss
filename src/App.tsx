import React, { Suspense } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Page404 = lazy(() => import('./pages/Page404'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
}

export default App;
