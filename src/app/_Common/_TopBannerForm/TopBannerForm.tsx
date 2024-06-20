import { useState, useEffect } from "react";
import "./TopBannerForm.css";
import banner1 from "../../utils/images/banner12.jpg";
import banner2 from "../../utils/images/banner13.jpg";
import banner3 from "../../utils/images/banner11.jpg";
import banner4 from "../../utils/images/banner14.jpg";
import useForm from "@/app/hooks/mainForm/useForm";
import { DNA } from "react-loader-spinner";

const TopBannerForm = () => {
  const [form, setForm] = useState<any>({
    name: "",
    service: "",
    phone_no: "",
    email: "",
    msg: "",
  });

  const { isLoading, postData } = useForm();
  useEffect(() => {
    const carouselContainers = document.querySelectorAll(".carouselContainer");
    carouselContainers.forEach((carouselContainer) => {
      let currentIndex = 0;
      const slides = carouselContainer.querySelectorAll(".carouselItem");
      const totalSlides = slides.length;

      const showSlide = (index: any) => {
        slides.forEach((slide, idx) => {
          if (idx === index) {
            slide.classList.add("active");
          } else {
            slide.classList.remove("active");
          }
        });
      };

      const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
      };

      setInterval(nextSlide, 4000);
    });
  }, []);

  const formHandler = (event: any) => {
    console.log({ event });
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const formSubmitOne = (e: any) => {
    e.preventDefault();
    postData(form);
    setForm({
      name: "",
      service: "",
      phone_no: "",
      email: "",
      msg: "",
    });
  };

  const formSubmitTwo = () => {
    postData(form);
    setForm({
      name: "",
      service: "",
      phone_no: "",
      email: "",
      msg: "",
    });
  };

  return (
    <>
      <div className="bannerContainer">
        <div className="carouselContainer">
          <div className={`$"carouselItem" $"active"`}>
            <img src={banner1.src} className="carouselImage" alt="Banner 1" />
          </div>
          <div className="carouselItem">
            <img src={banner2.src} className="carouselImage" alt="Banner 2" />
          </div>
          <div className="carouselItem">
            <img src={banner3.src} className="carouselImage" alt="Banner 3" />
          </div>
          <div className="carouselItem">
            <img src={banner4.src} className="carouselImage" alt="Banner 4" />
          </div>
          <div className="carouselItem">
            <img src={banner1.src} className="carouselImage" alt="Banner 1" />
          </div>
        </div>
        <div className="formContainer">
          <h6>Get Quick Response Within 24 Hours</h6>
          <form id="contactForm">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              required
              className="formControl"
              onChange={(e) => formHandler(e)}
            />
            <select
              name="service"
              required
              className="formControl"
              onChange={(e) => formHandler(e)}
              style={{ height: "auto" }}
            >
              <option value="">Select Service</option>
              <option value="Writing Manuscript/Thesis">
                Writing Manuscript/Thesis
              </option>
              <option value="Data Analysis for Manuscript/Thesis">
                Data Analysis for Manuscript/Thesis
              </option>
              <option value="Editing/Rewriting/Formatting/Proofreading">
                Editing/Rewriting/Formatting/Proofreading
              </option>
              <option value="Publication of Manuscript ">
                Publication of Manuscript
              </option>
              <option value="Paper from Thesis">Paper from Thesis</option>
              <option value="Expert Book Chapter Publishing Support">
                Expert Book Chapter Publishing Support
              </option>
              <option value="PhD Support & Assistance">
                PhD Support & Assistance
              </option>
            </select>
            <input
              type="tel"
              name="phone_no"
              placeholder="Enter Your Phone Number"
              required
              className="formControl"
              onChange={(e) => formHandler(e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Mail"
              required
              className="formControl"
              onChange={(e) => formHandler(e)}
            />
            <textarea
              name="msg"
              placeholder="Your Message"
              required
              className="formControl"
              onChange={(e) => formHandler(e)}
            ></textarea>
            <button
              type="submit"
              className="submitButton"
              onClick={formSubmitOne}
            >
              {isLoading ? <DNA height="30" /> : "Send"}
            </button>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="formContainer2">
            <h6>Get Quick Response Within 24 Hours</h6>
            <form id="contactForm2">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                required
                className="formControl"
                onChange={(e) => formHandler(e)}
              />
              <select
                name="service"
                required
                className="formControl"
                onChange={(e) => formHandler(e)}
              >
                <option value="">Select Service</option>
                <option value="Writing Manuscript/Thesis">
                  Writing Manuscript/Thesis
                </option>
                <option value="Data Analysis for Manuscript/Thesis">
                  Data Analysis for Manuscript/Thesis
                </option>
                <option value="Editing/Rewriting/Formatting/Proofreading">
                  Editing/Rewriting/Formatting/Proofreading
                </option>
                <option value="Publication of Manuscript ">
                  Publication of Manuscript
                </option>
                <option value="Paper from Thesis">Paper from Thesis</option>
                <option value="Expert Book Chapter Publishing Support">
                  Expert Book Chapter Publishing Support
                </option>
                <option value="PhD Support & Assistance">
                  PhD Support & Assistance        
                </option>
              </select>
              <input
                type="tel"
                name="phone_no"
                placeholder="Enter Your Phone Number"
                required
                className="formControl"
                onChange={(e) => formHandler(e)}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Mail"
                required
                className="formControl"
                onChange={(e) => formHandler(e)}
              />
              <textarea
                name="msg"
                placeholder="Your Message"
                required
                className="formControl"
                onChange={(e) => formHandler(e)}
              ></textarea>
              <button
                type="submit"
                className="submitButton"
                onClick={formSubmitTwo}
              >
                {isLoading ? <DNA height="20" /> : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBannerForm;
