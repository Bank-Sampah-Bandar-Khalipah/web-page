import { FaCube } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";

const partner = [
    {
        id:1,
        name: "Cube",
        icon: <FaCube />,
    },
    {
        id:2,
        name: "Webflow",
        icon: <FaWebflow />,
    },
    {
        id:3,
        name: "Cube",
        icon: <FaCube />,
    },
    {
        id:4,
        name: "Webflow",
        icon: <FaWebflow />,
    },
    {
        id:5,
        name: "Relume",
        icon: <FaCube />,
    },
    {
        id:6,
        name: "Webflow",
        icon: <FaWebflow />,
    },
]

const PartnerHome = () => {
  return (
    <section className='container'>
        <div className='flex flex-col items-center justify-center gap-10 section-spacing'>
            <h1 className='text-base font-bold'>We've worked with great companies [social proof to build credibility]</h1>
            <div className='flex items-center gap-10'>
                {partner.map((item) => (
                    <div key={item.id} className='flex items-center gap-2 text-2xl'>
                        {item.icon}
                        <p className='font-semibold'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default PartnerHome