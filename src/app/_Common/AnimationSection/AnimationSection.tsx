import { useState } from "react";
import { Carousel, Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AnimationSection.css";
import Link from "next/link";

const journals = [
  {
    id: 1,
    logo: "/images/BloggyImage/Sci-Reports-Nature.jpg",
    name: "Nature – Scientific Reports",
    title:
      "Comparative analysis of complete chloroplast genome of ethnodrug Aconitum... ",
    impactFactor: "3.8",
    link: "https://www.nature.com/articles/s41598-022-13524-3",
  },
  {
    id: 2,
    logo: "/images/BloggyImage/v2.png",
    name: "BMC Cancer (Springer Nature)",
    title:
      "Sentinel lymph node procedure in patients with recurrent vulvar squamous...",
    impactFactor: "3.4",
    link: "https://bmccancer.biomedcentral.com/articles/10.1186/s12885-022-09543-y",
  },
  {
    id: 3,
    logo: "/images/BloggyImage/plosOne.avif",
    name: "PLOS ONE",
    title:
      "Pterostilbene-Isothiocyanate Conjugate Suppresses Growth of Prostate Cancer Cells ...",
    impactFactor: "3",
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0093335",
  },
  {
    id: 4,
    logo: "/images/BloggyImage/SpringerLogooo.jpg",
    name: "Advances in Therapy (Springer)",
    title:
      "Ofatumumab – a valid treatment option for chronic lymphocytic leukemia patients...",
    impactFactor: "3.4",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5530057/",
  },
  {
    id: 5,
    logo: "/images/BloggyImage/logo_group.webp",
    name: "Clinical Ophthalmology (Dove Press)",
    title:
      "Guidelines for the Management of Center-Involving Diabetic Macular Edema:...",
    impactFactor: "1.8",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5530057/",
  },
];

const AnimationSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  const slides = [];
  for (let i = 0; i < journals.length; i += 2) {
    slides.push(journals.slice(i, i + 2));
  }

  return (
    <Container className="mt-4 mb-4">
      <h2 className="accordion-title">Recent Publications</h2>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={4000}>
        {slides.map((slide, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="justify-content-center">
              {slide.map((journal) => (
                <Col md={6} key={journal.id}>
                  <Card className="text-center p-3">
                    <Row className="align-items-center">
                      <Col xs={4} className="text-center">
                        <img
                          src={journal.logo}
                          alt={journal.name}
                          className="img-fluid rounded"
                          style={{ maxWidth: "70%" }}
                        />
                      </Col>
                      <Col xs={8} className="text-start">
                        <Card.Title>{journal.name}</Card.Title>
                        <Card.Text>
                          <strong>Title:</strong> {journal.title} <br />
                          <strong>Impact Factor:</strong> {journal.impactFactor}
                        </Card.Text>
                        <Button
                          className="btn2"
                          variant="primary"
                          href={journal.link}
                          target="_blank"
                        >
                          Visit
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <div style={{marginTop:"35px" , textAlign:"center"}}>
        <Link className="buttonSeeAll" href="/AllPublications">
          See All
        </Link>
      </div>
    </Container>
  );
};

export default AnimationSection;
