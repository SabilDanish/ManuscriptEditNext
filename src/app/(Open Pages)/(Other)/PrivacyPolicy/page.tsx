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
      {breadcrum("", "Privacy Policy")}
      <div className="col-lg-10 col-md-10 col-sm-10 mt-5 mb-5 mx-auto">
        <div className="formmm" style={{ margin: 0, padding: 25 }}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="col-lg-6 col-md-6 col-sm-6 pt-2">
              <h4 className="mb-5">Our Commitments to You</h4>
              <p>
                Reseapro Scientific Services (P) Ltd. respects and protects the
                privacy of the individuals that use our websites. Individually
                identifiable information about you is not willfully disclosed to
                any third party without first receiving your permission, as
                explained in this privacy policy ("Privacy Policy").
              </p>
              <p>
                You are in control of the personal information you provide
                online to Reseapro Scientific Services (P) Ltd. You can:
              </p>
              <ul className="mt-4 mb-4">
                <li>Ask for a copy of your personal information.</li>
                <li className="pt-2">
                  Ask for your personal information to be corrected or updated.
                </li>
                <li className="pt-2">
                  Ask us to remove your personal information from our records.
                </li>
              </ul>
              <p>
                To do this, please contact us at the e-mail address listed at
                the bottom of this statement. Reseapro Scientific Services (P)
                Ltd. will use reasonable efforts to provide that information to
                you.
              </p>
              <p>
                This Website contains links to other sites that are outside of
                Reseapro Scientific Services (P) Ltd.'s control. These sites may
                have their own policy regarding privacy and you are encouraged
                to read their Privacy Policy.
              </p>

              <h4 className="mb-45 mt-70">
                Information Sharing and Disclosure
              </h4>
              <p>
                Reseapro Scientific Services (P) Ltd. will not sell or rent your
                personal information to anyone.
              </p>
              <p>
                We may share personal information collected on the Website with
                our partners and third parties but only with your consent, which
                can be granted in the form of an opt-out at the points where
                personal information is collected.
              </p>
              <p>
                We may disclose personal information when required by law or if
                in good faith we believe that such action is necessary in order
                to conform to the requirements of law or comply with legal
                process served on the Website.
              </p>

              <h4 className="mb-45 mt-70">Personal Information</h4>
              <p>
                Personal information is information such as your name, birth
                date, e-mail or mailing address that can be used to uniquely
                identify you.
              </p>
              <p>
                You can access any RESEAPRO Websites and browse it without
                providing your personal information. However in order to
                participate in some of the activities available, or to benefit
                from services offered on the Website, a user must provide
                personal information (including, but not limited to, your name,
                address, telephone number, email address, and credit card number
                if you place an order with us).
              </p>
              <p>
                When you purchase a product or service, Reseapro Scientific
                Services (P) Ltd. will collect credit card information for
                invoicing purposes. This information is processed for Reseapro
                Scientific Services (P) Ltd. by a third party partner. That
                third party and Reseapro Scientific Services (P) Ltd. use
                security techniques, including encryption and secure servers, to
                protect against any unauthorized access to transmitted
                information used for invoicing purposes. Neither Reseapro
                Scientific Services (P) Ltd. nor our third party partner stores,
                uses, or shares, credit card information for any other purpose.
              </p>
              <p>
                Personal information collected on this Website is used primarily
                for the purpose it is requested. In particular, contact
                information such as name and e-mail addresses is used to provide
                users with the services they have chosen on this Website, such
                as, for example, the provision of newsletters.
              </p>
              <p>
                We may use personal information collected to contact users in
                connection with their inappropriate use of this Website,
                non-compliance with any Terms and Conditions of Use, or in
                connection with a complaint filed by another user.
              </p>

              <h4 className="mb-45 mt-70">Anonymous Information</h4>
              <p>
                Reseapro Scientific Services (P) Ltd. may collect certain
                aggregate data called web log information (such as your web
                browser, operating system, pages visited, etc.) and use cookies
                (see below) when you visit any of our web pages. For instance,
                when you visit one of our websites, our web server will
                automatically recognize some non-personal information, including
                but not limited to the date and time you visited our site, the
                pages you visited, the referrer (the website you came from), the
                type of browser you are using (e.g., Netscape, Internet
                Explorer), the type of operating system you are using (e.g.,
                Windows '95 or Mac OS), and the domain name and address of your
                Internet service provider (e.g., America Online, EarthLink).
              </p>
              <p>
                A "cookie" is a small text file, stored by your browser on your
                computer's hard drive, which can be read by our system when you
                return to our site. Most Web browsers automatically accept
                cookies, but you can usually change your browser to prevent that
                if you wish. Whilst Reseapro Scientific Services (P) Ltd. uses
                cookies to track your visit to our site, this information does
                not identify you personally and you remain anonymous unless you
                provide Reseapro Scientific Services (P) Ltd. with personal
                information.
              </p>
              <p>
                In some cases we may also collect information about you that you
                voluntarily submit and which is not personal, such as general
                statistical information like age, gender, household size,
                zip/postal code, preferences and interests.
              </p>

              <h4 className="mb-45 mt-70">Use of Personal Information</h4>
              <p>
                We may use your personal information to contact you. For
                example, we may send you marketing or promotional materials
                including emails or other information, we may respond to your
                comments or requests for information or we may contact you, if
                needed, in the course of processing or shipping your order for
                products or services offered through our websites. We may also
                enhance or merge personal information with data obtained from
                third parties for the same purposes.
              </p>
              <p>
                We also use personal information about you to improve our
                marketing and promotional efforts to statistically analyze site
                usage to improve our content and product offerings and to
                customize our sites' content, layout and services. We may also
                use your information to deliver information to you that, in some
                cases, is targeted to your interests, such as targeted banners,
                new services and promotions. We believe these uses allow us to
                improve our site and better tailor it to meet our visitors'
                needs. Reseapro Scientific Services (P) Ltd. does not collect
                personal information automatically, but we may combine
                non-personal information collected automatically (e.g., through
                cookies) with your previously submitted personal information.
              </p>
              <p>
                Reseapro Scientific Services (P) Ltd. occasionally sends
                visitors emails describing new products, promotions or events.
                These services are optional and you may request to opt-out of
                these services completely, at any time. We will only store your
                personal information for a reasonable period of time.
              </p>
              <p>
                If you have any queries about our services, please contact us by
                phone, fax or e-mail to
                <a href="">support@manuscriptedit.com</a> .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
