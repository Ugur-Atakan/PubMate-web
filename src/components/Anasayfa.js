import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './global-components/banner';
import Footer from './global-components/footer';
import Isletmeler from './global-components/isletmeler';

const Anasayfa = () => {
    return <div>
        <Navbar /> 
        <Banner /> 
        {/* <Service /> mekam türü seçme bölümü */}
        <Isletmeler/>
        <Footer />
    </div>
}

export default Anasayfa

