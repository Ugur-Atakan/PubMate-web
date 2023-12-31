import React, { Component } from 'react';

class Team extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'

    return <div className="agent-area text-center pd-top-118 pd-bottom-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-agent-wrap style-2 text-center">
              <div className="thumb">
                <img src={publicUrl + "assets/img/agent/7.png"} alt="img" />
              </div>
              <div className="details">
                <h4>Sandara Mrikon</h4>
                <h6>Estate Agent</h6>
                <ul className="social-area style-2">
                  <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                  <li><a href="#"><i className="fab fa-instagram" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-agent-wrap style-2 text-center">
              <div className="thumb">
                <img src={publicUrl + "assets/img/agent/8.png"} alt="img" />
              </div>
              <div className="details">
                <h4>Sarif Miprut</h4>
                <h6>Estate Agent</h6>
                <ul className="social-area style-2">
                  <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                  <li><a href="#"><i className="fab fa-instagram" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-agent-wrap style-2 text-center">
              <div className="thumb">
                <img src={publicUrl + "assets/img/agent/10.png"} alt="img" />
              </div>
              <div className="details">
                <h4>Jaya Sarif</h4>
                <h6>Estate Agent</h6>
                <ul className="social-area style-2">
                  <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                  <li><a href="#"><i className="fab fa-instagram" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  }
}

export default Team