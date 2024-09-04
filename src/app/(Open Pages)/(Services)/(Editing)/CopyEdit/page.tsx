'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import Metadata from "@/app/Metadata";
import { usePathname } from 'next/navigation'
import { data } from '../../../../utils/metaFile.js'
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import Link from "next/link";
const newData: any = data;

export default function Home() {
  const pathName: string = usePathname().split("/").filter(val => val).join("")
  let metaData = newData[pathName]
  return (
    <>
      {<Metadata metaData={metaData} />}
      {breadcrum("Services / English Editing", "Copy Editing")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h3 className="pt-0 pb-3">Copyediting</h3>
              <p>
                Copyediting is a professional service focused on refining and
                enhancing written content for clarity, accuracy, and
                consistency. Copyeditors meticulously review texts for
                grammatical errors, punctuation mistakes, spelling errors, and
                typographical issues. They also ensure that the writing adheres
                to appropriate style guidelines and maintains a consistent tone
                and voice throughout.
              </p>
              <div
                className="about_icon_box wow fadeInUp animated"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="about_icon_box_inner mb-20">
                  <span>
                    <i className="fa fa-check-square-o"></i> Thorough and
                    comprehensive proofreading of the manuscript.
                  </span>
                </div>
                <div className="about_icon_box_inner mb-20">
                  <span>
                    <i className="fa fa-check-square-o"></i> Checking the
                    manuscript's English language for spelling, vocabulary,
                    grammar and punctuation.
                  </span>
                </div>
                <div className="about_icon_box_inner mb-20">
                  <span>
                    <i className="fa fa-check-square-o"></i> Checking for the
                    consistency in writing style (capitalization,
                    American/British Eng).
                  </span>
                </div>
                <div className="about_icon_box_inner mb-20">
                  <span>
                    <i className="fa fa-check-square-o"></i> Checking for
                    consistent use of abbreviations.
                  </span>
                </div>
                <div className="about_icon_box_inner mb-20">
                  <span>
                    <i className="fa fa-check-square-o"></i> Checking the
                    manuscript for consistency in referencing style.
                  </span>
                </div>
                <div className="about_icon_box_inner mb-20">
                  <span>
                    <i className="fa fa-check-square-o"></i> Rephrasing and
                    revising the sentences for better clarity.
                  </span>
                </div>
              </div>
              <button onClick={() => { redirect('register') }} className="btn btn-primary mt-3 mr-3">
                Request a Quote
              </button>
              <Link href={"/ContactUs"}><button className="btn btn-primary mt-3 mr-3">
                Schedule a Call
              </button></Link>

            </div>
            <div className="col-md-5">
              <img
                src="/images/menuscimg/copyedit.jpeg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>

      {SpecializedArea()}
      {ourProfessional()}
      {clientFeedback()}
      {FAQ()}
    </>
  );
}
