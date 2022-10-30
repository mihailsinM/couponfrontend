import React from 'react';
import './App.css';


import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Layout/Navbar';
import HomeCastomer from './Components/HomeArea/HomeCastomer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddCustomer from './Components/CustomerArea/AddCustomer';
import EditCustomer from './Components/CustomerArea/EditCustomer';
import ViewCustomer from './Components/CustomerArea/ViewCustomer';
import AddCoupon from './Components/CouponArea/AddCoupon';
import HomeCoupon from './Components/HomeArea/HomeCoupon';
import EditCoupon from "./Components/CouponArea/EditCoupon"
import ViewCoupon from './Components/CouponArea/ViewCoupon';
import AddCompany from "./Components/CompanyArea/AddCompany"
import HomeCompany from './Components/HomeArea/HomeCompany';
import EditCompany from './Components/CompanyArea/EditCompany';
import ViewCompany from './Components/CompanyArea/ViewCompany';
import Login from './Components/LoginArea/Login';
import Register from './Components/Register/RegisterCompany';
import HomeAdmin from "./Components/HomeArea/HomeAdmin";




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>

          <Route path="/register" element={<Register />} />
          <Route exact path='/login' element={<Login />} />

          {/* ---------------------------------------------------------------------CUSTOMER */}
          <Route exact path='/' element={<HomeCastomer />} />
          <Route exact path="/addcustomer" element={<AddCustomer />} />
          <Route exact path="/editcustomer/:id" element={<EditCustomer />} />
          <Route exact path="/customer/:id" element={<ViewCustomer />} />
          {/* -----------------------------------------------------------------------COUPON */}
          <Route exact path='/coupons' element={<HomeCoupon />} />
          <Route exact path="/addcoupon" element={<AddCoupon />} />
          <Route exact path="/editcoupon/:id" element={<EditCoupon />} />
          <Route exact path="/coupon/:id" element={<ViewCoupon />} />
          {/* ----------------------------------------------------------------------COMPANY */}
          <Route exact path='/companies' element={<HomeCompany />} />
          <Route exact path="/addcompany" element={<AddCompany />} />
          <Route exact path="/editcompany/:id" element={<EditCompany />} />
          <Route exact path="/company/:id" element={<ViewCompany />} />
          {/*--------------------------------------------------------------------Admin*/}
          <Route exact path='/admin/companies' element={<HomeAdmin />} />
        </Routes>
      </Router>




    </div>
  );
}

export default App;
