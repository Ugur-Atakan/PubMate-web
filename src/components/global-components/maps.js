import React, { Component } from 'react';
class GoogleMaps extends Component {

  componentDidMount() {

    const $ = window.$;

    $('.footer-area.style-two').removeClass('mg-top-40');

  }

  render() {

    return <div className="contact-page-map mg-top-40">
        <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391772.10823716753!2d32.4331202601417!3d39.90290988910752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1691142172416!5m2!1str!2str" />
      </div>
  

  }
}

export default GoogleMaps