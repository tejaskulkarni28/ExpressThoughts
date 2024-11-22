import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewThoughts from './components/ViewThoughts';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
function App() {
  const isAuthenticated = true;
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/*Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/*Protected Routes*/}
          <Route path="/" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} >
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/my-thoughts' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ViewThoughts/>
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
