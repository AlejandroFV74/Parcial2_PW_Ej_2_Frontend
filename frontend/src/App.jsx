import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import UserList from './components/UserList';

const App = () => {
    return (
        <Router>
            <div className="container mt-4">
                <nav>
                    <Link to="/" className="btn btn-primary me-2">Registrar Usuario</Link>
                    <Link to="/users" className="btn btn-secondary">Ver Usuarios</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<RegisterUser />} />
                    <Route path="/users" element={<UserList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
