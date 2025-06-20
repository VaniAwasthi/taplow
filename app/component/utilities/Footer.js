"use client";
import Image from "next/image";
import logo from "../../assets/homePage/logo.png";
import Facebookicon from "../../assets/icons/facebook.png";
import Twittericon from "../../assets/icons/twitter.png";
import LinkedInicon from "../../assets/icons/linkdine.png";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 md:max-w-6xl">
      {/* Top Section */}
      <div className="py-8 mb-4 flex flex-col md:flex-row justify-between items-start">
        {/* Logo & Social Links */}
        <div className="mb-6 md:mb-2">
          <Image src={logo} alt="The Taplow Group" className="h-14 mb-[2rem]" />
          <div className="flex  space-x-8 mb-[2rem]">
            <Image
              src={LinkedInicon}
              alt="LinkedIn"
              className="h-6 cursor-pointer"
            />
            <Image
              src={Facebookicon}
              alt="Facebook"
              className="h-6 cursor-pointer"
            />
            <Image
              src={Twittericon}
              alt="Twitter"
              className="h-6 cursor-pointer"
            />
          </div>
          <p className="mt-5 text-[12px] redhat">
            © 2025 THE TAPLOW GROUP S.A.
            <br />
            Registration number: B10567
            <br />
            VAT number: LU20365422
          </p>
        </div>

        {/* Footer Links */}
        <div className="pl-2 md:pl-[8rem] grid grid-cols-2 md:grid-cols-4 gap-12 text-left">
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-2 text-black">Company</h4>
            <ul className="space-y-2  text-[14px] text-black">
              <li>
                <a href="/" className="no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="no-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="no-underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/sectors/conusmer-sector" className="no-underline">
                  Sectors
                </a>
              </li>
              <li>
                <a href="/insights" className="no-underline">
                  Insights
                </a>
              </li>
              <li>
                <a href="/globals" className="no-underline">
                  Global Location
                </a>
              </li>
              <li>
                <a href="/consultant-directory" className="no-underline">
                  Consultant Directory
                </a>
              </li>
              {/* <li>
                <a href="/contact" className="no-underline">
                  Contact Us
                </a>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-2 text-black">Services</h4>
            <ul className="space-y-2 text-[14px] text-black">
              <li>
                <a href="/services/executive-search" className="no-underline">
                  Executive Search
                </a>
              </li>
              <li>
                <a
                  href="/services/executive-interim-management"
                  className="no-underline"
                >
                  Executive Interim Management
                </a>
              </li>
              <li>
                <a
                  href="/services/leadership-boardadvisory-and-performance"
                  className="no-underline"
                >
                  Leadership Advisory and Performance
                </a>
              </li>
              <li>
                <a
                  href="/services/board-advisory-services"
                  className="no-underline"
                >
                  Board Advisory Services
                </a>
              </li>
              {/* <li>
                <a href="/services" className="no-underline">
                  Virtual Leadership Training
                </a>
              </li> */}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-semibold mb-2 text-black">Sectors</h4>
            <ul className="space-y-2  text-[14px]">
              <li>
                <a href="/sectors/conusmer-sector" className="no-underline">
                  Consumer Products
                </a>
              </li>
              <li>
                <a href="/sectors/financial-service" className="no-underline">
                  Financial Services
                </a>
              </li>
              <li>
                <a href="/sectors/digital-ict" className="no-underline">
                  Digital and ICT
                </a>
              </li>
              <li>
                <a href="/sectors/industry" className="no-underline">
                  Industrial
                </a>
              </li>
              <li>
                <a href="/sectors/life-science" className="no-underline">
                  Life Sciences
                </a>
              </li>
              <li>
                <a href="/sectors/non-profit" className="no-underline">
                  Non Profit
                </a>
              </li>
              <li>
                <a
                  href="/sectors/professional-service"
                  className="no-underline"
                >
                  Professional Services
                </a>
              </li>
              <li>
                <a href="/sectors/realstate-sector" className="no-underline">
                  Real Estate
                </a>
              </li>
            </ul>
          </div>
          {/* contactUs */}
          <div>
            <h4 className="font-semibold mb-2 text-black">
              <a href="/contact" className="no-underline">
                Contact Us
              </a>
            </h4>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#96A94A] text-white px-3 py-4 text-xs rounded-t-[2rem]">
        <p className="text-redhat text-md text-center pb-3">
          Disclaimer | Privacy & GDPR Statement | Ranked by Hunt Scanlon, as a
          Global Top 40 Search PROVIDER 2015 - 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
