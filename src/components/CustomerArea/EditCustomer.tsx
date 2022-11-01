import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';


export default function EditCustomer() {

    let navigate = useNavigate();

    const {id} = useParams();

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const {first_name, last_name, email, password} = user;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});

    }

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axios.put(`http://localhost:8080/customer/${id}`, user);
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/customer/${id}`)
        setUser(result.data)
    }


    return (<div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-1'>Edit Customer</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-1'>
                            <label htmlFor='First_name' className='form-label'>
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter your first name'
                                name='first_name'
                                value={first_name}
                                onChange={(e) => onInputChange(e)}
                            />

                        </div>
                        <div className='mb-1'>
                            <label htmlFor='Last_name' className='form-label'>
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter your last name'
                                name='last_name'
                                value={last_name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor='Email' className='form-label'>
                            </label>
                            <input
                                type={"email"}
                                className="form-control"
                                placeholder='Enter your E-mail'
                                name='email'
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor='Password' className='form-label'>
                            </label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder='Enter your password'
                                name='password'
                                value={password}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button type='submit' className='btn btn-outline-primary'>
                            Submit
                        </button>
                        <Link className='btn btn-outline-danger mx-2' to="/">
                            Cancel
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    );
}
