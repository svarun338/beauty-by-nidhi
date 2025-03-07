import { motion } from "framer-motion";
import { FaStar, FaCut, FaBrush, FaHandPaper, FaSpa, FaPaintBrush } from "react-icons/fa";

const servicesData = [
  {
    category: "Makeup Services",
    icon: <FaBrush className="text-red-500 text-4xl" />,
    items: [
      { type: "Bridal Makeup", price: "$150", discount: "10% Off" },
      { type: "Party Makeup", price: "$100", discount: "5% Off" },
      { type: "Photoshoot Makeup", price: "$120", discount: "15% Off" },
      { type: "School/College Makeup", price: "$80", discount: "5% Off" },
    ],
  },
  {
    category: "Mehendi Art",
    icon: <FaHandPaper className="text-red-500 text-4xl" />,
    items: [
      { type: "Bridal Mehendi", price: "$200", discount: "20% Off" },
      { type: "Traditional Mehendi", price: "$150", discount: "10% Off" },
      { type: "Arabic Mehendi", price: "$120", discount: "5% Off" },
      { type: "Festival Mehendi", price: "$90", discount: "10% Off" },
    ],
  },
  {
    category: "Nail Extensions",
    icon: <FaCut className="text-red-500 text-4xl" />,
    items: [
      { type: "Gel Nail Extensions", price: "$50", discount: "10% Off" },
      { type: "Acrylic Nail Extensions", price: "$60", discount: "15% Off" },
      { type: "French Tip Nails", price: "$70", discount: "5% Off" },
      { type: "Custom Nail Art", price: "$80", discount: "20% Off" },
    ],
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-gray-900 rounded-lg shadow-lg border border-red-500"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold mt-4 text-red-500">{service.category}</h3>
              <ul className="mt-4">
                {service.items.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-4 mt-2 rounded-lg flex justify-between items-center"
                  >
                    <span>{item.type}</span>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-white">{item.price}</p>
                      <p className="text-sm text-red-500">{item.discount}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
