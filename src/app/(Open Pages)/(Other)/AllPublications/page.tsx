import React from "react";
import "./Allpublications.css"

const publications = [
  { journal: "BioMed Research International", publisher: "Wiley", link: "https://onlinelibrary.wiley.com/doi/10.1155/2023/5156601" },
  { journal: "Diagnostics", publisher: "MDPI", link: "https://www.mdpi.com/2075-4418/12/5/1038" },
  { journal: "Ijraset Journal For Research in Applied Science and Engineering Technology", publisher: "IJRASET Publication", link: "https://www.ijraset.com/research-paper/study-of-ethanol-blended-fuels-in-ic-engines" },
  { journal: "Saudi Journal of Oral and Dental Research", publisher: "Elsevier", link: "https://saudijournals.com/media/articles/SJODR_88_245-250_kG7vtcK.pdf" },
  { journal: "Cureus Journal of Medical Science", publisher: "", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11346670/" },
  {  journal: "3D Printing in Medicine", publisher: "BMC",  link: "https://threedmedprint.biomedcentral.com/articles/10.1186/s41205-024-00244-9" },
  {  journal: "The American Surgeon", publisher: "Sage", link: "https://journals.sagepub.com/doi/abs/10.1177/00031348231220588" },
  {  journal: "Humanities and Social Sciences Communications", publisher: "Nature", link: "https://www.nature.com/articles/s41599-024-02772-5" },
  {  journal: "Applied Economics", publisher: "Taylor & Francis", link: "https://www.tandfonline.com/doi/full/10.1080/00036846.2023.2186360" },
  { journal: "Colloids and Surfaces A: Physicochemical and Engineering Aspects", publisher: "Elsevier",  link: "https://www.sciencedirect.com/science/article/abs/pii/S0927775724012470" },
  {  journal: "Advances in Materials and Processing Technologies", publisher: "Taylor & Francis",  link: "https://www.tandfonline.com/doi/full/10.1080/2374068X.2023.2204026" },
  {journal: "Journal of Disability Research", publisher: "King Salman Centre for Disability Research (KSCDR)", link: "https://www.scienceopen.com/hosted-document?doi=10.57197/JDR-2024-0096" },
  {  journal: "New Zealand Journal of Crop and Horticultural Science", publisher: "Taylor & Francis",  link: "https://www.tandfonline.com/doi/full/10.1080/01140671.2024.2432624" },
  { journal: "Journal of Parasitic Diseases", publisher: "Springer", link: "https://link.springer.com/article/10.1007/s12639-024-01709-8" },
  { journal: "Annals of Saudi Medicine", publisher: "King Faisal Specialist Hospital & Research Centre",  link: "https://www.annsaudimed.net/doi/10.5144/0256-4947.2023.283" }
];

const PublicationList = () => {
  return (
    <div className="publication-container" style={{marginBottom:'60px'}}>
      <h2>Publication Records</h2>
      <table className="publication-table">
        <thead>
          <tr>
            <th>Journal Name</th>
            <th>Publisher</th>
            <th>Journal Link</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((pub, index) => (
            <tr key={index}>
              <td>{pub.journal}</td>
              <td>{pub.publisher}</td>
              <td><a href={pub.link} target="_blank" rel="noopener noreferrer">View Journal</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicationList;
