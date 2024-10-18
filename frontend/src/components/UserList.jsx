import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log('Error fetching users', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Lista de Usuarios</h2>
            <ul className="list-group">
                {users.map((user, index) => (
                    <li key={index} className="list-group-item">
                        {user.name} - {user.age} años - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
