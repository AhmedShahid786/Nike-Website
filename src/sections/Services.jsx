//? Local imports
import { ServiceCard } from "../components"
import { services } from "../constants"

const Services = () => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service,ind)=>(
        <ServiceCard key={service.label} index={ind} imgURL={service.imgURL} label={service.label} subtext={service.subtext}/>
      ))}
    </div>
  )
}

export default Services