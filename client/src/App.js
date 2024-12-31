import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewThoughts from './components/ViewThoughts';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const isAuthenticated = true;
  // const isAuthenticated = useSelector(state=>state.loginAuthReducer.isAuthenticated)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/*Protected Routes*/}
          <Route path="/" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} >
              <NavBar />
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/my-thoughts' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
            <NavBar />
            <ViewThoughts/>
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
