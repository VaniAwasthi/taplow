"use client";
import Image from "next/image";
import { Phone, Mail, Navigation2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const ProfileDetailLayout = ({ consultant }) => {
  if (!consultant) {
    return <p className="text-center mt-10">Consultant not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Profile Image & Contact Info */}
      <div className="py-2">
        <Image
          src={consultant.image}
          alt={consultant.name}
          width={400}
          height={200}
          className="h-[25rem] md:h-[21rem]"
        />
        <h2 className="text-2xl font-bold text-left mt-4 mb-2">
          {consultant.name}
        </h2>
        <p className="text-left text-gray-500">{consultant.role}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-left space-x-2">
            <Phone className="text-[#00B2A9] w-5 h-5 mr-2" />
            <a href={`tel:${consultant.phone}`} className="text-[#00B2A9]">
              {consultant.phone}
            </a>
          </div>
          {/* <div className="flex items-left space-x-2">
            <Mail className="text-[#00B2A9] w-5 h-5 mr-2" />
            <a href={`mailto:${consultant.email}`} className="text-[#00B2A9]">
              {consultant.email}
            </a>
          </div> */}
          <div className="flex items-center space-x-2">
            <Navigation2 className="text-[#00B2A9] w-16 h-16 mr-2" />
            <span
              className="text-[#00B2A9]"
              dangerouslySetInnerHTML={{ __html: consultant.address }}
            ></span>
          </div>
        </div>
        <Link
          href={consultant.linkdine}
          target="_blank"
          className="mt-4 flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg"
        >
          <FaLinkedin className="text-white w-5 h-5 mr-2" />
          <span className="ml-2">Connect on LinkedIn</span>
        </Link>
      </div>

      {/* Bio Section */}
      <div className="md:col-span-2 p-2">
        <p
          className="text-[#666666] mt-4 text-sm"
          dangerouslySetInnerHTML={{ __html: consultant.bio }}
        ></p>

        {/* Focus Section */}
        <div className="max-w-7xl mx-auto mt-6">
          <div className="flex items-center w-full my-4">
            <Link
              href="#"
              className="bg-[#96A94A] text-white font-bold py-2 px-4 rounded w-36"
            >
              Focus
            </Link>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div>
              <h4 className="font-bold text-[#96A94A] text-lg">Services</h4>
              <ul className="text-[#666666] text-sm py-2">
                {consultant.services.map((service, index) => (
                  <li className="py-1" key={index}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#96A94A] text-lg">
                Practise Areas
              </h4>
              <ul className="text-[#666666] text-sm py-2">
                {consultant.industrySectors.map((area, index) => (
                  <li className="py-1" key={index}>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailLayout;
