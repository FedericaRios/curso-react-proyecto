import React from 'react';
import '@styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} /> //Route recibe instrucciones internas de como comportarse.
                    <Route exact path="/password-recovery" element={<PasswordRecovery />} />
                    <Route exact path="/send-email" element={<SendEmail />} />
                    <Route exact path="/new-password" element={<NewPassword />} />
                    <Route exact path="/account" element={<MyAccount />} />
                    <Route exact path="/signup" element={<CreateAccount />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;