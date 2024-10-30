import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddThought from './components/AddThought';
import ThoughtsLayout from './layouts/ThoughtsLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/thoughts' element={<ThoughtsLayout/>} />
        </Routes>
    </BrowserRouter>
);
