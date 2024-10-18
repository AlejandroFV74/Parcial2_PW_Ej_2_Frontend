import React, { useState } from 'react';

const RegisterUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, age, email };

        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setName('');
                setAge('');
                setEmail('');
            } else {
                setMessage(data.error);
            }
        } catch (error) {
            setMessage("Error al registrar el usuario");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Registrar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Edad</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required />
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
        </div>
    );
};

export default RegisterUser;
