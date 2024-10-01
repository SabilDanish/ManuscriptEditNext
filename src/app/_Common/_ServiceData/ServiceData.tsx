import { Service } from "@/app/utils/interfaces";
import { servicesData } from "@/app/utils/serviceData";
import './ServiceData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faFileAlt, faCog,faPenNib, faMicroscope } from '@fortawesome/free-solid-svg-icons';

const getIconForCategory = (category: string) => {
  switch (category) {
    case 'English Editing':
      return <FontAwesomeIcon icon={faPen} />; // Pencil icon for editing
    case 'Publication Support':
      return <FontAwesomeIcon icon={faFileAlt} />; // File icon for publication support
    case 'Scientific Academic Writing':
      return <FontAwesomeIcon icon={faPenNib} />; // Pen nib icon for academic writing
    case 'Research Support':
      return <FontAwesomeIcon icon={faMicroscope} />; // Microscope icon for research
    default:
      return <FontAwesomeIcon icon={faCog} />; // Default icon
  }
};

const ServiceList: React.FC = () => {
  return (
    <div className="services-container">
      <h2 className="text-center" style={{ marginBottom: "3rem !important", marginTop: '1rem !important' }}>
        Our Services
      </h2>
      {servicesData.map((service: Service, index: number) => (
        <div key={index} className="service-category">
          <div className="category-title">
            <div className="icon">
              {getIconForCategory(service.category)}
            </div>
            <h3>{service.category}</h3>
          </div>
          <div className="sub-services">
            {service.subServices.map((subService: string, idx: number) => (
              <div key={idx} className="sub-service-item">
                {subService}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
