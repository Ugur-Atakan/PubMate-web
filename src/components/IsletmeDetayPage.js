import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PropertyDetailsPage from './global-components/property-details';
import Footer from './global-components/footer';

const IsletmeDetayPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="İşletme Detayları"  />
        <PropertyDetailsPage />
        <Footer />
    </div>
}

export default IsletmeDetayPage

