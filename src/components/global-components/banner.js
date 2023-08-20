import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {

    render() {

        let publicUrl = `${process.env.PUBLIC_URL}/`

    return  <div className="banner-area banner-area-1 banner-area-bg" style={{background: 'url('+publicUrl+'assets/img/banner/1.png)'}}>
			  <div className="container">
			    <div className="banner-area-inner">
			      <div className="row justify-content-center">
			        <div className="col-lg-8">
			          <div className="banner-inner text-center">
			            <p>Yeni bir yerdesin ve nerede takılacağını bilemiyor musun? (bilemediğini biliyoruz, o yüzden burdasın zaten :/ )</p>
			            <div className="line" />
			            <h2>Neredeki mekanları görmek istediğini seç</h2>
			          </div>
			        </div>
			        <div className="col-lg-8 mt-4">
			          <form className="main-search-inner">
			            <div className="row custom-gutters-10">
			              <div className="col-md-3">
			                <div className="single-select-inner">
			                  <select>
			                    <option>Adres</option>
			                    <option value={1}>Ankara</option>
			                    <option value={2}>Adana</option>
			                    <option value={3}>İstanbul</option>
			                  </select>
			                </div>
			              </div>
			              <div className="col-md-3">
			                <div className="single-select-inner">
			                  <select>
			                    <option>Mod</option>
			                    <option value={1}>Kafa Dinlemek istiyorum</option>
			                    <option value={2}>Kafayı patlatalım</option>
			                    <option value={3}>Bi mola verelim</option>
			                  </select>
			                </div>
			              </div>
			              <div className="col-md-3">
			                <div className="single-select-inner">
			                  <select>
			                    <option>Bütçe</option>
			                    <option value={1}>Ucuz yollu</option>
			                    <option value={2}>Orta direkt</option>
			                    <option value={3}>Para problemi yok</option>
			                  </select>
			                </div>
			              </div>
			              <div className="col-md-3">
			                <button className="btn btn-base w-100"><i className="fa fa-search mr-1" /> Ara bakalım</button>
			              </div>
			            </div>
			          </form>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Banner