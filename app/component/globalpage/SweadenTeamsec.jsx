"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Navigation2, Phone, Mail, MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SweadanTeam } from "../utilities/data/sweadanTeam";

export const SweadenTeamsec = () => {
  const [hovered, setHovered] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const router = useRouter();

  // Filter logic
  const filteredConsultants = SweadanTeam.filter((team) => {
    return (
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedService === "" || team.service === selectedService) &&
      (selectedRole === "" || team.role === selectedRole)
    );
  });

  return (
    <div className="p-6 md:max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-normal redhat">
          Meet The Sweden Team
        </h2>
        <div className="w-[200px] h-1 bg-green-700 md:ml-[8rem] mt-1"></div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-wrap justify-between items-center gap-5 p-3  mb-6">
        <div>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-green-700 rounded-full focus:outline-none w-full sm:w-[220px] text-gray-700"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <span className="text-gray-600 hidden md:inline-block">
            Filter by:
          </span>

          {/* Service Filter */}
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="px-4 py-2 border border-green-700 rounded-full focus:outline-none w-full sm:w-[200px] text-gray-700"
          >
            <option value="">All Services</option>
            <option value="Consulting">Consulting</option>
            <option value="Executive Search">Executive Search</option>
          </select>

          {/* Role Filter */}
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="px-4 py-2 border border-green-700 rounded-full focus:outline-none w-full sm:w-[200px] text-gray-700"
          >
            <option value="">All Roles</option>
            <option value="Senior Consultant">Senior Consultant</option>
            <option value="Managing Partner">Managing Partner</option>
          </select>

          <button className="bg-green-700 text-white p-3 rounded-full flex items-center justify-center w-12 h-12">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Consultant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredConsultants.length > 0 ? (
          filteredConsultants.map((team, index) => (
            <div
              key={index}
              className="relative p-2 text-center"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative p-4 text-left">
                <div className="relative">
                  <Image
                    src={team.image}
                    alt={team.name}
                    width={350}
                    height={350}
                    className="w-full h-[350px] md:h-72 object-cover rounded-lg shadow"
                  />

                  {hovered === index && (
                    <div className="absolute inset-0 bg-[#005581] text-white flex flex-col justify-center items-start p-4 rounded-lg transition-opacity duration-300 opacity-100">
                      <h3 className="font-bold text-lg mt-3 mb-4">
                        {team.name}
                      </h3>
                      <p className="text-sm text-white mb-3">{team.role}</p>

                      <div className="flex items-center text-white text-sm font-medium mb-3">
                        <Navigation2 className="text-white w-4 h-4 mr-2" />
                        <span>{team.location}</span>
                      </div>

                      <div className="flex items-center text-white text-sm font-medium mb-3">
                        <Phone className="text-white w-4 h-4 mr-2" />
                        <span>{team.phone}</span>
                      </div>

                      <div className="flex items-center text-white text-sm font-medium mb-3 w-full">
                        <Mail className="text-white w-4 h-4 mr-2 flex-shrink-0" />
                        <a href={`mailto:${team.email}`}>
                          <span className="break-all w-full">{team.email}</span>
                        </a>
                      </div>

                      <div
                        className="flex items-center justify-between w-full text-white text-sm font-medium mt-3 cursor-pointer"
                        onClick={() => router.push(`/teamdetail?id=${team.id}`)}
                      >
                        <span>See Full Bio</span>
                        <MoveRight className="text-white w-5 h-5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* team Details */}
                <h3
                  className="font-bold mt-3 text-lg cursor-pointer"
                  onClick={() => router.push(`/teamdetail?id=${team.id}`)}
                >
                  {team.name}
                </h3>
                <p
                  className="text-sm text-gray-600 cursor-pointer"
                  onClick={() => router.push(`/teamdetail?id=${team.id}`)}
                >
                  {team.role}
                </p>
                <div
                  className="flex items-center text-[#009688] text-sm font-medium mt-1 cursor-pointer"
                  onClick={() => router.push(`/teamdetail?id=${team.id}`)}
                >
                  <Navigation2 className="text-[#009688] w-4 h-4 mr-2" />
                  <span>{team.location}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No consultants found.</p>
        )}
      </div>
    </div>
  );
};
