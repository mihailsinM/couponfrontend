import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Layout/Navbar';
import HomeCastomer from './components/HomeArea/HomeCastomer';
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
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                    {/* ---------------------------------------------------------------------CUSTOMER */}
                    <Route exact path='/' element={<HomeCastomer/>}/>
                    <Route exact path="/addcustomer" element={<AddCustomer/>}/>
                    <Route exact path="/editcustomer/:id" element={<EditCustomer/>}/>
                    <Route exact path="/customer/:id" element={<ViewCustomer/>}/>
                    {/* -----------------------------------------------------------------------COUPON */}
                    <Route exact path='/coupons' element={<HomeCoupon/>}/>
                    <Route exact path="/addcoupon" element={<AddCoupon/>}/>
                    <Route exact path="/editcoupon/:id" element={<EditCoupon/>}/>
                    <Route exact path="/coupon/:id" element={<ViewCoupon/>}/>
                    {/* ----------------------------------------------------------------------COMPANY */}
                    <Route exact path='/companies' element={<HomeCompany/>}/>
                    <Route exact path="/addcompany" element={<AddCompany/>}/>
                    <Route exact path="/editcompany/:id" element={<EditCompany/>}/>
                    <Route exact path="/company/:id" element={<ViewCompany/>}/>
                    {/*--------------------------------------------------------------------Admin*/}
                    <Route exact path='/admin/companies' element={<HomeAdmin/>}/>
                </Routes>

            </Router>

        </div>
    );

}

export default App;