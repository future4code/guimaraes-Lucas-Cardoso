import GlobalStyle from './globalStyles'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AdminHomePage from './pages/AdminHomePage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import CreateTripPage from './pages/CreateTripPage';
import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPage';
import LoginPage from './pages/LoginPage';
import TripDetailsPage from './pages/TripDetailsPage';
import { useState } from 'react';
import Footer from './components/Footer';

const ContentContainer = styled.div`
  min-height: calc(100vh - 60px);
  padding-top: 60px;
`

const App = () => {
  return (
    <>
    <GlobalStyle />

    <BrowserRouter>
      <Header />
      <ContentContainer>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/trips/list" element={<ListTripsPage />} />
          <Route path="/trips/application" element={<ApplicationFormPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/trips/list" element={<AdminHomePage />} />
          <Route path="/admin/trips/create" element={<CreateTripPage />} />
          <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
