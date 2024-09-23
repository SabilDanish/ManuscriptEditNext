import React from 'react';
import ExpertCard from './ExpertCard';

const experts = [
  {
    name: 'Dr. Laref Nora',
    title: 'M.B.Ch.B (University of Sulaimani/School of Medicine)',
    education: [
      'Ph.D in Microbiology and Immunology - Dalhousie University.',
      'BSc and MSc degrees in Microbiology - University of Guelph.'
    ],
    image: '/images/ourprof/dr_lb.png'
  },
  {
    name: 'Dr. Laref Nora',
    title: 'M.B.Ch.B (University of Sulaimani/School of Medicine)',
    education: [
      'Ph.D in Microbiology and Immunology - Dalhousie University.',
      'BSc and MSc degrees in Microbiology - University of Guelph.'
    ],
    image: '/images/ourprof/dr_lb.png'
  },
  {
    name: 'Dr. Laref Nora',
    title: 'M.B.Ch.B (University of Sulaimani/School of Medicine)',
    education: [
      'Ph.D in Microbiology and Immunology - Dalhousie University.',
      'BSc and MSc degrees in Microbiology - University of Guelph.'
    ],
    image: '/images/ourprof/dr_lb.png'
  },
  {
    name: 'Dr. Laref Nora',
    title: 'M.B.Ch.B (University of Sulaimani/School of Medicine)',
    education: [
      'Ph.D in Microbiology and Immunology - Dalhousie University.',
      'BSc and MSc degrees in Microbiology - University of Guelph.'
    ],
    image: '/images/ourprof/dr_lb.png'
  },
  {
    name: 'Dr. Laref Nora',
    title: 'M.B.Ch.B (University of Sulaimani/School of Medicine)',
    education: [
      'Ph.D in Microbiology and Immunology - Dalhousie University.',
      'BSc and MSc degrees in Microbiology - University of Guelph.'
    ],
    image: '/images/ourprof/dr_lb.png'
  },
  {
    name: 'Dr. Laref Nora',
    title: 'M.B.Ch.B (University of Sulaimani/School of Medicine)',
    education: [
      'Ph.D in Microbiology and Immunology - Dalhousie University.',
      'BSc and MSc degrees in Microbiology - University of Guelph.'
    ],
    image: '/images/ourprof/dr_lb.png'
  },
];

const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-center accordion__title my-4">Our Experts</h2>
      <div className="row">
        {experts.map((expert, index) => (
          <div className="col-lg-4 col-md-6 d-flex" key={index}>
            <ExpertCard
              name={expert.name}
              title={expert.title}
              education={expert.education}
              image={expert.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
