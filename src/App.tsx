import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Layout/Navbar';
import HomeCustomer from './components/HomeArea/HomeCustomer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AddCustomer from './components/CustomerArea/AddCustomer';
import EditCustomer from './components/CustomerArea/EditCustomer';
import ViewCustomer from './components/CustomerArea/ViewCustomer';
import AddCoupon from './components/CouponArea/AddCoupon';
import HomeCoupon from './components/HomeArea/HomeCoupon';
import EditCoupon from "./components/CouponArea/EditCoupon"
import ViewCoupon from './components/CouponArea/ViewCoupon';
import AddCompany from "./components/CompanyArea/AddCompany"
import HomeCompany from './components/HomeArea/HomeCompany';
import EditCompany from './components/CompanyArea/EditCompany';
import ViewCompany from './components/CompanyArea/ViewCompany';
import Login from './components/LoginArea/Login';
import Register from './components/Register/RegisterCompany';
import HomeAdmin from "./components/HomeArea/HomeAdmin";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/register" element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    {/* ---------------------------------------------------------------------CUSTOMER */}
                    <Route path='/' element={<HomeCustomer/>}/>
                    <Route path="/addcustomer" element={<AddCustomer/>}/>
                    <Route path="/editcustomer/:id" element={<EditCustomer/>}/>
                    <Route path="/customer/:id" element={<ViewCustomer/>}/>
                    {/* -----------------------------------------------------------------------COUPON */}
                    <Route path='/coupons' element={<HomeCoupon/>}/>
                    <Route path="/addcoupon" element={<AddCoupon/>}/>
                    <Route path="/editcoupon/:id" element={<EditCoupon/>}/>
                    <Route path="/coupon/:id" element={<ViewCoupon/>}/>
                    {/* ----------------------------------------------------------------------COMPANY */}
                    <Route path='/companies' element={<HomeCompany/>}/>
                    <Route path="/addcompany" element={<AddCompany/>}/>
                    <Route path="/editcompany/:id" element={<EditCompany/>}/>
                    <Route path="/company/:id" element={<ViewCompany/>}/>
                    {/*--------------------------------------------------------------------Admin*/}
                    <Route path='/admin/companies' element={<HomeAdmin/>}/>
                </Routes>
            </Router>

        </div>
    );

}

export default App;