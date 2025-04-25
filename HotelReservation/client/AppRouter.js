import React from 'react';
/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
*/
import { Routes, Route } from 'react-router-dom';


import Layout from './Layout';
import Home from './pages/Home';         // <SearchBar /><HotelList /> 포함
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Register from './pages/Register';
import HotelDetail from './pages/HotelDetail';
import CustomerCenter from './pages/CustomerCenter';
import NotFound from './pages/NotFound'; // 404페이지
import Modify from './pages/Modify';


function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="register" element={<Register />} />
		  <Route path="/modify" element={<Modify />} />
          <Route path="hotels/:id" element={<HotelDetail />} />
          <Route path="customer" element={<CustomerCenter />} />
		  <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default AppRouter;


/* <Router>가 있다고 에러뜸 Router를 지움.
Uncaught runtime errors:
×
ERROR
You cannot render a <Router> inside another <Router>. You should never have more than one in your app.
    at invariant (http://localhost:3000/static/js/bundle.js:25647:11)
    at Router (http://localhost:3000/static/js/bundle.js:30480:3)
    at react-stack-bottom-frame (http://localhost:3000/static/js/bundle.js:23673:18)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:13883:20)
    at updateFunctionComponent (http://localhost:3000/static/js/bundle.js:15576:17)
    at beginWork (http://localhost:3000/static/js/bundle.js:16162:16)
    at runWithFiberInDEV (http://localhost:3000/static/js/bundle.js:11655:68)
    at performUnitOfWork (http://localhost:3000/static/js/bundle.js:18235:93)
    at workLoopSync (http://localhost:3000/static/js/bundle.js:18128:38)
    at renderRootSync (http://localhost:3000/static/js/bundle.js:18112:7)

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="register" element={<Register />} />
          <Route path="hotels/:id" element={<HotelDetail />} />
          <Route path="customer" element={<CustomerCenter />} />
		  <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
*/
