import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ContactForm from './global-components/contact-form';
import Footer from './global-components/footer';
import Team from './global-components/team';
import GoogleMaps from './global-components/maps';

const ContactPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Bizi tanıyın"  />
        <ContactForm />
        <Team />
        <GoogleMaps />
        <Footer />
    </div>
}

export default ContactPage

