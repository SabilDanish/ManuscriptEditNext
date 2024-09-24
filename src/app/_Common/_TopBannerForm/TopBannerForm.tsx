// import { useRef, useState, useEffect } from "react";
// import "./TopBannerForm.css";
// import banner1 from "../../utils/images/banner_01.jpg";
// // import banner2 from "../../utils/images/banner13.jpg";
// // import banner3 from "../../utils/images/banner11.jpg";
// // import banner4 from "../../utils/images/banner14.jpg";
// import mobileBanner1 from '../../utils/images/banner-for-mobile-view1.jpg';
// import mobileBanner2 from '../../utils/images/banner-for-mobile-view2.jpg';
// import mobileBanner3 from '../../utils/images/banner-for-mobile-view3.jpg';
// import mobileBanner4 from '../../utils/images/banner-for-mobile-view4.jpg';
// import useForm from "@/app/hooks/mainForm/useForm";
// import { DNA } from "react-loader-spinner";

// const TopBannerForm = () => {
//   const [form, setForm] = useState<any>({
//     name: "",
//     service: "",
//     phone_no: "",
//     email: "",
//     msg: "",
//   });
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   const formRef = useRef<any>(null);

//   const { isLoading, postData } = useForm();
//   useEffect(() => {
//     const carouselContainers = document.querySelectorAll(".carouselContainer");
//     carouselContainers.forEach((carouselContainer) => {
//       let currentIndex = 0;
//       const slides = carouselContainer.querySelectorAll(".carouselItem");
//       const totalSlides = slides.length;

//       const showSlide = (index: any) => {
//         slides.forEach((slide, idx) => {
//           if (idx === index) {
//             slide.classList.add("active");
//           } else {
//             slide.classList.remove("active");
//           }
//         });
//       };

//       const nextSlide = () => {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         showSlide(currentIndex);
//       };

//       setInterval(nextSlide, 4000);
//     });
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 600);
//     };

//     // Set initial value
//     handleResize();

//     // Add event listener
//     window.addEventListener('resize', handleResize);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const formHandler = (event: any) => {
//     const { name, value } = event.target;
//     setForm({ ...form, [name]: value });
//   };

//   const formSubmitOne = (e: any) => {
//     postData(form,setForm);
//     formRef.current.reset();
//   };

//   const formSubmitTwo = (e: any) => {
//     postData(form,setForm);
//     formRef.current.reset();
//   };

//   return (
//     <>
//       <div className="bannerContainer">
//         <div className="carouselContainer">
//           {/* <div className={`$"carouselItem" $"active"`}>
//             <img src={!isSmallScreen ? banner1.src : mobileBanner1.src} className="carouselImage" alt="Banner 1" />
//           </div> */}
//           {/* <div className="carouselItem">
//             <img src={!isSmallScreen ? banner2.src : mobileBanner2.src} className="carouselImage" alt="Banner 2" />
//           </div>
//           <div className="carouselItem">
//             <img src={!isSmallScreen ? banner3.src : mobileBanner3.src} className="carouselImage" alt="Banner 3" />
//           </div>
//           <div className="carouselItem">
//             <img src={!isSmallScreen ? banner4.src : mobileBanner4.src} className="carouselImage" alt="Banner 4" />
//           </div> */}
//           <div className="carouselItem">
//             <img src={!isSmallScreen ? banner1.src : mobileBanner1.src} className="carouselImage" alt="Banner 1" />
//           </div>
//         </div>
//         {/* <div className="formContainer">
//           <h6 style={{textTransform:"uppercase"}}>Get help in your research journey</h6>
//           <form ref={formRef} id="contactForm">
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Full Name"
//               required
//               className="formControl"
//               onChange={(e) => formHandler(e)}
//             />
//             <select
//               name="service"
//               required
//               className="formControl"
//               onChange={(e) => formHandler(e)}
//               style={{ height: "auto" }}
//             >
//               <option value="">Select Service</option>
//               <option value="Writing Manuscript/Thesis">
//                 Writing Manuscript/Thesis
//               </option>
//               <option value="Data Analysis for Manuscript/Thesis">
//                 Data Analysis for Manuscript/Thesis
//               </option>
//               <option value="Editing/Rewriting/Formatting/Proofreading">
//                 Editing/Rewriting/Formatting/Proofreading
//               </option>
//               <option value="Publication of Manuscript ">
//                 Publication of Manuscript
//               </option>
//               <option value="Paper from Thesis">Paper from Thesis</option>
//               <option value="Expert Book Chapter Publishing Support">
//                 Expert Book Chapter Publishing Support
//               </option>
//               <option value="PhD Support & Assistance">
//                 PhD Support & Assistance
//               </option>
//             </select>
//             <input
//               type="tel"
//               name="phone_no"
//               placeholder="Enter Your Phone Number"
//               required
//               className="formControl"
//               onChange={(e) => formHandler(e)}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Mail"
//               required
//               className="formControl"
//               onChange={(e) => formHandler(e)}
//             />

//             <button
//               type="submit"
//               className="submitButton"
//               onClick={formSubmitOne}
//             >
//               {isLoading ? <DNA height="30" /> : "TALK TO AN EXPERT"}
//             </button>
//           </form>
//         </div> */}

//         {/* <div className="bannerButtons">
//          <a href="https://secure.manuscriptedit.com/quotation"><button className="bannerButton">Request a quote</button></a> 
//           <a href="https://secure.manuscriptedit.com/advisory"></a><button className="bannerButton">Consult an Expert</button>
//         </div> */}


//       </div>
//       {/* <div className="container">
//         <div className="row">
//           <div className="formContainer2">
//             <h6>Get Quick Response Within 24 Hours</h6>
//             <form id="contactForm2">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter Your Full Name"
//                 required
//                 className="formControl"
//                 onChange={(e) => formHandler(e)}
//               />
//               <select
//                 name="service"
//                 required
//                 className="formControl"
//                 onChange={(e) => formHandler(e)}
//               >
//                 <option value="">Select Service</option>
//                 <option value="Writing Manuscript/Thesis">
//                   Writing Manuscript/Thesis
//                 </option>
//                 <option value="Data Analysis for Manuscript/Thesis">
//                   Data Analysis for Manuscript/Thesis
//                 </option>
//                 <option value="Editing/Rewriting/Formatting/Proofreading">
//                   Editing/Rewriting/Formatting/Proofreading
//                 </option>
//                 <option value="Publication of Manuscript ">
//                   Publication of Manuscript
//                 </option>
//                 <option value="Paper from Thesis">Paper from Thesis</option>
//                 <option value="Expert Book Chapter Publishing Support">
//                   Expert Book Chapter Publishing Support
//                 </option>
//                 <option value="PhD Support & Assistance">
//                   PhD Support & Assistance
//                 </option>
//               </select>
//               <input
//                 type="tel"
//                 name="phone_no"
//                 placeholder="Enter Your Phone Number"
//                 required
//                 className="formControl"
//                 onChange={(e) => formHandler(e)}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Mail"
//                 required
//                 className="formControl"
//                 onChange={(e) => formHandler(e)}
//               />
//               <textarea
//                 name="msg"
//                 placeholder="Your Message"
//                 required
//                 className="formControl"
//                 onChange={(e) => formHandler(e)}
//               ></textarea>
//               <button
//                 type="submit"
//                 className="submitButton"
//                 onClick={formSubmitTwo}
//               >
//                 {isLoading ? <DNA height="20" /> : "TALK TO AN EXPERT"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div> */}

//     </>
//   );
// };

// export default TopBannerForm;


import { useRef, useState, useEffect } from "react";
import "./TopBannerForm.css";
import bannerA from '../../utils/images/bannerA.png';

import useForm from "@/app/hooks/mainForm/useForm";
import { DNA } from "react-loader-spinner";

const TopBannerForm = () => {

  return (
    <>
      <div className="container" >
        <div className="row">
          <div className="col-lg-5">
            <h4 style={{ fontWeight: "Bold", fontSize: "2rem", marginTop: "20%" }}>
              <span style={{ fontSize: "3rem", color: "#6C070A", fontWeight: "800" }}>Expert</span> Research Paper Editing and
              Publishing Services for Global Impact
            </h4>
            <h5 style={{ marginTop: "2rem" }}>We provide end to end assistance from conception to publication.</h5>
            <a className="btn mt-12" href="#" role="button" style={{ backgroundColor: "#151130", color: "white", marginTop: "2rem" }}>Get Started →</a>
          </div>
          <div className={`$"carouselItem" $"active" col-lg-7`}>
            <img src={bannerA.src} className="carouselImage" alt="Banner 1" />
          </div>
        </div>


      </div>
    </>
  );
};

export default TopBannerForm;