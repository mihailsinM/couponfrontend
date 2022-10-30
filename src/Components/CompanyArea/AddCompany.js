import axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import appConfig from '../Util/Config';



export default function AddCompany() {

    let navigate = useNavigate();

    const [company, setCompany] = useState({
        name: "",
        email: "",
        password: ""

    });

    const { name, email, password } = company;

    const onInputChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post(appConfig.companyAddUrl, company)
        navigate("/companies");
    };


    return (<div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className=' text-center m-1'>Add Company</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-1'>
                        <label htmlFor='Name' className='form-label'>Company name.
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter company name.'
                            name='name'
                            value={name}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor='Email' className='form-label'>E-maill
                        </label>
                        <input
                            type={"email"}
                            className="form-control"
                            placeholder='Enter E-mail'
                            name='email'
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Password' className='form-label'>Password.
                        </label>
                        <input
                            type={"password"}
                            className="form-control"
                            placeholder='Enter password.'
                            name='password'
                            value={password}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>

                    <button type='submit' className='btn btn-outline-primary'>
                        Submit
                    </button>
                    <Link className='btn btn-outline-danger mx-2' to="/companies">
                        Cancel
                    </Link>
                </form>

            </div>
        </div>
    </div>

    );
}
