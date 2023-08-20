import React, { Component } from 'react';
class ContactForm extends Component {

  componentDidMount() {

    const $ = window.$;

    $('.footer-area.style-two').removeClass('mg-top-100');

  }

  render() {

    return <div className="contact-page-area pd-top-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 mb-5 mb-lg-0">
            <div className="contact-details-inner mng-box-shadow">
              <h4>Tanışalım mı?</h4>
              <p>Bu uygulamayı geliştirme fikri aklımıza bir İstanbul gezisinde karaköy yakınlarında nerede bir şeyler içebiliriz diye düşünüp istanbuldaki tanıdıklarımızı tek tek ararken geldi. İlk defa geldiğimiz bir bölgede nerede ne yenir, nerde bütçemize göre eğlence mekanı buluruz diye araştırma yaparken neden böyle bir şey insanların kullanımıza açık ve topluluk destekli hale getirmiyoruz ki dedik. </p> <p>Ve işte buradayız... </p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className='Contact-info'>
                    <div className='mail'>
                      <p><i className='fa fa-envelope' /><a href='mailto:destek@pubmate.com'> Mail Gönder</a></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 align-self-center text-md-right">
                  <ul className="social-area style-2">
                    <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"/></a></li>
                    <li><a href="https://twitter.com/"><i className="fab fa-twitter" /></a></li>
                    <li><a href="https://instagra.com"><i className="fab fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <form>
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="single-select-inner style-bg-border">
                    <select>
                      <option value={1}>Site/Uygulama hakkında</option>
                      <option value={2}>İşletme Hakkında</option>
                      <option value={3}>Diğer</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <label className="single-input-inner style-bg-border">
                    <input type="text" placeholder="Konu" />
                  </label>
                </div>
                <div className="col-xl-12 col-lg-6">
                  <label className="single-input-inner style-bg-border">
                    <input type="text" placeholder="Adınız" />
                  </label>
                </div>
                <div className="col-md-6">
                  <label className="single-input-inner style-bg-border">
                    <input type="text" placeholder="Email adresiniz" />
                  </label>
                </div>
                <div className="col-md-6">
                  <label className="single-input-inner style-bg-border">
                    <input type="text" placeholder="Telefon" />
                  </label>
                </div>
                <div className="col-12">
                  <label className="single-input-inner style-bg-border">
                    <textarea placeholder="Mesajınız" defaultValue={""} />
                  </label>
                </div>
                <div className="col-12 mb-4">
                  <button className="btn btn-base"><i className="fas fa-paper-plane"></i> Bize gönder</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="contact-page-map mg-top-100">
        <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391772.10823716753!2d32.4331202601417!3d39.90290988910752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1691142172416!5m2!1str!2str" />
      </div> */}
    </div>

  }
}

export default ContactForm