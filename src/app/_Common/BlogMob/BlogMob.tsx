"use client";

import React from "react";
import "./BlogMob.css";
import image1 from "../../utils/images/blog-banner1.jpg";
import image2 from "../../utils/images/Blog-banner2.jpg";
import image3 from "../../utils/images/blog-banner-3.jpg";
import { useRouter } from "next/navigation";
import { formatDate, truncateString } from "@/app/utils/lib";

const BlogMob = ({ blogs }: any) => {
  const router = useRouter();

  const redirectTo = (url: string) => {
    router.push(url);
  };
  return (
    <>
      <div className="container ContainerDesk">
        <div className="row" style={{ justifyContent: "center" }}>
          <h1 className="accordion__title">
            OUR BEST-READ SCIENTIFIC ARTICLES
          </h1>
        </div>
      </div>

      <div className="container ContainerDesk" style={{ marginBottom: "70px" }}>
      {blogs.map((blog: any, index: number) => {
            const {
              title: { rendered },
              date,
              guid
            } = blog;
            if (index < 3) {
              return (
        <div
          className="row"
          style={{ justifyContent: "center", marginBottom: "20px !important" }}
          key={index}
          onClick={() => redirectTo(guid.rendered)}
        >
          <img src={index === 0 ? image1.src : index === 1 ? image2.src : image3.src} className="BlogImg" alt="Blog Banner" />

          <h6 className="contents">
            {truncateString(rendered,70)}{" "}
            <span className="ContentSpan" style={{ display: "block" }}>
              -{formatDate(date)}
            </span>
          </h6>
        </div>)}})}

        {/* <div
          className="row"
          style={{ justifyContent: "center", marginBottom: "20px !important" }}
        >
          <img src={image2.src} className="BlogImg" alt="Blog Banner" />

          <h6 className="contents">
            Exploring the Importance of Google Scholar Citations for Researchers{" "}
            <span className="ContentSpan" style={{ display: "block" }}>
              -May 28, 2024
            </span>
          </h6>
        </div>

        <div
          className="row"
          style={{ justifyContent: "center", marginBottom: "20px !important" }}
        >
          <img src={image3.src} className="BlogImg" alt="Blog Banner" />

          <h6 className="contents">
            Exploring the Importance of Google Scholar Citations for Researchers{" "}
            <span className="ContentSpan" style={{ display: "block" }}>
              -May 28, 2024
            </span>
          </h6>
        </div> */}
      </div>
    </>
  );
};

export default BlogMob;
