import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import SignIn from './global-components/sign-up';
import Footer from './global-components/footer';

const SignUpPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Sign Up"  />
        <SignIn />
        <Footer />
    </div>
}

export default SignUpPage

