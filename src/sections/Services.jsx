import { ServiceCard } from "../components"
import { services } from "../constants"

const Services = () => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service)=>(
        <ServiceCard key={service.label} imgURL={service.imgURL} label={service.label} subtext={service.subtext}/>
      ))}
    </div>
  )
}

export default Services