"use client";

import "./BlogDesk.css";
import image4 from "../../utils/images/blog-banner1.jpg";
import image5 from "../../utils/images/Blog-banner2.jpg";
import image6 from "../../utils/images/blog-banner-3.jpg";
import { useRouter } from "next/navigation";
import { formatDate, truncateString } from "@/app/utils/lib";

const BlogDesk = ({ blogs }: any) => {
  const router = useRouter();

  const redirectTo = (url: string) => {
    router.push(url);
  };

  const handleRedirect = (url: string, slug: string): void => {
    const data = { url };
    localStorage.setItem("url", url);
    router.push(`/scholar-hangout/${slug}`);
  };

  return (
    <>
      <div className="container BlogDesktop" style={{ marginTop: "30px" }}>
        <div className="row" style={{ justifyContent: "center" }}>
          <h1
            className="accordion__title"
            style={{ marginTop: "30px", marginBottom: "40px" }}
          >
            OUR ARTICLES
          </h1>
        </div>
      </div>

      <div className="container BlogDesktop">
        <div className="row">
          {blogs.map((blog: any, index: number) => {
            const {
              title: { rendered },
              date,
              guid,
              slug,
              _embedded: {
                "wp:featuredmedia": [{ source_url }],
              },
            } = blog;
            if (index < 4) {
              return (
                <div
                  key={index}
                  className="col-lg-3"
                  onClick={() => handleRedirect(guid.rendered, slug)}
                >
                  <div className="card">
                    <img src={source_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        {truncateString(rendered, 30)}
                      </p>
                      <p className="card-title">
                        - {formatDate(date)}
                        <span className="arrow"> →</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default BlogDesk;
