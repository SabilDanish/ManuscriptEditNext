import Link from "next/link";
import "./Bloggy.css";

const Bloggy = () => {
  const blogs = [
    {
      title: "Quartiles of the...",
      blogDetails:
        "Journal quartiles affect the credibility of research by ranking journal...",
      image: "/images/BloggyImage/blogBanner1.jpg",
      link: "https://www.manuscriptedit.com/scholar-hangout/quartiles-of-the-journals/",
    },
    {
      title: "Distinguishing Aims...",
      blogDetails:
        "Understand the key differences between research aims and objectives to... ",
      image: "/images/BloggyImage/blogBanner2.jpg",
      link: "https://www.manuscriptedit.com/scholar-hangout/journal-article-review-in-apa-style-a-scholars-guide/",
    },
    {
      title: "Journal Article... ",
      blogDetails:
        "Learn how to craft precise and impactful journal article reviews in APA...",
      image: "/images/BloggyImage/blogBanner3.jpg",
      link: "https://www.manuscriptedit.com/scholar-hangout/aims-vs-objectives/",
    },
    {
      title: "Decoding Life...",
      blogDetails:
        "Discover the marvels of prenatal science—is it possible to forecast...",
      image: "/images/BloggyImage/blogBanner4.jpg",
      link: "https://www.manuscriptedit.com/scholar-hangout/decoding-life-before-birth-unanswered-questions-in-prenatal-science/",
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="row" style={{display:'flex' , justifyContent:'center'}}>
          {blogs.map((val, index) => (
            <div className="col-lg-3" key={index}>
              <div className="blog-card">
                <img src={val.image} alt={val.title} className="blog-image" />
                <h3 className="blog-title">{val.title}</h3>
                <p className="blog-details">{val.blogDetails}</p>
                <Link className="btn" href={val.link}>
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bloggy;
