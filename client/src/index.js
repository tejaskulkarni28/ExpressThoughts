import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddThought from './components/AddThought';
import ViewThoughts from './components/ViewThoughts';
import Home from './pages/Home';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/my-thoughts' element={<ViewThoughts/>}/>
        </Routes>
    </BrowserRouter>
);
