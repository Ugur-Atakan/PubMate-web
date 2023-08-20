import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import YeniEkle from './global-components/yeni-ekle';

const IsletmeEkle = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Eksik bir işletmeyi bize bildir"  />
      <YeniEkle/>
        <Footer />
    </div>
}

export default IsletmeEkle

