import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artworks from './pages/Artworks';
import NotFound from './pages/NotFound';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artworks" element={<Artworks />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
    );
};

export default App;
