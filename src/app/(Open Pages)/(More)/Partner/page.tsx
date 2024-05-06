export default function Home() {
  return (
    <>
    <div className="col-lg-10 col-md-10 col-sm-10 pt-5 mx-auto">
     <p className="text-center widfont">
         Publishers, Universities, Research Groups can get upto 20% discounts on all End-to-End Editorial and Journal
         Publication services for their Researchers for becoming our Service Partners.
     </p>
 </div>

 <div className="col-lg-8 col-md-8 col-sm-8 pt-3 mb-5 mx-auto dflex573">
     <div className="col-lg-4 col-md-4 col-sm-4 card">
         <img className="imgcenter" src="images/jor-min.jpeg" alt=""/>
     </div>
     <div className="col-lg-8 col-md-8 col-sm-8 card">
         <div className="card-body">
             <h5 className="card-title">JOR@ME</h5>
             <p className="card-text">We offer a wide spectrum of services to scientific and non-scientific journals. Our
                 services include marketing, peer review, editorial support, typesetting, indexing, and digital
                 branding.</p>
             <a href="#" className="btn btn-primary mt-4">Ask Us</a>
         </div>
     </div>
 </div>

 <div className="col-lg-8 col-md-8 col-sm-8 pt-3 mb-5 mx-auto dflex573">
     <div className="col-lg-4 col-md-4 col-sm-4 card">
         <img className="imgcenter" src="images/lab.jpg" alt=""/>
     </div>
     <div className="col-lg-8 col-md-8 col-sm-8 card">
         <div className="card-body">
             <h5 className="card-title">LAB@ME</h5>
             <p className="card-text">Lab@ME takes full cognizance of all requirements of a scientific professional and has
                 the expertise to transform your studies into publishable papers. Our services include writing,
                 rewriting, editing, designing, and illustrating your research work to take it to the publication stage.
             </p>
             <a href="#" className="btn btn-primary mt-4">Ask Us</a>
         </div>
     </div>
 </div>

 <div className="col-lg-8 col-md-8 col-sm-8 pt-3 mb-5 mx-auto dflex573">
     <div className="col-lg-4 col-md-4 col-sm-4 card">
         <img className="imgcenter" src="images/univ.jpg" alt=""/>
     </div>
     <div className="col-lg-8 col-md-8 col-sm-8 card">
         <div className="card-body">
             <h5 className="card-title">UNIV@ME</h5>
             <p className="card-text">We fulfill the needs of undergraduates, graduates, post graduates, doctorates and
                 post-doctorates through our wide range of tailored services, which include thesis rewriting, editing
                 and proofreading; publication support; CV, LOR and SOP writing; and translation services for
                 undergraduates.</p>
             <a href="#" className="btn btn-primary mt-4">Ask Us</a>
         </div>
     </div>
 </div>

 <div className="col-lg-8 col-md-8 col-sm-8 pt-3 mb-5 mx-auto dflex573">
     <div className="col-lg-4 col-md-4 col-sm-4 card">
         <img className="imgcenter" src="images/corp.jpg" alt=""/>
     </div>
     <div className="col-lg-8 col-md-8 col-sm-8 card">
         <div className="card-body">
             <h5 className="card-title">CORP@ME</h5>
             <p className="card-text">We help you take your business to the global stage by planning and executing all your
                 corporate needs and building your business identity. In fact, our specialized teams pride themselves in
                 playing the “enabler” for many companies by maximizing the reach of their products vis-à-vis customers.
                 With Manuscriptedit Corporate Services as your start-to-finish service provider, you can free up your
                 resources to focus on your core business activities.</p>
             <a href="#" className="btn btn-primary mt-4">Ask Us</a>
         </div>
     </div>
 </div>

 {/* <div className="col-lg-8 col-md-8 col-sm-8 mb-5 pt-5 mx-auto">
     <div className="modal-dialog formm22">
         <div className="modal-content">
             <div className="modal-header headbg">
                 <h5 className="modal-title" id="exampleModalLabel">Request Partner Program Information</h5>
             </div>
             <div className="modal-body">
                 <div className="card-content p-2">

                     <div className="row marB0">
                         <div className="form-group col-lg-6 col-md-6">
                             <label  className="label2">First Name *</label>
                             <input name="student_name" id="name" type="text" className="form-control" required={true}>

                         </div>
                         <div className="form-group col-lg-6 col-md-6">
                             <label  className="label2">Last Name *</label>
                             <input name="student_name" id="name" type="text" className="form-control" required={true}>

                         </div>

                         <div className="form-group col-lg-6 col-md-6">
                             <label className="label2">Prefered Email id *</label>
                             <input onkeydown="return isNumber(event);" id="mobile" type="text" name="mobile"
                                 className="form-control EnquiryMobile" required={true}>

                         </div>
                         <div className="form-group col-lg-6 col-md-6">
                             <label className="label2">Phone *</label>
                             <input onkeydown="return isNumber(event);" id="mobile" type="text" name="mobile"
                                 className="form-control EnquiryMobile" required={true}>

                         </div>

                         <div className="form-group col-lg-6 col-md-6">
                             <label  className="label2">Profession *</label>
                             <input name="email" id="email" type="email" className="form-control" required={true}>

                         </div>

                         <div className="form-group col-lg-6 col-md-6">
                             <label className="label2">Country *</label>
                             <select name="course" id="course" className="form-control w-100" required={true} >
                                 <option >Select a Country</option>


                                 <option value="Afghanistan">Afghanistan</option>
                                 <option value="Albania">Albania</option>
                                 <option value="Algeria">Algeria</option>
                                 <option value="Andorra">Andorra</option>
                                 <option value="Angola">Angola</option>
                                 <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                 <option value="Argentina">Argentina</option>
                                 <option value="Armenia">Armenia</option>
                                 <option value="Australia">Australia</option>
                                 <option value="Austria">Austria</option>
                                 <option value="Azerbaijan">Azerbaijan</option>
                                 <option value="Bahamas">Bahamas</option>
                                 <option value="Bahrain">Bahrain</option>
                                 <option value="Bangladesh">Bangladesh</option>
                                 <option value="Barbados">Barbados</option>
                                 <option value="Belarus">Belarus</option>
                                 <option value="Belgium">Belgium</option>
                                 <option value="Belize">Belize</option>
                                 <option value="Benin">Benin</option>
                                 <option value="Bhutan">Bhutan</option>
                                 <option value="Bolivia">Bolivia</option>
                                 <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                 <option value="Botswana">Botswana</option>
                                 <option value="Brazil">Brazil</option>
                                 <option value="Brunei">Brunei</option>
                                 <option value="Bulgaria">Bulgaria</option>
                                 <option value="Burkina Faso">Burkina Faso</option>
                                 <option value="Burundi">Burundi</option>
                                 <option value="Cabo Verde">Cabo Verde</option>
                                 <option value="Cambodia">Cambodia</option>
                                 <option value="Cameroon">Cameroon</option>
                                 <option value="Canada">Canada</option>
                                 <option value="Central African Republic">Central African Republic</option>
                                 <option value="Chad">Chad</option>
                                 <option value="Chile">Chile</option>
                                 <option value="China">China</option>
                                 <option value="Colombia">Colombia</option>
                                 <option value="Comoros">Comoros</option>
                                 <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
                                 <option value="Costa Rica">Costa Rica</option>
                                 <option value="Croatia">Croatia</option>
                                 <option value="Cuba">Cuba</option>
                                 <option value="Cyprus">Cyprus</option>
                                 <option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option>
                                 <option value="Democratic Republic of the Congo">Democratic Republic of the Congo
                                 </option>
                                 <option value="Denmark">Denmark</option>
                                 <option value="Djibouti">Djibouti</option>
                                 <option value="Dominica">Dominica</option>
                                 <option value="Dominican Republic">Dominican Republic</option>
                                 <option value="Ecuador">Ecuador</option>
                                 <option value="Egypt">Egypt</option>
                                 <option value="El Salvador">El Salvador</option>
                                 <option value="Equatorial Guinea">Equatorial Guinea</option>
                                 <option value="Eritrea">Eritrea</option>
                                 <option value="Estonia">Estonia</option>
                                 <option value="Ethiopia">Ethiopia</option>
                                 <option value="Fiji">Fiji</option>
                                 <option value="Finland">Finland</option>
                                 <option value="France">France</option>
                                 <option value="Gabon">Gabon</option>
                                 <option value="Gambia">Gambia</option>
                                 <option value="Georgia">Georgia</option>
                                 <option value="Germany">Germany</option>
                                 <option value="Ghana">Ghana</option>
                                 <option value="Greece">Greece</option>
                                 <option value="Grenada">Grenada</option>
                                 <option value="Guatemala">Guatemala</option>
                                 <option value="Guinea">Guinea</option>
                                 <option value="Guinea-Bissau">Guinea-Bissau</option>
                                 <option value="Guyana">Guyana</option>
                                 <option value="Haiti">Haiti</option>
                                 <option value="Holy See">Holy See</option>
                                 <option value="Honduras">Honduras</option>
                                 <option value="Hungary">Hungary</option>
                                 <option value="Iceland">Iceland</option>
                                 <option value="India">India</option>
                                 <option value="Indonesia">Indonesia</option>
                                 <option value="Iran">Iran</option>
                                 <option value="Iraq">Iraq</option>
                                 <option value="Ireland">Ireland</option>
                                 <option value="Israel">Israel</option>
                                 <option value="Italy">Italy</option>
                                 <option value="Jamaica">Jamaica</option>
                                 <option value="Japan">Japan</option>
                                 <option value="Jordan">Jordan</option>
                                 <option value="Kazakhstan">Kazakhstan</option>
                                 <option value="Kenya">Kenya</option>
                                 <option value="Kiribati">Kiribati</option>
                                 <option value="Kuwait">Kuwait</option>
                                 <option value="Kyrgyzstan">Kyrgyzstan</option>
                                 <option value="Laos">Laos</option>
                                 <option value="Latvia">Latvia</option>
                                 <option value="Lebanon">Lebanon</option>
                                 <option value="Lesotho">Lesotho</option>
                                 <option value="Liberia">Liberia</option>
                                 <option value="Libya">Libya</option>
                                 <option value="Liechtenstein">Liechtenstein</option>
                                 <option value="Lithuania">Lithuania</option>
                                 <option value="Luxembourg">Luxembourg</option>
                                 <option value="Madagascar">Madagascar</option>
                                 <option value="Malawi">Malawi</option>
                                 <option value="Malaysia">Malaysia</option>
                                 <option value="Maldives">Maldives</option>
                                 <option value="Mali">Mali</option>
                                 <option value="Malta">Malta</option>
                                 <option value="Marshall Islands">Marshall Islands</option>
                                 <option value="Mauritania">Mauritania</option>
                                 <option value="Mauritius">Mauritius</option>
                                 <option value="Mexico">Mexico</option>
                                 <option value="Micronesia">Micronesia</option>
                                 <option value="Moldova">Moldova</option>
                                 <option value="Monaco">Monaco</option>
                                 <option value="Mongolia">Mongolia</option>
                                 <option value="Montenegro">Montenegro</option>
                                 <option value="Morocco">Morocco</option>
                                 <option value="Mozambique">Mozambique</option>
                                 <option value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</option>
                                 <option value="Namibia">Namibia</option>
                                 <option value="Nauru">Nauru</option>
                                 <option value="Nepal">Nepal</option>
                                 <option value="Netherlands">Netherlands</option>
                                 <option value="New Zealand">New Zealand</option>
                                 <option value="Nicaragua">Nicaragua</option>
                                 <option value="Niger">Niger</option>
                                 <option value="Nigeria">Nigeria</option>
                                 <option value="North Korea">North Korea</option>
                                 <option value="North Macedonia">North Macedonia</option>
                                 <option value="Norway">Norway</option>
                                 <option value="Oman">Oman</option>
                                 <option value="Pakistan">Pakistan</option>
                                 <option value="Palau">Palau</option>
                                 <option value="Palestine State">Palestine State</option>
                                 <option value="Panama">Panama</option>
                                 <option value="Papua New Guinea">Papua New Guinea</option>
                                 <option value="Paraguay">Paraguay</option>
                                 <option value="Peru">Peru</option>
                                 <option value="Philippines">Philippines</option>
                                 <option value="Poland">Poland</option>
                                 <option value="Portugal">Portugal</option>
                                 <option value="Qatar">Qatar</option>
                                 <option value="Romania">Romania</option>
                                 <option value="Russia">Russia</option>
                                 <option value="Rwanda">Rwanda</option>
                                 <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                 <option value="Saint Lucia">Saint Lucia</option>
                                 <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines
                                 </option>
                                 <option value="Samoa">Samoa</option>
                                 <option value="San Marino">San Marino</option>
                                 <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                 <option value="Saudi Arabia">Saudi Arabia</option>
                                 <option value="Senegal">Senegal</option>
                                 <option value="Serbia">Serbia</option>
                                 <option value="Seychelles">Seychelles</option>
                                 <option value="Sierra Leone">Sierra Leone</option>
                                 <option value="Singapore">Singapore</option>
                                 <option value="Slovakia">Slovakia</option>
                                 <option value="Slovenia">Slovenia</option>
                                 <option value="Solomon Islands">Solomon Islands</option>
                                 <option value="Somalia">Somalia</option>
                                 <option value="South Africa">South Africa</option>
                                 <option value="South Korea">South Korea</option>
                                 <option value="South Sudan">South Sudan</option>
                                 <option value="Spain">Spain</option>
                                 <option value="Sri Lanka">Sri Lanka</option>
                                 <option value="Sudan">Sudan</option>
                                 <option value="Suriname">Suriname</option>
                                 <option value="Sweden">Sweden</option>
                                 <option value="Switzerland">Switzerland</option>
                                 <option value="Syria">Syria</option>
                                 <option value="Tajikistan">Tajikistan</option>
                                 <option value="Tanzania">Tanzania</option>
                                 <option value="Thailand">Thailand</option>
                                 <option value="Timor-Leste">Timor-Leste</option>
                                 <option value="Togo">Togo</option>
                                 <option value="Tonga">Tonga</option>
                                 <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                 <option value="Tunisia">Tunisia</option>
                                 <option value="Turkey">Turkey</option>
                                 <option value="Turkmenistan">Turkmenistan</option>
                                 <option value="Tuvalu">Tuvalu</option>
                                 <option value="Uganda">Uganda</option>
                                 <option value="Ukraine">Ukraine</option>
                                 <option value="United Arab Emirates">United Arab Emirates</option>
                                 <option value="United Kingdom">United Kingdom</option>
                                 <option value="United States of America">United States of America</option>
                                 <option value="Uruguay">Uruguay</option>
                                 <option value="Uzbekistan">Uzbekistan</option>
                                 <option value="Vanuatu">Vanuatu</option>
                                 <option value="Venezuela">Venezuela</option>
                                 <option value="Vietnam">Vietnam</option>
                                 <option value="Yemen">Yemen</option>
                                 <option value="Zambia">Zambia</option>
                                 <option value="Zimbabwe">Zimbabwe</option>


                             </select>

                         </div>
                         <div className="form-group col-lg-6 col-md-6">
                             <label for="last_course" className="label2">Organization Name *</label>
                             <input name="latest_studies" id="last_course" type="text" className="form-control">

                         </div>


                         <div className="form-group col-lg-6 col-md-6 mt-5">
                             <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                     id="inlineRadio1" value="option1">
                                 <label className="form-check-label label2" for="inlineRadio1">Journal</label>
                             </div>
                             <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                     id="inlineRadio2" value="option2">
                                 <label className="form-check-label label2" for="inlineRadio2">Lab</label>
                             </div>
                             <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                     id="inlineRadio2" value="option2">
                                 <label className="form-check-label label2" for="inlineRadio2">University</label>
                             </div>
                             <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                     id="inlineRadio2" value="option2">
                                 <label className="form-check-label label2" for="inlineRadio2">Corporate</label>
                             </div>

                         </div>


                         <div className="form-group col-lg-6 col-md-6">
                             <label for="place" className="label2">Massage *</label>
                             <input required={true} name="city" id="place" type="text" className="form-control big-box">

                         </div>

                     </div>
                 </div>
             </div>
             <div className="modal-footer footbg">
                 <button type="button" className="btn btn-primary over">Register</button>
             </div>
         </div>
     </div>
     <!-- popup form -->
 </div> */}
    </>
  );
}
