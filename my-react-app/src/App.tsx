import React, { Suspense } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

const MainPage = lazy(() => import('./pages/MainPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Page404 = lazy(() => import('./pages/Page404'));
const FormPage = lazy(() => import('./pages/FormPage'));

function App() {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
