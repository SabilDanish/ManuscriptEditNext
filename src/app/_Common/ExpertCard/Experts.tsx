import React from 'react';
import ExpertCard from './ExpertCard';

const experts = [
  {
    name: 'Dr. O W',
    title: 'M.D. (University of Texas Southwestern Medical Center, Dallas)',
    education: [
      'Ph.D in Oncology - University of Pennsylvania.',
      'BSc and MSc degrees in Biomedical Engineering - University of Michigan.'
    ],
    image: '/images/ourprof/aa1.jpg'
  },
  {
    name: 'Dr. D W',
    title: 'M.B.B.S (King’s College London/School of Medicine)',
    education: [
      'Ph.D in Pathology - University of Edinburgh.',
      'BSc and MSc degrees in Clinical Medicine - University of Manchester.'
    ],
    image: '/images/ourprof/aa2.jpg'
  },
  {
    name: 'Dr. S M',
    title: 'M.D. (Columbia University Vagelos College of Physicians and Surgeons)',
    education: [
      'Ph.D in Neurobiology - Duke University.',
      'BSc and MSc degrees in Cognitive Science - University of Southern California.'
    ],
    image: '/images/ourprof/aa3.jpg'
  },
  {
    name: 'Dr. E J',
    title: 'M.B.Ch.B (University of Cape Town/School of Medicine)',
    education: [
      'Ph.D in Human Genetics - University of Pretoria.',
      'BSc and MSc degrees in Zoology - University of Cape Town.'
    ],
    image: '/images/ourprof/aa4.jpg'
  },
  {
    name: 'Dr. M A',
    title: 'M.D. (New York University Grossman School of Medicine)',
    education: [
      'Ph.D in Public Health - Johns Hopkins University.',
      'BSc and MSc degrees in Environmental Science - Cornell University.'
    ],
    image: '/images/ourprof/aa6.jpg'
  },
  {
    name: 'Dr. L T',
    title: 'M.B.Ch.B (University of Auckland/School of Medicine)',
    education: [
      'Ph.D in Epidemiology - University of Otago.',
      'BSc and MSc degrees in Health Sciences - University of Auckland.'
    ],
    image: '/images/ourprof/aa34.jpg'
  }
];


const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-center Gappy GappyTop">Our Experts</h2>
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
