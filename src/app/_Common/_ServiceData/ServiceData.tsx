import { Service } from "@/app/utils/interfaces";
import { servicesData } from "@/app/utils/serviceData";
import './ServiceData.css'

const ServiceList: React.FC = () => {
    return (
      <div className="services-container">
        <h2 className="text-center">Our Services</h2>
        {servicesData.map((service: Service, index: number) => (
          <div key={index} className="service-category">
            <div className="category-title">
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