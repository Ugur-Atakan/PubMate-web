import React from "react";
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header';
import YeniEkle from '../components/global-components/yeni-ekle';
import Footer from '../components/global-components/footer'


const Panel = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Eksik bir işletmeyi bize bildir"  />
      <YeniEkle/>
        <Footer />
    </div>
}

export default Panel

