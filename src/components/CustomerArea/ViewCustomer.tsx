import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';


export default function ViewCustomer() {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        id: ""
    });

    const {id} = useParams();

    useEffect(() => {
        loadUser();
    }, []);


    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/customer/${id}`)
        setUser(result.data)
    }


    return (<div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-1'>Customer Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of customer id: {user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Name: </b>
                                    {user.first_name}
                                </li>
                                <li className='list-group-item'>
                                    <b>Last Name: </b>
                                    {user.last_name}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email: </b>
                                    {user.email}
                                </li>
                                <br/>
                            </ul>
                        </div>

                    </div>
                    <Link className='btn btn-outline-primary my-2' to={"/"}>Back to Home customer</Link>
                </div>
            </div>
        </div>

    );
}
