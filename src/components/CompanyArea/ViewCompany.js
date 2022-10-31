
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import axios from 'axios';



export default function ViewCompany() {
    const [company, setCompany] = useState({
        name: "",
        email: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadCompany();
    }, []);


    const loadCompany = async () => {
        const result = await axios.get(`http://localhost:8080/company/${id}`)
        setCompany(result.data)
    }




    return (<div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-1'>Company Details</h2>

                <div className='card'>
                    <div className='card-header'>
                        Ditails of company id: {company.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name: </b>
                                {company.name}
                            </li>
                        
                            <li className='list-group-item'>
                                <b>Email: </b>
                                {company.email}
                            </li><br/>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-outline-primary my-2' to={"/companies"}>Back to Home companies</Link>


            </div>
        </div>
    </div>

    );
}
