import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import authService from '../Service/AuthService';
import notificationService from '../Service/NotificationService';
import { Button } from "@mui/material";
import authStore from '../States/AuthState';
import { CLIENT_TYPE } from '../models/Credentials';


export default function Navbar() {

    const navigate = useNavigate();

    function logout() {
        authService.logout();
        notificationService.success("Bye bye");
        navigate("/login");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand m-2" to="/"><h1>Coupon Project</h1></Link>

                {
                    !authStore.getState().token &&
                    <>

                        <Link className="btn btn-outline-light m-2" to="/login">login</Link>
                        <Link className="btn btn-outline-light m-2" to="/register">Register</Link>
                    </>
                }
                {
                    (authStore.getState().token && authStore.getState().creds.clientType === CLIENT_TYPE.ADMINISTRATOR) &&
                     
                    <>
                        <Link className="btn btn-outline-light m-2" to="/addcustomer">Add Customer</Link>
                        <Link className="btn btn-outline-light m-2" to="/addcoupon">Add Coupon</Link>
                        <Link className="btn btn-outline-light m-2" to="/addcompany">Add Company</Link>
                        <Button variant="outlined" color="secondary" onClick={logout}>Logout</Button>
                    </>
                }

                 {
                    (authStore.getState().token && authStore.getState().creds.clientType === CLIENT_TYPE.COMPANY) &&
                    <>
                        <Link className="btn btn-outline-light m-2" to="/addcustomer">Add Customer</Link>
                        <Link className="btn btn-outline-light m-2" to="/addcoupon">Add Coupon</Link>
                        <Button variant="outlined" color="secondary" onClick={logout}>Logout</Button>
                    </>
                }

                {
                    (authStore.getState().token && authStore.getState().creds.clientType === CLIENT_TYPE.CUSTOMER) &&
                    <>
                        <Link className="btn btn-outline-light m-2" to="/addcoupon">Add Coupon</Link>
                        <Button variant="outlined" color="secondary" onClick={logout}>Logout</Button>
                    </>
                }

            </nav>
        </div>
    );
}
