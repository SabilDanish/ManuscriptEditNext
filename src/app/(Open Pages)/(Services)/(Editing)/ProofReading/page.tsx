"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import redirect from "@/app/_Common/_functionality/Redirect";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import Metadata from "@/app/Metadata";
import Renovation from "@/app/_Common/Renovation/Renovation";
import Dropdown2 from "@/app/_Common/Dropdown2/Dropdown2";

const newData: { [key: string]: { [key: string]: string } } = data;

export default function Home() {
  const pathName: string = usePathname()
    .split("/")
    .filter((val) => val)
    .join("");
  let metaData = newData[pathName];
  return (
    <>
      {<Metadata metaData={metaData} />}

      <Renovation />

      <div className="wcus-container">
        <div className="wcus-client-reviews">
          <h3 className="editing-overview-heading">Testimonial</h3>
          <div className="row d-flex justify-content-around">
            {[
              {
                imgSrc:
                  "https://manuscriptedit.com/_next/static/media/sd.f75dbd94.jpeg",
                text: "The best editing service I've used. Got published in record time!",
                name: "Dr. Emily Carter",
              },
              {
                imgSrc:
                  "https://manuscriptedit.com/_next/static/media/ah.73aaea49.jpeg",
                text: "Exceptional support from expert editors. Highly recommended!",
                name: "Prof. John Williams",
              },
              {
                imgSrc:
                  "	https://manuscriptedit.com/_next/static/media/ad.8a1b15bf.jpg",
                text: "Many thanks for your excellent work and the comments. I like it very much, Appreciated.",
                name: "J Y",
              },
              {
                imgSrc:
                  "https://manuscriptedit.com/_next/static/media/ag.07ec11ab.jpg",
                text: "Thank you. You and your editorial/writing team have done an EXCELLENT job and i am grateful for your generosity.",
                name: "Emily Selman",
              },
            ].map((review, index) => (
              <div className="wcus-review col-lg-5" key={index}>
                <img src={review.imgSrc} alt="Client" />
                <p>
                  "{review.text}" - <strong>{review.name}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
        <h3>
          <br />
          🏆 Rated 4.9 out of 5 by academic professionals, scientists, and
          publishing experts.
          <br />
          <br />
          📑 Trusted by universities, funding agencies, and research
          institutions.
        </h3>
        <div className="cta-container">
          <a
            href="https://manuscriptedit.com/Testimonial/"
            className="cta-button"
          >
            See More Reviews
          </a>
        </div>
      </div>

      <Dropdown2 />
    </>
  );
}
