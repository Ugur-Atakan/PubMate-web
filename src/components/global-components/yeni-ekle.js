import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class YeniEkle extends Component {

    render() {
      
        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="add-property-area pd-top-120">
              <div className="container">
                <form>
                  <div className="btn btn-base hover-none">İşletmeye ait bilgiler</div>
                  <div className="property-form-grid">
                    <div className="row">
                      <div className="col-12">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">İşletme Adı</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-md-6">
                        <div className="single-select-inner style-bg-border">
                          <span className="label">İşletme türünüz</span>
                          <select>
                            <option value={1}>Canlı Müzik/Bar</option>
                            <option value={2}>Kafe</option>
                            <option value={3}>Çay bahçesi</option>
                            <option value={4}>Gece Klübü</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-select-inner style-bg-border">
                          <span className="label">Fiyatlandırma</span>
                          <select>
                            <option value={1}>Öğrencilere uygun</option>
                            <option value={2}>Orta Direkt</option>
                            <option value={3}>Para sorunu olmayanlar</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-select-inner style-bg-border">
                          <span className="label">Dışarda bahçeniz var mı</span>
                          <select>
                            <option value={true}>Var</option>
                            <option value={false}>Yok</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="avatar-upload-input text-center">
                          <img src={publicUrl+"assets/img/icon/upload.png"} alt="img" />
                          <h2>İşletmenize ait bir görsel yükleyin</h2>
                          <div className="avatar-edit-input">
                            <input className="btn btn-base" type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                            <label className="btn btn-base" htmlFor="imageUpload">Yüklemek için tıklayın</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">İl</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-md-3">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">İlçe</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-md-6">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">Mahalle/Semt/Sokak Açık adres</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-md-12">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">İşletmenize ait varsa Google Maps Linki</span>
                          <input type="text" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="btn btn-base hover-none">Yönetici bilgileri</div>
                  <div className="property-form-grid">
                    <div className="row">
                      <div className="col-md-4">
                        <label className="single-input-inner style-bg-border">
                          <input type="text" placeholder="Adınız Soyadınız" />
                        </label>
                      </div>
                      <div className="col-md-4">
                        <label className="single-input-inner style-bg-border">
                          <input type="text" placeholder="Email adresiniz" />
                        </label>
                      </div>
                      <div className="col-md-4">
                        <label className="single-input-inner style-bg-border">
                          <input type="text" placeholder="Telefon numaranız" />
                        </label>
                      </div>
                      <div className="col-12">
                        <label className="single-input-inner style-bg-border">
                          <textarea placeholder="İşletmeniz hakkında bir özet mesaj" defaultValue={""} />
                        </label>
                      </div>
                      <div className="col-12 text-center mb-4">
                        <button className="btn btn-base">Gönderin</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

        }
}

export default YeniEkle