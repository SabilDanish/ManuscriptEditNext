// Testimonial.js

// import React from 'react';
// import './Testimonials.css'; // Import the corresponding CSS file

// const testimonialsData = [
//   {
//     text: "Laborum quis quam. Dolorum et ut quod qua. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
//     name: "Leslie Alexander",
//     handle: "@lesliealexander",
//     image: "path-to-image", // Replace with the actual path
//   },
//   {
//     text: "Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
//     name: "Michael Foster",
//     handle: "@michaelfoster",
//     image: "path-to-image", // Replace with the actual path
//   },
//   {
//     text: "Consequatur et atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugiat laborum autem inventore ut voluptate.",
//     name: "Dries Vincent",
//     handle: "@driesvincent",
//     image: "path-to-image", // Replace with the actual path
//   },
//   {
//     text: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc.",
//     name: "Brenna Goyette",
//     handle: "@brennagoyette",
//     image: "path-to-image", // Replace with the actual path
//     companyLogo: "path-to-company-logo", // Replace with the actual path
//   },
//   {
//     text: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
//     name: "Lindsay Walton",
//     handle: "@lindsaywalton",
//     image: "path-to-image", // Replace with the actual path
//   },
//   {
//     text: "Voluptas quos itaque ipsam in voluptatem est. Itaque eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
//     name: "Tom Cook",
//     handle: "@tomcook",
//     image: "path-to-image", // Replace with the actual path
//   },
//   {
//     text: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
//     name: "Leonard Krasner",
//     handle: "@leonardkrasner",
//     image: "path-to-image", // Replace with the actual path
//   },
//   {
//     text: "Architecto libero natus est. Est quam debitis officia enim atque ut et non. Sunt reiciendis quasi eaque.",
//     name: "Floyd Miles",
//     handle: "@floydmiles",
//     image: "path-to-image", // Replace with the actual path
//   },
//   {
//     text: "Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.",
//     name: "Courtney Henry",
//     handle: "@courtneyhenry",
//     image: "path-to-image", // Replace with the actual path
//   },
//   {
//     text: "Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.",
//     name: "Whitney Francis",
//     handle: "@whitneyfrancis",
//     image: "path-to-image", // Replace with the actual path
//   },
//   {
//     text: "Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et.",
//     name: "Emily Selman",
//     handle: "@emilyselman",
//     image: "path-to-image", // Replace with the actual path
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="testimonials">
//       <div className="testimonials-title">
//         <h2>Testimonials</h2>
//         <h1>We have worked with thousands of amazing people</h1>
//       </div>
//       <div className="testimonials-grid">
//         {testimonialsData.map((testimonial, index) => (
//           <div key={index} className="testimonial-card">
//             <p>{testimonial.text}</p>
//             <div className="testimonial-author">
//               <img src={testimonial.image} alt={testimonial.name} />
//               <div>
//                 <strong>{testimonial.name}</strong>
//                 <span>{testimonial.handle}</span>
//               </div>
//               {testimonial.companyLogo && (
//                 <img
//                   src={testimonial.companyLogo}
//                   alt="Company Logo"
//                   className="company-logo"
//                 />
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// Testimonials.css

// .testimonials {
//     text-align: center;
//     padding: 2rem 1rem;
//     background-color: #f8f9fa;
//   }
  
//   .testimonials-title {
//     margin-bottom: 2rem;
//   }
  
//   .testimonials h2 {
//     color: #6c63ff; /* Example color, adjust as needed */
//     font-size: 1.25rem;
//   }
  
//   .testimonials h1 {
//     font-size: 2rem;
//     font-weight: bold;
//   }
  
//   .testimonials-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     gap: 1.5rem;
//   }
  
//   .testimonial-card {
//     background: #fff;
//     border-radius: 10px;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
//     padding: 1.5rem;
//     text-align: left;
//   }
  
//   .testimonial-card p {
//     font-style: italic;
//     margin-bottom: 1rem;
//   }
  
//   .testimonial-author {
//     display: flex;
//     align-items: center;
//   }
  
//   .testimonial-author img {
//     border-radius: 50%;
//     width: 50px;
//     height: 50px;
//     margin-right: 1rem;
//   }
  
//   .testimonial-author div {
//     display: flex;
//     flex-direction: column;
//   }
  
//   .testimonial-author strong {
//     font-size: 1rem;
//   }
  
//   .testimonial-author span {
//     font-size: 0.875rem;
//     color: #6c757d;
//   }
  
//   .company-logo {
//     margin-left: auto;
//     width: 50px;
//   }
  