import axios from 'axios';
import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import appConfig from '../Util/Config';


export default function AddCoupon() {

    let navigate = useNavigate();

    const [coupon, setCoupon] = useState({
        title: "",
        description: "",
        category: "",
        startDate: 0,
        endDate: 0,
        price: 0,
        amount: 0,
        image: "",
        companyId: 0
    });

    const {title, description, category, startDate, endDate, price, amount, image, companyId} = coupon;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoupon({...coupon, [e.target.name]: e.target.value});

    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axios.post(appConfig.couponAddUrl, coupon)
        navigate("/coupons");
    };


    return (<div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className=' text-center m-1'>Add Coupon</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-1'>
                            <label htmlFor='Title' className='form-label'>Title.
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter title'
                                name='title'
                                value={title}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className='mb-1'>
                            <label htmlFor='Description' className='form-label'>Description.
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter description'
                                name='description'
                                value={description}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor='Category' className='form-label'>Category.
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder='Enter category'
                                name='category'
                                value={category}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor='StartDate' className='form-label'>Start date.
                            </label>
                            <input
                                type={"Date"}
                                className="form-control"
                                placeholder='Enter date'
                                name='startDate'
                                value={startDate}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor='StartDate' className='form-label'>End date.
                            </label>
                            <input
                                type={"Date"}
                                className="form-control"
                                placeholder='Enter end date'
                                name='endDate'
                                value={endDate}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor='Amount' className='form-label'>Amount.
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder='Enter amount'
                                name='amount'
                                value={amount}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor='Price' className='form-label'>Price.
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder='Enter Price'
                                name='price'
                                value={price}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Image' className='form-label'>Image.
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter Image'
                                name='image'
                                value={image}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Company' className='form-label'>Company id.
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder='Company-id'
                                name='companyid'
                                value={companyId}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>


                        <button type='submit' className='btn btn-outline-primary'>
                            Submit
                        </button>
                        <Link className='btn btn-outline-danger mx-2' to="/coupons">
                            Cancel
                        </Link>
                    </form>

                </div>
            </div>
        </div>

    );
}
