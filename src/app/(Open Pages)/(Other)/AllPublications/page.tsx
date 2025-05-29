import React from "react";
import "./Allpublications.css";

const publications = [
  {
    clientName: "ABRAR BA",
    serviceTaken: "SPSS Analysis + Writing + Publication Package",
    journal: "International Journal of Medical Imaging",
    publisher: "Science Publishing Group (SciencePG)",
    link: "https://www.sciencepublishinggroup.com/article/10.11648/j.ijmi.20241203.12"
  },
  
  {
    clientName: "Dr. Amro Hadidy",
    serviceTaken: "Case report Writing + Publication Package",
    journal: "The American Surgeon",
    publisher: "SAGE Publications",
    link: "https://journals.sagepub.com/doi/abs/10.1177/00031348231220588"
  },
  {
    clientName: "Dr. Abdullah Alghamdi",
    serviceTaken: "Writing + Publication Package",
    journal: "Cureus Journal of Medical Sciences",
    publisher: "Springer Nature",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10754713/"
  },
  {
    clientName: "MIGUEL A. QUIROZ-REYES",
    serviceTaken: "Systematic Review & Meta analysis + Writing + Premium Package",
    journal: "International Ophthalmology",
    publisher: "Springer Nature",
    link: "https://link.springer.com/article/10.1007/s10792-024-03321-4"
  },
  {
    clientName: "Ishfark Ahmed",
    serviceTaken: "Writing + Publication Package",
    journal: "Middle East Journal of Family Medicine - World Family Medicine",
    publisher: "Lesley Pocock\nmedi+WORLD International\nAUSTRALIA",
    link: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/http://www.mejfm.com/February%202024/SGLT2.pdf"
  },
  {
    clientName: "Ishfark Ahmed",
    serviceTaken: "Writing + Publication Package",
    journal: "Middle East Journal of Family Medicine - World Family Medicine",
    publisher: "Lesley Pocock\nmedi+WORLD International\nAUSTRALIA",
    link: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/http://www.mejfm.com/February%202024/GLP1.pdf"
  },
  {
    clientName: "Ishfark Ahmed",
    serviceTaken: "Writing + Publication Package",
    journal: "Middle East Journal of Family Medicine - World Family Medicine",
    publisher: "Lesley Pocock\nmedi+WORLD International\nAUSTRALIA",
    link: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/http://www.mejfm.com/February%202024/Metformin.pdf"
  },
  {
    clientName: "Ishfark Ahmed",
    serviceTaken: "Writing + Publication Package",
    journal: "Middle East Journal of Family Medicine - World Family Medicine",
    publisher: "Lesley Pocock\nmedi+WORLD International\nAUSTRALIA",
    link: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/http://www.mejfm.com/February%202024/Fasting%20diabetes.pdf"
  },
  
  {
    clientName: "Dr. Dinesh Deva",
    serviceTaken: "Writing + Publication Package",
    journal: "Ijraset Journal For Research in Applied Science and Engineering Technology",
    publisher: "IJRASET",
    link: "https://www.ijraset.com/research-paper/methodologies-used-for-knocking-detection-and-intensity-evaluation-in-internal-combustion-engines"
  },
  {
    clientName: "Dr. Dinesh Deva",
    serviceTaken: "Writing + Publication Package",
    journal: "Ijraset Journal For Research in Applied Science and Engineering Technology",
    publisher: "IJRASET",
    link: "https://www.ijraset.com/research-paper/study-of-ethanol-blended-fuels-in-ic-engines"
  },
  {
    clientName: "Dr. Salma AlDallal",
    serviceTaken: "Writing + Publication Package",
    journal: "Journal of Clinical Case Reports, Medical Images and Health Sciences",
    publisher: "JCRMHS",
    link: "https://jmedcasereportsimages.org/articles/JCRMHS-1014.pdf"
  },
  {
    clientName: "Dr. Azad Haleem",
    serviceTaken: "Writing + Publication Package",
    journal: "Cellular and Molecular Biology",
    publisher: "Taylor & Francis, American Society for Microbiology",
    link: "https://pubmed.ncbi.nlm.nih.gov/36495517/"
  },
  {
    clientName: "Anita Syla",
    serviceTaken: "Re-Writing + Publication Package",
    journal: "Expert Review of Ophthalmology",
    publisher: "Taylor & Francis",
    link: "https://www.tandfonline.com/doi/full/10.1080/17469899.2022.2138346"
  },
  {
    clientName: "Dr. Raghavendra Rao S",
    serviceTaken: "Writing + Publication Package",
    journal: "New Armenian Medical Journal",
    publisher: "YEREVAN STATE MEDICAL UNIVERSITY",
    link: "10.56936/18290825-2022.16.2-118"
  },
  {
    clientName: "Faleh Dhafer",
    serviceTaken: "SPSS Analysis + Writing + Publication Package",
    journal: "World Cancer Research Journal",
    publisher: "Verduci International",
    link: "https://www.wcrj.net/article/2451"
  },
  {
    clientName: "Dr. Raghavendra Rao S",
    serviceTaken: "Re-Writing + Publication Package",
    journal: "New Armenian Medical Journal",
    publisher: "YEREVAN STATE MEDICAL UNIVERSITY",
    link: "10.56936/18290825-2023.17.84-93"
  },
  {
    clientName: "Zuhal Hamd",
    serviceTaken: "Review paper Writing + Publication Package",
    journal: "International Journal of Biomedicine",
    publisher: "International Medical Research and Development Corporation (IMRDC)",
    link: "http://dx.doi.org/10.21103/Article13(1)_RA3"
  },
  {
    clientName: "Dr. Saeed Alyami",
    serviceTaken: "Systematic Review + Writing + Premium Package",
    journal: "Bulletin of Faculty of Physical Therapy",
    publisher: "SpringerOpen",
    link: "https://bfpt.springeropen.com/articles/10.1186/s43161-023-00135-w"
  },
  {
    clientName: "Dr. Gayathri Giri",
    serviceTaken: "Re-Writing + Publication Package",
    journal: "Applied Economics",
    publisher: "Taylor & Francis",
    link: "https://www.tandfonline.com/doi/full/10.1080/00036846.2023.2186360"
  },
  {
    clientName: "Sujay Sarkar",
    serviceTaken: "Writing + Publication Package",
    journal: "Environmental Progress & Sustainable Energy",
    publisher: "John Wiley and Sons Inc.",
    link: "https://aiche.onlinelibrary.wiley.com/doi/abs/10.1002/ep.14204"
  },
  {
    clientName: "Dr. Srivardhan Kumar",
    serviceTaken: "Re-Writing + Publication Package",
    journal: "Electrical Engineering",
    publisher: "the Institute of Electrical and Electronics Engineers (IEEE)",
    link: "https://link.springer.com/article/10.1007/s00202-023-01876-6"
  },
  {
    clientName: "Dr. Jamal Sayed",
    serviceTaken: "Re-Writing + Publication Package",
    journal: "Clinical Case Reports",
    publisher: "Wiley",
    link: "https://pubmed.ncbi.nlm.nih.gov/37323250/"
  },
  {
    clientName: "Dr. Amro Hadidy",
    serviceTaken: "SPSS Analysis + Writing + Publication Package",
    journal: "Surgical Laparoscopy Endoscopy & Percutaneous Techniques",
    publisher: "Wolters Kluwer",
    link: "https://journals.lww.com/surgical-laparoscopy/abstract/2023/10000/laparoscopic_abdominal_surgery_under_thoracic.19.aspx"
  },
  {
    clientName: "Abdullah Awadh",
    serviceTaken: "Writing + Publication Package",
    journal: "BioMed Research International",
    publisher: "Hindawi",
    link: "https://onlinelibrary.wiley.com/doi/10.1155/2023/5156601"
  },
  {
    clientName: "Dr. Meshael M. Alkusayer",
    serviceTaken: "Writing + Publication Package",
    journal: "Cureus",
    publisher: "Springer Nature",
    link: "https://pubmed.ncbi.nlm.nih.gov/37644943/"
  },
  {
    clientName: "Giggin T",
    serviceTaken: "Writing + Publication Package",
    journal: "Cureus Journal of Medical Science",
    publisher: "Springer Nature",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11346670/"
  },
  {
    clientName: "Dr. Agus Trihatmoko",
    serviceTaken: "Premium Publication Support Packages",
    journal: "Humanities and social sciences communications",
    publisher: "Nature Portfolio",
    link: "https://www.nature.com/articles/s41599-024-02772-5"
  },
  {
    clientName: "Dr. Bakheet Aldosari",
    serviceTaken: "Writing + Publication Package",
    journal: "Cureus Journal of Medical Science",
    publisher: "Springer Nature",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10921131/"
  },
  {
    clientName: "Dr. Amro Hadidy",
    serviceTaken: "SPSS Analysis + Writing + Publication Package",
    journal: "Medicine",
    publisher: "Lippincott",
    link: "https://journals.lww.com/md-journal/fulltext/2024/03010/complicated_anorectal_sepsis__validation_of.30.aspx"
  },
  {
    clientName: "Dr. Amro Hadidy",
    serviceTaken: "SPSS Analysis + Writing + Publication Package",
    journal: "Chirurgia journal",
    publisher: "Edizioni Minerva Medica S.p.A.",
    link: "https://www.minervamedica.it/en/journals/chirurgia/article.php?cod=R20Y2024N04A0262"
  },
  {
    clientName: "Dr. Amro Hadidy",
    serviceTaken: "Writing + Publication Package",
    journal: "Cureus Journal of Medical Science",
    publisher: "Springer Nature",
    link: "https://pubmed.ncbi.nlm.nih.gov/38293676/"
  },
  {
    clientName: "Dr. Amro Hadidy",
    serviceTaken: "SPSS Analysis + Writing + Publication Package",
    journal: "Updates in Surgery",
    publisher: "Springer Nature",
    link: "https://link.springer.com/article/10.1007/s13304-024-01754-1"
  },
  {
    clientName: "Dr. Fahad Samadi",
    serviceTaken: "Re-Writing + Publication Package",
    journal: "Iranian Journal of Pathology",
    publisher: "Farname Inc.",
    link: "https://pubmed.ncbi.nlm.nih.gov/39118803/#:~:text=Then%2C%20a%20TRAP%20assay%20was,%2B4.25)%20among%20precancerous%20patients."
  },
  {
    clientName: "Raghu Devanna",
    serviceTaken: "Systematic Review + Writing + Premium Package",
    journal: "The Saudi Dental Journal",
    publisher: "Springer Link",
    link: "https://doi.org/10.1016/j.sdentj.2023.11.013"
  },
  {
    clientName: "Vanrem Mawii",
    serviceTaken: "SPSS Analysis + Writing + Publication Package",
    journal: "Gynecology and Obstetrics Clinical Medicine",
    publisher: "BMJ Publishing Group",
    link: "https://www.sciencedirect.com/science/article/pii/S2667164623000404#:~:text=Placental%20chorioangiosis%20was%20detected%20in,14%20and%205%20cases%2C%20respectively."
  },
  {
    clientName: "Dr. Meshael M. Alkusayer",
    serviceTaken: "Systematic Review + Writing + Premium Package",
    journal: "International Journal of Pediatric Otorhinolaryngology",
    publisher: "Elsevier",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0165587623002872"
  },
  {
    clientName: "Dr. Mays Helmi",
    serviceTaken: "Writing + Publication Package",
    journal: "Precision Cancer Medicine",
    publisher: "AME Publishing Company",
    link: "https://pcm.amegroups.org/article/view/8210/html"
  },
  {
    clientName: "Dr. Jithendra Halambar",
    serviceTaken: "Writing + Publication Package",
    journal: "Journal of Clinical and Scientific Research",
    publisher: "Lippincott",
    link: "https://journals.lww.com/jcsr/fulltext/2023/12040/burden_of_non_alcoholic_fatty_liver_disease_in.7.aspx"
  },
  {
    clientName: "Dr. Moakumla Ao",
    serviceTaken: "Writing + Publication Package",
    journal: "Open Journal of Business and Management",
    publisher: "Scientific Research Publishing",
    link: "https://www.scirp.org/journal/paperinformation?paperid=141381"
  },
  {
    clientName: "selim demirci",
    serviceTaken: "Writing + Publication Package",
    journal: "Journal of Integrative and Complementary Medicine",
    publisher: "Mary Ann Liebert",
    link: "https://www.liebertpub.com/doi/10.1089/jicm.2023.0804?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub++0pubmed"
  },
  {
    clientName: "Ahmed ZahrAllayali",
    serviceTaken: "Re-Writing + Publication Package",
    journal: "Dermatology and Dermatitis",
    publisher: "Auctores",
    link: "https://auctoresonline.org/article/assessing-the-knowledge-attitude-practice-towards-the-sun-exposure-and-the-use-of-sunscreen-by-the-general-population-in-makkah-saudi-arabia"
  },
  {
    clientName: "Dr. Ahmad Alzahrani",
    serviceTaken: "Writing + Publication Package",
    journal: "Saudi Journal for Health Sciences",
    publisher: "Saudi Journal for Health Sciences",
    link: "https://journals.lww.com/sjhs/fulltext/2024/13010/allergic_reaction_following_reintroduction_of.13.aspx"
  },
  {
    clientName: "Tamsheel Fatima Roohi",
    serviceTaken: "Premium Publication Package",
    journal: "Diabetology International",
    publisher: "Springer Link",
    link: "https://link.springer.com/article/10.1007/s13340-023-00680-8"
  },
  {
    clientName: "Dr. Mithila Das Mazumder",
    serviceTaken: "Systematic Review & Meta analysis + Writing + Premium Package",
    journal: "Journal of Population Therapeutics and Clinical Pharmacology",
    publisher: "Dougmar Publishing Group Inc.",
    link: "https://jptcp.com/index.php/jptcp/article/view/3892"
  },
  {
    clientName: "Fisnik Brovina",
    serviceTaken: "Review paper writing+ Premium Package",
    journal: "Migration Letters",
    publisher: "Transnational Press London (United Kingdom)",
    link: "https://migrationletters.com/index.php/ml/article/view/6394"
  },
  {
    clientName: "Dr. Amro Hadidy",
    serviceTaken: "Statistical analysis + Literature search + Writing + Premium Package",
    journal: "Chirurgia",
    publisher: "Minerva Medica",
    link: "https://www.minervamedica.it/en/journals/chirurgia/article.php?cod=R20Y2024N05A0333"
  },
  {
    clientName: "Raghu Devanna",
    serviceTaken: "Re-Writing + Publication Package",
    journal: "Saudi Journal of Oral and Dental Research",
    publisher: "Scholars Middle East Publishers",
    link: "https://saudijournals.com/media/articles/SJODR_88_245-250_kG7vtcK.pdf"
  },
  {
    clientName: "Dr. Arnau Esteve-Josep",
    serviceTaken: "SPSS Analysis + Writing + Publication Package",
    journal: "3D Printing in Medicine",
    publisher: "Elsevier",
    link: "https://threedmedprint.biomedcentral.com/articles/10.1186/s41205-024-00244-9"
  },
  {
    clientName: "Raghu Devanna",
    serviceTaken: "Publication Support Packages",
    journal: "Journal of Oral Implantology",
    publisher: "Allen Press",
    link: "https://meridian.allenpress.com/joi/article-abstract/50/4/335/500424/Implant-Supported-Bar-Retained-Maxillary?redirectedFrom=fulltext"
  },
  {
    clientName: "Arnab Choudhury",
    serviceTaken: "Systematic Review & Meta analysis + Writing + Premium Package",
    journal: "Indian Journal of Critical Care Medicine",
    publisher: "Medknow Publications, Jaypee Brothers",
    link: "https://www.ijccm.org/abstractArticleContentBrowse/IJCCM/64/28/7/36295/abstractArticle/Article"
  },
  {
    clientName: "Dr. Amro Hadidy",
    serviceTaken: "Systematic Review & Meta analysis + Writing + Premium Package",
    journal: "Updates in Surgery",
    publisher: "Springer Nature",
    link: "https://link.springer.com/article/10.1007/s13304-024-02049-1"
  },
  {
    clientName: "Dr. Omar Ehab",
    serviceTaken: "Publication Support Packages",
    journal: "PSM Veterinary Research",
    publisher: "PSM Publishers",
    link: "https://psmjournals.org/index.php/vetres/article/view/622"
  },
  {
    clientName: "Dr. Adil Eissa",
    serviceTaken: "Writing + Publication Package",
    journal: "Diagnostics",
    publisher: "MDPI",
    link: "https://www.mdpi.com/2075-4418/12/5/1038"
  },
  {
    clientName: "Dr. Hariprasad Harrish",
    serviceTaken: "Writing + Publication Package",
    journal: "Journal of Pharmacy And Bioallied Sciences",
    publisher: "Medknow Publishers",
    link: "https://journals.lww.com/jpbs/fulltext/2024/16005/comparative_evaluation_of_the_impact_of_chloride.28.aspx"
  },
  {
    clientName: "Dr. Nighat Fatima",
    serviceTaken: "Writing + Publication Package",
    journal: "Italian Journal of Gynæcology & Obstetrics",
    publisher: "Edra SpA",
    link: "http://www.gynaecology-obstetrics-journal.com/favorable-outcome-in-a-primigravida-with-hydroxychloroquine-hcq-induced-most-likely-cardiomyopathy-a-case-report-and-literature-review/"
  },
  {
    clientName: "Dr. Ulku Demirci",
    serviceTaken: "Writing + Publication Package",
    journal: "Acta Scientific NUTRITIONAL HEALTH",
    publisher: "Acta Scientific",
    link: "https://actascientific.com/ASNH/pdf/ASNH-07-1247.pdf"
  },
  {
    clientName: "Dr. Kaushik Ghosh",
    serviceTaken: "Writing + Publication Package",
    journal: "Cureus Journal of Medical Science",
    publisher: "Springer Nature",
    link: "https://assets.cureus.com/uploads/original_article/pdf/309800/20250109-1099102-vnzdp7.pdf"
  },
  {
    clientName: "HARSAVARTHINI K R",
    serviceTaken: "Writing + Publication Package",
    journal: "International Journal of Medical Toxicology and Legal Medicine",
    publisher: "India Medico Legal Society",
    link: "https://www.ijmtlm.org/index.php/journal/article/view/167"
  },
  {
    clientName: "Ananya Rana",
    serviceTaken: "SPSS Analysis + Writing + Publication Package",
    journal: "Discover Food",
    publisher: "Springer Nature",
    link: "https://link.springer.com/article/10.1007/s44187-025-00269-x"
  },
  
  {
    clientName: "Dr. Sadia",
    serviceTaken: "Writing + Publication Package",
    journal: "Middle East Journal of Family Medicine",
    publisher: "Lesley Pocock\nmedi+WORLD International\nAUSTRALIA",
    link: "http://mejfm.com/Pericarditis.pdf"
  },
  {
    clientName: "Carlos Mas Bermejo",
    serviceTaken: "Systematic Review & Meta analysis + Writing + Premium Package",
    journal: "Atena Editora",
    publisher: "Atena Editora",
    link: "https://atenaeditora.com.br/catalogo/artigo-revista/the-impact-of-hypoxia-on-carcinogenesis-mechanisms-and-metabolic-alterations-in-cancer-microenvironment"
  }
];

const PublicationList = () => {
  const cleanLink = (url:any) => {
    if (!url) return "";
    // Remove chrome extension prefix
    return url.replace(
      "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/",
      ""
    );
  };

  return (
    <div className="publication-container" style={{marginBottom:"60px"}}>
      <h2 style={{marginBottom:'30px'}}>Publication Records</h2>
      <div className="table-responsive">
        <table className="publication-table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Service Taken</th>
              <th>Journal Name</th>
              <th>Publisher</th>
              <th>Published Paper</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((pub, index) => {
              const cleanedLink = cleanLink(pub.link);
              const isDOI = cleanedLink.startsWith("10.") && !cleanedLink.includes("://");
              
              return (
                <tr key={index}>
                  <td style={{textAlign:'start'}}>{pub.clientName}</td>
                  <td style={{textAlign:'start'}}>{pub.serviceTaken}</td>
                  <td style={{textAlign:'start'}}>{pub.journal}</td>
                  <td style={{ whiteSpace: "pre-line" , textAlign:"start" }}>{pub.publisher}</td>
                  <td>
                    {cleanedLink ? (
                      cleanedLink.toLowerCase() === "accepted" ? (
                        <span className="status-accepted">Accepted</span>
                      ) : isDOI ? (
                        <a
                          href={`https://doi.org/${cleanedLink}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="journal-link"
                        >
                          View DOI
                        </a>
                      ) : (
                        <a
                          href={cleanedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="journal-link"
                        >
                          View Paper
                        </a>
                      )
                    ) : (
                      <span className="status-pending">Link Pending</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublicationList;