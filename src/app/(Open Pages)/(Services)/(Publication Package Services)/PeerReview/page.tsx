
"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";

export default function Home() {
  return (
    <>
      {breadcrum(
        "Services / Publication Package Services",
        "Peer Review & Pre Submission"
      )}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="pt-2 pb-3">Peer Review & Pre Submission</h3>
              <p>
                Almost no article get accepted without revision. Peer-reviewers
                raise their concern to the suitability of the content to get
                published. In order to improve the quality of the content
                further they raise important questions which need to be answered
                by the author. At this stage, it is very important to understand
                and correctly interpret the reviewer's comments, make desired
                revision of the manuscript, submit a cover letter and clearly
                communicate and make point-wise response to reviewer's queries.
                Our expert will assist to present your "response to reviewer" in
                the best possible manner.
              </p>
              <div className="em-about-icon-box2">
                <div className="list-icon">
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Is the Title crisp and catchy to draw attention of the
                      reader?
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      Does the Abstract adequately represent the contents of the
                      paper?
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Is the Introduction/Background sound and logical as a
                      context for the study?
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      Is the research question framed appropriately, i.e., is
                      the motivation of the study clear and concise?
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Is the Methodology described in detail?</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Is there is a clear differentiation between Results and
                      Discussion sections.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      the Discussion made in relation to published literature
                      and/or fundamental basis, or is it just a mere repetition
                      of the Results section?
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Do the Conclusions clearly reflect the salient findings of
                      the study?
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Are the references updated and adequate?</h6>
                  </span>
                </div>
                <h5 className="mt-5">
                  <strong>Disclaimer</strong>
                </h5>
                <p>
                  {" "}
                  This service does not guarantee acceptance of manuscript for
                  publication but it guides you to improve the quality of your
                  manuscript.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="appointment">
                <div className="sign-up-form-wrap p-3">
                  <div className="sign-up-form-header text-center mb-4">
                    <h4 className="appointment_title mb-2">Create Account</h4>
                    <p>Get started with your free account</p>
                  </div>
                  <form
                    action="https://formspree.io/f/myyleorq"
                    method="POST"
                    id="dreamit-form"
                    className="sign-up-form"
                  >
                    <div className="form-group input-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group input-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group input-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="selectcountry"
                        id="selectcountry"
                        title="Kindly provide the Country name"
                      >
                        <option value="">-Select a Country-</option>
                        <option value="1">Afghanistan</option>
                        <option value="2">Albania</option>
                        <option value="3">Algeria</option>
                        <option value="4">American Samoa</option>
                        <option value="5">Andorra</option>
                        <option value="6">Angola</option>
                        <option value="7">Anguilla</option>
                        <option value="8">Antarctica</option>
                        <option value="9">Antigua and Barbuda</option>
                        <option value="10">Argentina</option>
                        <option value="11">Armenia</option>
                        <option value="12">Aruba</option>
                        <option value="13">Australia</option>
                        <option value="14">Austria</option>
                        <option value="15">Azerbaijan</option>
                        <option value="16">Bahamas</option>
                        <option value="17">Bahrain</option>
                        <option value="18">Bangladesh</option>
                        <option value="19">Barbados</option>
                        <option value="20">Belarus</option>
                        <option value="21">Belgium</option>
                        <option value="22">Belize</option>
                        <option value="23">Benin</option>
                        <option value="24">Bermuda</option>
                        <option value="25">Bhutan</option>
                        <option value="26">Bolivia</option>
                        <option value="27">Bosnia and Herzegowina</option>
                        <option value="28">Botswana</option>
                        <option value="29">Bouvet Island</option>
                        <option value="30">Brazil</option>
                        <option value="31">
                          British Indian Ocean Territory
                        </option>
                        <option value="32">Brunei Darussalam</option>
                        <option value="33">Bulgaria</option>
                        <option value="34">Burkina Faso</option>
                        <option value="35">Burundi</option>
                        <option value="36">Cambodia</option>
                        <option value="37">Cameroon</option>
                        <option value="38">Canada</option>
                        <option value="39">Cape Verde</option>
                        <option value="40">Cayman Islands</option>
                        <option value="41">Central African Republic</option>
                        <option value="42">Chad</option>
                        <option value="43">Chile</option>
                        <option value="44">China</option>
                        <option value="45">Christmas Island</option>
                        <option value="46">Cocoa Islands</option>
                        <option value="47">Colombia</option>
                        <option value="48">Comoros</option>
                        <option value="49">Congo</option>
                        <option value="50">Cook Islands</option>
                        <option value="51">Costa Rica</option>
                        <option value="52">Cote Divoire</option>
                        <option value="53">Croatia</option>
                        <option value="54">Cuba</option>
                        <option value="55">Cyprus</option>
                        <option value="56">Czech Republic</option>
                        <option value="57">Denmark</option>
                        <option value="58">Djibouti</option>
                        <option value="59">Dominica</option>
                        <option value="60">Dominican Republic</option>
                        <option value="61">East Timor</option>
                        <option value="62">Ecuador</option>
                        <option value="63">Egypt</option>
                        <option value="64">El Salvador</option>
                        <option value="65">Equatorial Guinea</option>
                        <option value="66">Eritrea</option>
                        <option value="67">Estonia</option>
                        <option value="68">Ethiopia</option>
                        <option value="69">Falkland Islands</option>
                        <option value="70">Faroe Islands</option>
                        <option value="71">Fiji</option>
                        <option value="72">Finland</option>
                        <option value="73">France</option>
                        <option value="74">France, Metropolitan</option>
                        <option value="75">French Guiana</option>
                        <option value="76">French Polynesia</option>
                        <option value="77">French Southern Territories</option>
                        <option value="78">Gabon</option>
                        <option value="79">Gambia</option>
                        <option value="80">Georgia</option>
                        <option value="81">Germany</option>
                        <option value="82">Ghana</option>
                        <option value="83">Gibraltar</option>
                        <option value="84">Greece</option>
                        <option value="85">Greenland</option>
                        <option value="86">Grenada</option>
                        <option value="87">Guadeloupe</option>
                        <option value="88">Guam</option>
                        <option value="89">Guatemala</option>
                        <option value="90">Guinea</option>
                        <option value="91">Guinea-Bissau</option>
                        <option value="92">Guyana</option>
                        <option value="93">Haiti</option>
                        <option value="94">Heard and Mc Donald Islands</option>
                        <option value="95">Honduras</option>
                        <option value="96">Hong Kong</option>
                        <option value="97">Hungary</option>
                        <option value="98">Iceland</option>
                        <option value="99">India</option>
                        <option value="100">Indonesia</option>
                        <option value="101">Iran</option>
                        <option value="102">Iraq</option>
                        <option value="103">Ireland</option>
                        <option value="104">Israel</option>
                        <option value="105">Italy</option>
                        <option value="106">Jamaica</option>
                        <option value="107">Japan</option>
                        <option value="108">Jordan</option>
                        <option value="109">Kazakhstan</option>
                        <option value="110">Kenya</option>
                        <option value="111">Kiribati</option>
                        <option value="112">
                          Korea, Peoples Democratic Republic of
                        </option>
                        <option value="113">Republic of Korea</option>
                        <option value="114">Kuwait</option>
                        <option value="115">Kyrgyzstan</option>
                        <option value="116">
                          Lao, Peoples Democratic Republic
                        </option>
                        <option value="117">Latvia</option>
                        <option value="118">Lebanon</option>
                        <option value="119">Lesotho</option>
                        <option value="120">Liberia</option>
                        <option value="121">Libyan Arab Jamahiriya</option>
                        <option value="122">Liechtenstein</option>
                        <option value="123">Lithuania</option>
                        <option value="124">Luxembourg</option>
                        <option value="125">Macau</option>
                        <option value="126">Macedonia, Republic of</option>
                        <option value="127">Madagascar</option>
                        <option value="128">Malawi</option>
                        <option value="129">Malaysia</option>
                        <option value="130">Maldives</option>
                        <option value="131">Mali</option>
                        <option value="132">Malta</option>
                        <option value="133">Marshall Islands</option>
                        <option value="134">Martinique</option>
                        <option value="135">Mauritania</option>
                        <option value="136">Mauritius</option>
                        <option value="137">Mayotte</option>
                        <option value="138">Mexico</option>
                        <option value="139">
                          Micronesia, Federated States of
                        </option>
                        <option value="140">Moldova, Republic of</option>
                        <option value="141">Monaco</option>
                        <option value="142">Mongolia</option>
                        <option value="143">Montserrat</option>
                        <option value="144">Morocco</option>
                        <option value="145">Mozambique</option>
                        <option value="146">Myanmar</option>
                        <option value="147">Namibia</option>
                        <option value="148">Nauru</option>
                        <option value="149">Nepal</option>
                        <option value="150">Netherlands</option>
                        <option value="151">Netherlands Antilles</option>
                        <option value="152">New Caledonia</option>
                        <option value="153">New Zealand</option>
                        <option value="154">Nicaragua</option>
                        <option value="155">Niger</option>
                        <option value="156">Nigeria</option>
                        <option value="157">Niue</option>
                        <option value="158">Norfolk Island</option>
                        <option value="159">Northern Mariana Islands</option>
                        <option value="160">Norway</option>
                        <option value="161">Oman</option>
                        <option value="162">Pakistan</option>
                        <option value="163">Palau</option>
                        <option value="164">Panama</option>
                        <option value="165">Papua New Guinea</option>
                        <option value="166">Paraguay</option>
                        <option value="167">Peru</option>
                        <option value="168">Philippines</option>
                        <option value="169">Pitcairn</option>
                        <option value="170">Poland</option>
                        <option value="171">Portugal</option>
                        <option value="172">Puerto Rico</option>
                        <option value="173">Qatar</option>
                        <option value="174">Reunion</option>
                        <option value="175">Romania</option>
                        <option value="176">RU</option>
                        <option value="177">Rwanda</option>
                        <option value="178">Saint Kitts and Nevis</option>
                        <option value="179">Saint Lucia</option>
                        <option value="180">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="181">Samoa</option>
                        <option value="182">San Marino</option>
                        <option value="183">Sao Tome and Principe</option>
                        <option value="184">Saudi Arabia</option>
                        <option value="185">Senegal</option>
                        <option value="186">Seychelles</option>
                        <option value="187">Sierra Leone</option>
                        <option value="188">Singapore</option>
                        <option value="189">Slovakia (Slovak Republic)</option>
                        <option value="190">Slovenia</option>
                        <option value="191">Solomon Islands</option>
                        <option value="192">Somalia</option>
                        <option value="193">South Africa</option>
                        <option value="194">
                          South Georgia &amp; South Sandwich Islands
                        </option>
                        <option value="195">Spain</option>
                        <option value="196">Sri Lanka</option>
                        <option value="197">St. Helena</option>
                        <option value="198">St. Pierre and Miquelon</option>
                        <option value="199">Sudan</option>
                        <option value="200">Suriname</option>
                        <option value="201">
                          Svalbard and Jan Mayen Islands
                        </option>
                        <option value="202">Swaziland</option>
                        <option value="203">Sweden</option>
                        <option value="204">Switzerland</option>
                        <option value="205">Syrian Arab Republic</option>
                        <option value="206">Taiwan</option>
                        <option value="207">Tajikistan</option>
                        <option value="208">
                          Tanzania, United Republic of
                        </option>
                        <option value="209">Thailand</option>
                        <option value="210">Togo</option>
                        <option value="211">Tokelau</option>
                        <option value="212">Tonga</option>
                        <option value="213">Trinidad and Tobago</option>
                        <option value="214">Tunisia</option>
                        <option value="215">Turkey</option>
                        <option value="216">Turkmenistan</option>
                        <option value="217">Turks and Caicos Islands</option>
                        <option value="218">Tuvalu</option>
                        <option value="219">Uganda</option>
                        <option value="220">Ukraine</option>
                        <option value="221">United Arab Emirates</option>
                        <option value="222">United Kingdom</option>
                        <option value="223">United States</option>
                        <option value="224">
                          United States Minor Outlying Islands
                        </option>
                        <option value="225">Uruguay</option>
                        <option value="226">Uzbekistan</option>
                        <option value="227">Vanuatu</option>
                        <option value="228">Vatican City State</option>
                        <option value="229">Venezuela</option>
                        <option value="230">Viet Nam</option>
                        <option value="231">Virgin Islands (British)</option>
                        <option value="232">Virgin Islands (U.S.)</option>
                        <option value="233">Wallis and Futuna Islands</option>
                        <option value="234">Western Sahara</option>
                        <option value="235">Yemen</option>
                        <option value="236">Yugoslavia</option>
                        <option value="237">Zaire</option>
                        <option value="238">Zambia</option>
                        <option value="239">Zimbabwe</option>
                        <option value="240">Unlisted Country</option>
                      </select>
                    </div>

                    <div className="form-group input-group">
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        placeholder="About Info"
                      />
                    </div>
                    <div className="form-group input-group">
                      <input
                        type="password"
                        name=""
                        className="form-control"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="form-group input-group">
                      <input
                        type="password"
                        name=""
                        className="form-control"
                        placeholder="Confirm Password "
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        className="btn"
                        value="Send"
                      />
                    </div>

                    <div className="form-check d-flex align-items-center text-center"></div>
                  </form>
                  <div id="status"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <table className="table text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Turnaround Time in Days</th>
              <th scope="col">Price per Assignment in US$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>150</td>
            </tr>
          </tbody>
        </table>
      </div>
      {howWeWork(2)}
      {SpecializedArea(false)}
      {clientFeedback()}
    </>
  );
}
