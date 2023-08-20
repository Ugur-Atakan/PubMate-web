import React, { Component } from 'react';

class Service extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="service-area">
			  <div className="container">		 
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-10">
		
			        <div className="single-service-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/1.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Gece Mekanı</a></h4>
			            <p>Biraz kafa dağıtalım, partiliyelim, alkolün dibine vuralım mı diyorsun işte buraya gel</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/2.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Uslu duralım</a></h4>
			            <p>Baba bi kahve içelim ya ne bilim azıcık serinleyelim yada bi date atalım olur mu</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap mb-0">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/3.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Çay Bahçesi</a></h4>
			            <p>Agalarla okeye mi gidelim diyorsun, buraya gel agam</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default Service