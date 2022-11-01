import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export default function ViewCoupon() {

    const [coupon, setCoupon] = useState({
        title: "",
        description: "",
        category: "",
        startDate: 0,
        endDate: 0,
        price: 0,
        amount: 0,
        image: "",
        id: ""
    });

    const {id} = useParams();

    useEffect(() => {
        loadCoupon();
    }, []);

    const loadCoupon = async () => {
        const result = await axios.get(`http://localhost:8080/coupon/${id}`)
        setCoupon(result.data)
    }

    return (<div className='d container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-1'>Coupon Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of coupon id: {coupon.id}
                            <ul className='list-group list-group-flush'>

                                <li className='list-group-item'>
                                    <b>Title: </b>
                                    {coupon.title}
                                </li>

                                <li className='list-group-item'>
                                    <b>Description: </b>
                                    {coupon.description}
                                </li>

                                <li className='list-group-item'>
                                    <b>End Date: </b>
                                    {coupon.endDate}
                                </li>

                                <li className='list-group-item'>
                                    <b>Price: </b>
                                    {coupon.price}
                                </li>

                                <li className='list-group-item'>
                                    <b>Image: </b>
                                    {coupon.image}
                                </li>

                                <br/>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-outline-primary my-2' to={"/coupons"}>Back to Home coupons</Link>
                </div>
            </div>
        </div>

    );
}