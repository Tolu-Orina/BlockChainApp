import AuthPage from '@/components/AuthPage';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Login: React.FC = () => {
    return (
        <>
            <Navbar />
            <AuthPage/>
            <Footer/>
        </>
    )
 }

export default Login