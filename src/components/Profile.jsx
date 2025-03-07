import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "Senior Makeup Artist",
    experience: "10+ years",
   image: "https://picsum.photos/200?random=1",
    email: "johndoe@example.com",
    phone: "+91 8741931407",
  },
  {
    name: "Emily Smith",
    role: "Mehendi Specialist",
    experience: "8+ years",
    image: "https://picsum.photos/200?random=2",
    email: "emilysmith@example.com",
    phone: "+91 9856231478",
  },
  {
    name: "Sophia Lee",
    role: "Nail Artist",
    experience: "6+ years",
    image: "https://picsum.photos/200?random=3",
    email: "sophialee@example.com",
    phone: "+91 7458963210",
  },
  {
    name: "Rajesh Kumar",
    role: "Bridal Stylist",
    experience: "12+ years",
    image: "https://picsum.photos/200?random=4",
    email: "rajeshkumar@example.com",
    phone: "+91 9876543210",
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-6">
      <h2 className="text-3xl font-bold text-red-500 text-center mb-10">Our Experts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full border-4 border-red-500" />
            </div>
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-red-400 font-medium">{member.role}</p>
            <p className="text-gray-300 mt-2">Experience: {member.experience}</p>
            <p className="text-gray-400 mt-2"><strong>Email:</strong> {member.email}</p>
            <p className="text-gray-400"><strong>Phone:</strong> {member.phone}</p>
            
            <div className="flex space-x-4 mt-4 justify-center">
              <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-red-500 transition">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-red-500 transition">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-red-500 transition">
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
