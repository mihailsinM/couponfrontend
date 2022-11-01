import React, {useEffect, useState} from 'react';
import axios from 'axios';
import appConfig from '../Util/Config';
import {Link} from 'react-router-dom';

export default function HomeCustomer() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(appConfig.ccustomerGetAllUrl);
        setUsers(result.data);
    };

    const deleteUser = async (id: string) => {
        await axios.delete(`http://localhost:8080/customer/${id}`);
        await loadUsers();
    };

    return (
        <div className="container">
            <div className='py-4'>
                <table className="table border shadow">

                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        users.map((user, id) => (
                            <tr key={id}>
                                <th scope="row">{id + 1}</th>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/customer/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mx-2" to={`/editcustomer/${user.id}`}>Edit</Link>
                                    <button className="btn btn-danger mx-2" onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>

                </table>
            </div>
        </div>
    )
}
