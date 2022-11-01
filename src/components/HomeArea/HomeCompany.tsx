import React, {useEffect, useState} from 'react';
import axios from 'axios';
import appConfig from '../Util/Config';
import {Link, useParams} from 'react-router-dom';
// import { companyStore, DeleteAction } from '../States/CompanyState';

export default function HomeCompany() {

    const [companies, setCompanies] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        loadCompany();
    }, []);

    const loadCompany = async () => {
        const result = await axios.get(appConfig.companyGetAllUrl);
        setCompanies(result.data);
    };

    const deleteCompany = async (id: string) => {
        const res = await axios.delete(`http://localhost:8080/company/${id}`);
        loadCompany();
    };

    return (
        <div className="container">
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Actions</th>

                    </tr>
                    </thead>
                    <tbody>

                    {
                        companies.map((company, id) => (
                            <tr key={id}>
                                <th scope="row">{id + 1}</th>
                                <td>{company.name}</td>
                                <td>{company.email}</td>


                                <td>
                                    <Link className="btn btn-primary mx-1"
                                          to={`/company/${company.id}`}
                                    >View</Link>

                                    <Link className="btn btn-outline-primary mx-1"
                                          to={`/editcompany/${company.id}`}
                                    >Edit</Link>

                                    <button className="btn btn-danger mx-1"
                                            onClick={() => deleteCompany(company.id)}
                                    >Delete
                                    </button>

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