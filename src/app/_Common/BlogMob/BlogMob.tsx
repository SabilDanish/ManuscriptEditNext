"use client";

import React from "react";
import "./BlogMob.css";
import { useRouter } from "next/navigation";
import { Carousel } from 'react-bootstrap';
import { formatDate, truncateString } from "@/app/utils/lib";

const BlogMob = ({ blogs }: any) => {
  const router = useRouter();

  const redirectTo = (url: string) => {
    router.push(url);
  };

  const handleRedirect = (url: string, slug: string): void => {
    const data = { url };
    localStorage.setItem("url", url)
    router.push(`/scholar-hangout/${slug}`);
  };

  return (
    <>
      <div className="container ContainerDesk">
        <div className="row" style={{ justifyContent: "center" }}>
          <h1 className="Gappy text-center">
            Our Articles
          </h1>
        </div>
      </div>

      <div className="container ContainerDesk" style={{ marginBottom: "20px" }}>
        <Carousel>
          {blogs.map((blog: any, index: number) => {
            const {
              title: { rendered },
              date,
              guid,
              slug,
              _embedded: {
                'wp:featuredmedia': [{
                  source_url
                }]
              },
            } = blog;

            return (
              <Carousel.Item key={index}>
                <div className="row GappyDown" style={{ justifyContent: "center" }}>
                  <img
                    src={source_url}
                    className="BlogImg"
                    alt="Blog Banner"
                    onClick={() => handleRedirect(guid.rendered, slug)}
                  />
                  <h6 className="contents" onClick={() => handleRedirect(guid.rendered, slug)}>
                    {truncateString(rendered, 70)}{" "}
                    <span className="ContentSpan" style={{ display: "block" }}>
                      -{formatDate(date)}
                    </span>
                  </h6>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default BlogMob;
