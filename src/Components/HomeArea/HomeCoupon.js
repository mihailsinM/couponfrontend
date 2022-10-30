import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import appConfig from '../Util/Config';
import { Link, useParams } from 'react-router-dom';

export default function HomeCoupon() {

    const [coupons, setCoupons] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadCoupons();
    }, []);

    const loadCoupons = async () => {
        const result = await axios.get(appConfig.couponGetAllUrl);
        setCoupons(result.data);
    };

    const deleteCoupon =  async(id) => {
        const res = await axios.delete(`http://localhost:8080/coupon/${id}`);
        loadCoupons();
    };

    return (
        <div className="p-2">
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Start D.</th>
                            <th scope="col">End D.</th>
                            <th scope="col">Category</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Company_id</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            coupons.map((coupon, id) => (
                                <tr key={id}>
                                    <th scope="row" >{id + 1}</th>
                                    <td>{coupon.title}</td>
                                    <td>{coupon.description}</td>
                                    <td>{coupon.startDate}</td>
                                    <td>{coupon.endDate}</td>
                                    <td>{coupon.category}</td>
                                    <td>{coupon.amount}</td>
                                    <td>{coupon.price}</td>
                                    <td>{coupon.image}</td>
                                    <td>{coupon.company_id}</td>
                                    
                                    <td>
                                        <Link className="btn btn-primary mx-1"
                                         to={`/coupon/${coupon.id}`}
                                        >View</Link>

                                        <Link className="btn btn-outline-primary mx-1"
                                            to={`/editcoupon/${coupon.id}`}
                                        >Edit</Link>

                                        <button className="btn btn-danger mx-1"
                                            onClick={() => deleteCoupon(coupon.id)}
                                        >Delete</button>

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
