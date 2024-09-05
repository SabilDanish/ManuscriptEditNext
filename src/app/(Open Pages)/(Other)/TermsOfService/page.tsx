import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import Metadata from "@/app/Metadata";
import { usePathname } from 'next/navigation'
import { data } from '../../../utils/metaFile.js'
const newData: any = data;

export default function Home() {
  // const pathName: string = usePathname().split("/").filter(val => val).join("")
  // let metaData = newData[pathName]
  return (
    <>
    {/* {<Metadata metaData={metaData} />} */}
      {breadcrum("", "Terms Of Service")}
      <div className="col-lg-10 col-md-10 col-sm-10 mt-5 mb-5 mx-auto">
        <div className="formmm" style={{ margin: 0, padding: 25 }}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="col-lg-6 col-md-6 col-sm-6 pt-2">
              <ul>
                <li className="pb-3">
                  The right to privacy and confidentiality shall always be
                  respected.
                </li>
                <li className="pb-3">
                  All publishing rights to documents/materials/text produced or
                  edited by Manuscriptedit.com subsidiary of Reseapro Scientific
                  Services (P) Ltd. shall remain with the client.
                </li>
                <li className="pb-3">
                  For our editing services, while revisions and/or corrections
                  may affect the length of the document/material/text submitted,
                  all service fees will be based on the total number of words in
                  the originally submitted document.
                </li>
                <li className="pb-3">
                  Manuscriptedit.com subsidiary of Reseapro Scientific Services
                  (P) Ltd. shall not be held liable for any plagiarism, illegal
                  doings, or fraudulent material submitted to us by the client.
                </li>
                <li className="pb-3">
                  Manuscriptedit.com subsidiary of Reseapro Scientific Services
                  (P) Ltd. reserves the right to refuse materials submitted for
                  editing or writing assignments. Documents containing unethical
                  and/or illegal material may lead to the loss of the right to
                  confidentiality.
                </li>
                <li className="pb-3">
                  While Manuscriptedit.com subsidiary of Reseapro Scientific
                  Services (P) Ltd. takes all necessary precautions to safeguard
                  all submitted documents, it shall not be held liable for the
                  loss of documents due to power failure, hardware/software
                  failure, computer viruses, natural disasters, or any other
                  unforeseen matters and factors beyond our control.
                </li>
                <li className="pb-3">
                  Payment must be received before the release of the completed
                  document unless agreed upon otherwise.
                </li>
                <li className="pb-3">
                  Manuscriptedit is a company driven by human acumen, and all
                  services rendered by the company are subject to the
                  limitations of human endeavour. Therefore, despite our best
                  efforts, Manuscriptedit shall not be liable for any failure to
                  perform its obligations where such failure results from any
                  cause beyond Manuscriptedit’s reasonable control, including,
                  inter alia, acts of God, epidemics like the Covid-19 pandemic,
                  mechanical, electronic or communications failure or
                  degradation, or human failure.{" "}
                  <b>
                    This stipulation expressly precludes the possibility of any
                    claim for refund for any subscribed or purchased services on
                    the Manuscriptedit platform or its bouquet of services.
                  </b>
                </li>
                <li className="pb-3">
                  No other guarantees or liabilities that are not contained in
                  this agreement shall be binding upon our company.
                </li>
                <li className="pb-3">
                  This website is owned and operated by Reseapro Scientific
                  Services (P) Ltd. and is protected by international copyright
                  and trademark laws. You may not modify, copy, reproduce,
                  republish, upload, post, transmit, or distribute in any way,
                  any material from this site, including code and software. You
                  may download material from this site for your personal,
                  non-commercial use only, provided you keep intact all
                  copyright and other proprietary notices.
                </li>
                <li className="pb-3">
                  Manuscriptedit.com subsidiary of Reseapro Scientific Services
                  (P) Ltd. may, in its sole and absolute discretion, immediately
                  terminate service, should the client's conduct fail to conform
                  to the terms and conditions of our service.
                </li>
                <li className="pb-3">
                  The validity, interpretation, construction, and performance of
                  the Terms and Conditions of Service shall be governed by the
                  laws of India.
                </li>
                <li className="pb-3">
                  The Terms and Conditions of Service and disclaimers, as well
                  as the site itself, may be modified, amended, or updated by
                  Manuscriptedit.com subsidiary of Reseapro Scientific Services
                  (P) Ltd. at any time without notice, provided that any
                  modification, amendment, or update to the Terms of Service
                  will only be effective against the client for purchases
                  occurring after the (effective date) thereof, which effective
                  date will occur on the date that such modified Terms and
                  Conditions are posted on this site.
                </li>
                <li className="pb-3">
                  By using this website, the client agrees to be bound by all of
                  the terms and conditions of Manuscriptedit.com subsidiary of
                  Reseapro Scientific Services (P) Ltd.'s service. Should the
                  client object to any such terms and conditions or any
                  subsequent modifications thereto or become dissatisfied with
                  the site in any way, the client's sole recourse is to
                  discontinue his/her use of the site.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
