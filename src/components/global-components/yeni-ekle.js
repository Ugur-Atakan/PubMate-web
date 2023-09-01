import React, { Component, useState } from 'react';

export default function YeniEkle() {
  const [isletme, setisletme] = useState({
    isletmeAdi: "",
    isletmeTuru: "",
    fiyatlandirma: "",
    il: "",
    ilce: "",
    mahalle: "",
    sokak: "",
    no: "",
  });
 let publicUrl = process.env.PUBLIC_URL+'/'
  const handleChange = (e) => {
    setisletme({ ...isletme, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isletme);
  };
    return <div className="add-property-area pd-top-120">
              <div className="container">
                <form>
                  <div className="btn btn-base hover-none">İşletmeye ait bilgiler</div>
                  <div className="property-form-grid">
                    <div className="row">
                      <div className="col-12">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">İşletme Adı</span>
                          <input type="text" name="isletmeAdi" onChange={handleChange}/>
                        </label>
                      </div>
                      <div className="col-md-6">
                        <div className="single-select-inner style-bg-border">
                          <span className="label">İşletme türünüz</span>
                          <select name="isletmeTuru" onChange={handleChange}>
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
                            <option value={4}>Normal</option>
                            <option value={5}>Diğer</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">İl</span>
                          <input type="text" name="il" onChange={handleChange} />
                        </label>
                      </div>
                      <div className="col-md-3">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">İlçe</span>
                          <input type="text" name="ilce" onChange={handleChange} />
                        </label>
                      </div>
                      <div className="col-md-2">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">Mahalle</span>
                          <input type="text" name="mahalle" onChange={handleChange} />
                        </label>
                      </div>
                      <div className="col-md-2">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">Sokak</span>
                          <input type="text" name="sokak" onChange={handleChange} />
                        </label>
                      </div>
                      <div className="col-md-2">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">No</span>
                          <input type="text" name="no" onChange={handleChange} />
                        </label>
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
                  <button className="btn btn-base" onClick={handleSubmit}>Gönderin</button>
                  </div>
                </form>
              </div>
            </div>

        }