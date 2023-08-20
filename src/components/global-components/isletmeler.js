import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Isletmeler() {
    const [isletmeListesi, setIsletmeListesi] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            setIsletmeListesi(response.data);
        })
    }, [])

    return (
        <>
            <div className="blog-page-area pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-search-inner bg-main"> <h4 style={{color:"white", textAlign:"center"}}>Bulabildiğimiz işletmeler</h4></div>
                        </div>

                        {isletmeListesi.map((isletme, index) => {

                            return (

                                <div key={isletme.id} className="col-lg-4 col-md-6" style={{width:"500px",height:"500px"}}>
                                    <div className="single-product-wrap style-2">
                                        <div className="thumb">
                                            {/* <img src={publicUrl + "assets/img/project/15.png"} alt="img" /> */}
                                            <img src={isletme.image} style={{width:"200px",height:"200px"}} alt="img" />
                                        </div>
                                        <div className="product-details-inner">
                                            <h4><Link to="/isletmedetay">{isletme.title}</Link></h4>
                                            <p>Özet kısa bir yazı veya moderatör yorumu </p>
                                            <span className="price"> Lokasyonu </span>
                                        </div>
                                        <div className="product-meta-bottom style-2">
                                            <span>{isletme.category}</span>
                                            <span>Özellik 2</span>
                                            <span>Özellik 3</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                            <div className="pagination-area text-center mt-4">
                            <ul className="pagination pd-bottom-40">
                                <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-left" /></a></li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">...</a></li>
                                <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-right" /></a></li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    )
}