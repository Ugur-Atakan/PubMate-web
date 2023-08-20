import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
        	<div className="navbar-area navbar-area-3">
				  <nav className="navbar navbar-expand-lg">
				    <div className="container nav-container">
				      <div className="responsive-mobile-menu">
				        <button className="menu toggle-btn d-block d-lg-none" data-target="#dkt_main_menu" aria-expanded="false" aria-label="Toggle navigation">
				          <span className="icon-left" />
				          <span className="icon-right" />
				        </button>
				      </div>
				      <div className="logo">
				        <Link to="/"><img src={publicUrl+"assets/img/logo.png"} alt="img" /></Link>
				      </div>
				      <div className="nav-right-part nav-right-part-mobile">
				        <Link className="btn btn-base" to="/isletmeekle">İşletme Ekle</Link>
				      </div>
				      <div className="collapse navbar-collapse" id="dkt_main_menu">
				        <ul className="navbar-nav menu-open text-center">
				          <li className="menu-item current-menu-item">
				            <Link to="/">Anasayfa</Link>
				          </li>
						  {/* <li><Link to="/sign-in">Giriş Yap	</Link></li>
				          <li><Link to="/sign-up">Üye Ol</Link></li> */}
				          <li><Link to="/contact">Bizi Tanı</Link></li>
						  <li><Link to="/isletmeekle">İşletme Ekleme Talebi</Link></li>
				        </ul>
				      </div>
				      <div className="nav-right-part nav-right-part-desktop">
				        <ul>
				          <li><Link className="btn btn-base" to="/isletmeekle">İşletme Ekle <i className="fa fa-plus" /></Link></li>
				        </ul>
				      </div>
				    </div>
				  </nav>
				</div>

        )
    }
}


export default Navbar