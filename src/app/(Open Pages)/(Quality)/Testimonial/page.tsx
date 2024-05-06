'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import { useState } from "react";

export default function Home() { 
  let list: any = [
    {
      msg: "Thanks a lot for the work. I appreciate the copy editing of the manuscript before the duedate.",
      name: "Dr Rajesh Joshi",
      add: "Nagpur, India",
    },
    {
      msg: "I've read the edited manuscript and I'm very grateful to you for the thorough analysis of manuscript.It was nice to work with you and thank you very much for your assistance with manuscript improving!",
      name: "Dr. Ekaterina Mironova",
      add: "Moscow, RU",
    },
    {
      msg: "I am so pleased with your corrections and modifications. I will recommend the Manuscriptedit Support Team to my friends and colleague to make use of your exceptional service.",
      name: "Dr. Fathia Khogali",
      add: "Moscow, RU, Saudi Arabia",
    },
    {
      msg: "Thank you for getting my manuscript edited so quickly. Your editors have done extensive work. I accept all of the changes as they are. I also accept your choice of journal. Thank you for the journal selection report. I was impressed with your choices.",
      name: "Jim McKivigan",
      add: "Las Vegas, Unlisted Country",
    },
    {
      msg: "I am sending this email to thank you (especially) and also your editor for your professionalism and consideration on my manuscript.I am in the process of writing a second manuscript so I hope we work together again in the near future.",
      name: "Dora Evangelides",
      add: "Rome, Italy",
    },
    {
      msg: "Thank you for the valuable work and professional response. I did review the edited paper, and I'm really satisfied with it. This manuscript is accepted in Malaysian Journal of Medical Science.",
      name: "Dalia F",
      add: "Abdulwahab , Malaysia",
    },
    {
      msg: "Thank you for your comments and corrections of my paper-it is done in much more professional way.",
      name: "Firas obeidat",
      add: "Jordan university hospital, Jordan",
    },
    {
      msg: "Thank you for the excellent work. We are very satisfied and will come back with new manuscript soon! ",
      name: "Lars-Ake",
      add: "Jordan university hospital, Jordan, Sweden",
    },
    {
      msg: "I received the manuscript ahead of time with several improvements and some clarification. There were a few questions where I had to consider the specific information and the interpretation of the text-suggestions. I was very pleased with your help and the paper is now submitted to the European Heart Journal and I keep my fingers crossed! I have informed my colleagues about the possibility to use your professional help, hopefully some will recognize the help that Manuscriptedit provides.",
      name: "H W,M.D.Ph.D. Dept of Cardiology",
      add: " HMC University Hospital Linkoping, Sweden",
    },
    {
      msg: "I am very happy with the final draft of the manuscript. I would like to heartily thank the editor for providing a good manuscript with meticulous work. I am highly satisfied with the way data are analysed and incorporated and the way discussion is drafted.",
      name: "Dr. Nimit Khara,M.D.Ph.D. Dept of Cardiology",
      add: " HMC University Hospital Linkoping, Sweden, India",
    },
    {
      msg: "I am very pleased to see your corrections in my document, which I actually wrote so carefully choosing every word and checked it for spelling and grammar. I could not believe there was something more to correct. After experiencing the free sample editing, I realised that it is definitely beneficial to submit a manuscript for professional English language editing at Manuscriptedit.com. Thank you very much for your thoughtful work.",
      name: "M C",
      add: "University of Split, Croatia",
    },
    {
      msg: "Thank you very much for your great editing job. Now my manuscript reads so professional. I can imagine that working on a text written by non-native speaker is not an easy job. Probably the most difficult thing is to guess what exactly an author means in every single sentence of his/her text. Manuscriptedit caught very well what I wanted to express in the text I submitted. This must have been difficult with my manuscript because not only I wrote it by myself (I am not fluent in english) but also the manuscript did not undergo preliminary proofread prior its submission to Manuscriptedit. I do appreciate your job. Also I notice with pleasure that you have completed editing before the deadline which was April 1st. Thank you for this.",
      name: "A M,Tarnow, Poland",
    },
    {
      msg: "I availed the Editing and Translation services of Manuscriptedit. I was very impressed with the quality of their services, both in terms of the standard of their work as well as efficient handling and timely delivery of the completed work. They took on tough work schedules others couldn�t take on, with efficient delivery under high quality demands, and not only between widely used languages but between minor languages as well. I look forward to working with them to serve my clients and strongly recommend Manuscriptedit to my friends and colleagues.",
      name: "M S,President",
      add: " La Cle Global Services, Japan",
    },
    {
      msg: "I am so thankful to you for such a great help. Please accept my very sincere gratitude. I am very happy to see my paper with such a beautiful English. I am completely satisfied and impressed by the professionalism and quality of your editing. The important thing here was that you have improved the language and presentation of my paper beyond my expectation, and at the same time, you have retained all important technical side and logical consequences unchanged. I will definitely refer your services to all my colleagues and friends. I believe many of them will need the assistance you are providing.",
      name: "S A B,Institute of General and Inorganic Chemistry",
      add: " Armenia",
    },
    {
      msg: "Thank you very much for helping me. The process is very easy to understand and you have delivered it on time. Excellent comments and suggestions on the reviewed paper.",
      name: "S",
      add: "International Islamic University Malaysia, Malaysia",
    },
    {
      msg: "Thank you so much for the editing done on my document. I can say that it is very good and more than what I have expected.",
      name: "M F",
      add: "Benha University, Egypt",
    },
    {
      msg: "Thank you very much for finishing the document - and even two days before the expected due date! I appreciate it! I will read it soon &amp; provide you with feedback. So far, just from doing a quick scan, it looks like a solid piece of work with lots of additional research (including the authority figures in the field!) on your side - I am very happy about that! Thank you for delivery it - I will be in touch soon! ",
      name: "Anonymous",
      add: "University of Sydney, Australia",
    },
    {
      msg: "Thank you so much for the free editing done on my document. I can say that it is very good and more than what I have expected. I look forward to using your services in future and recommending your business to my friends and associates.",
      name: "SNSA,Fakulti Bahasa Moden dan Komunikasi - Utama",
      add: " Malaysia",
    },
    {
      msg: "Please send my great appreciation to the editors, they have done a wonderful job. I am very confident now in submitting my work to the journal. I will certainly recommend your service to any researcher who needs such kind of service.",
      name: "Z G",
      add: "University of New South Wales, Australia",
    },
    {
      msg: "Many thanks for your excellent work and the comments. I like it very much, Appreciated.",
      name: "J Y",
      add: "Seoul National University, Republic of Korea",
    },
    {
      msg: "Thank you for your editing service and appreciate yr contribution very much. Your editing service had improve my manuscript. Thank you once again!",

      name: "T",
      add: "Seoul National University, Republic of Korea, Malaysia",
    },
    {
      msg: "I just had time to read through the document (sample) you have edited. It is absolutely excellent the way you edited it. You have done a superb job. I have sent the edited document to our supervisor and wait for his decision for editing. Thanks again.",
      name: "R L",
      add: "Northwest University , China",
    },
    {
      msg: "Thank you. You and your editorial/writing team have done an EXCELLENT job and i am grateful for your generosity.",
      name: "Anonymous",
      add: "Northwest University , China, Saudi Arabia",
    },
    {
      msg: "It was very heartening to receive the edited version of the abstract of the paper that I had submitted to you . I express my thankfulness to you and look forward to be in touch with your esteemed group in the near future and work with you.",
      name: "R S",
      add: "Northwest University , China, Saudi Arabia, India",
    },
    {
      msg: "Thank you and your team for writing my research proposal. I just had a look at the work and I am pleased with your excellent and up to date review.",
      name: "Anonymous",
      add: "Northwest University , China, Saudi Arabia, India, Saudi Arabia",
    },
    {
      msg: "Thanks for prompt response and good editing.",
      name: "P J",
      add: "Beijing, China",
    },
    {
      msg: "My research paper was handled very professionally by your manuscript editing service. Thank you for thorough English language editing and checking in minute details.",
      name: "J L",
      add: "Iztapalpa, Mexico",
    },
    {
      msg: "I had like to express my general appreciation for your manuscript editing service. It helps a lot. I appreciate it very much for you to check up my discussions against the data presented. I am on the whole satisfied with your editing service.",
      name: "H M",
      add: "Beijing, China",
    },
    {
      msg: "Your proofreading service was extremely helpful for me to publish my clinical research paper as it was edited very well for subject, English language and grammar by manuscriptedit.com. Thanks.",
      name: "A T",
      add: "Ankara University, Turkey",
    },
    {
      msg: "Thanks for your English manuscript proofreading service. I am very much satisfied with your timely delivery.",
      name: "H M",
      add: "Osaka University, Japan",
    },
    {
      msg: "My academic research paper was edited very thoroughly and carefully by manuscriptedit.com and it reads very well now. I am glad, I used your editing service. I will submit my paper for publication soon.",
      name: "L M S",
      add: "Universidade Potiguar, Brazil",
    },
    {
      msg: "Thank you very much for your prompt reply of sending my manuscript after sample editing. I appreciate your works.",
      name: "D W K",
      add: "Cheongju University, Republic of Korea",
    },
    {
      msg: "I am very happy with your English editing service and timely delivery.",
      name: "M G",
      add: "Cheongju University, Republic of Korea, Portugal",
    },
    {
      msg: "I want to thank your editing panel for the excellent service in my thesis editing.",
      name: "M R",
      add: "Universidad Argentina de la Empresa, Argentina",
    },
    {
      msg: "I appreciate your help in editing my research paper. I am happy with the high quality editing and reasonable price.",
      name: "M R",
      add: "Universidad Argentina de la Empresa, Argentina, Italy",
    },
    {
      msg: "Last week, I had qualify examination. The committees asked me a lot of questions about EPD. Because of your review paper, I could understand and explain the correct answers. Thus I passed in this part(qualify- presentation). Thank you so much for your research paper, I really appreciate it.",
      name: "L K",
      add: "Bangkok, Thailand",
    },
    {
      msg: "Thank you for a very professional thesis proofreading service. It is worth my money, my professor is satisfied.",
      name: "D D",
      add: "GeorgiaTech, United States",
    },
    {
      msg: "I am very happy to tell you that my research paper submitted to Journal of the American ceramic Society has been accepted by the Journal for publication. I am very grateful to you and want to express my acknowledgement because it was possible due to your kindly help in the English correction. Thank you very much.",
      name: "S Z",
      add: "Shenyang, China",
    },
    {
      msg: "Thank you for the wonderful research editing job for my journal research paper. I am happy and satisfied.",
      name: "N H",
      add: "Sendai, Japan",
    },
    {
      msg: "Thanks for your help in my thesis editing . My supervisor was satisfied.",
      name: "B T",
      add: "Sendai, Japan, Germany",
    },
    {
      msg: "My message is to acknowledge the help of Manuscriptedit for editing my document. Your editing is very high standard. The price also is OK. I use your service 2 time before and come back again in future for editing my next paper.",
      name: "S K",
      add: "Tokyo University, Japan",
    },
    {
      msg: "My paper is accepted to publish in Journal of American Chemical Society. Thank you for a professional proofreading and editing my research paper.",
      name: "Z L",
      add: "Hokkaido University, Japan",
    },
    {
      msg: "Thanks for your service for my thesis editing and proofreading. You did an excellent job.",
      name: "Y L",
      add: "Harbin Univ, China",
    },
  ];
  const [testimonials,setTestimonials] = useState(list);
  return (
    <>
      {breadcrum("Quality ", "Testimonials")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pt-5">Testimonials Overview</h3>
              <p className="pt-3">
                ASetting the stage for the importance of editing in the realm of
                written communication. Introduction to the multifaceted nature
                of editing and its impact on clarity and effectiveness.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/innerimg/re-1.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="team"
        className="team section-bg"
        style={{ marginBottom: 20 }}
      >
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div
            className="section-title text-center"
            style={{ marginBottom: 20 }}
          >
            <h2>Our Testimonials</h2>
          </div>

          <div className="row">
            {testimonials.map((_item: any, index: any) => {
             return (<div
                className="col-lg-6 aos-init aos-animate mt-3"
                data-aos="fade-up"
                data-aos-delay="100"
                key={index}
              >
                <div className="member d-flex align-items-start">

                  <div className="member-info">
                    <h4>{_item.name}</h4>
                    <span>{_item.add}</span>
                    <p>{_item.msg}</p>
                  </div>
                </div>
              </div>)
            })}
          </div>
        </div>
      </section>
    </>
  );
}
