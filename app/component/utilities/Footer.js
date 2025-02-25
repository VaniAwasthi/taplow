"use-client";
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
          <div className="flex space-x-6 mb-[2rem]">
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
        <div className="grid grid-cols-3 gap-12 text-left">
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
                <a href="/sectors" className="no-underline">
                  Sectors Insights
                </a>
              </li>
              <li>
                <a href="/globals" className="no-underline">
                  Global Consultant
                </a>
              </li>
              <li>
                <a href="/consultant-directory" className="no-underline">
                  Directory
                </a>
              </li>
              <li>
                <a href="/contact" className="no-underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-2 text-black">Services</h4>
            <ul className="space-y-2 text-[14px] text-black">
              <li>
                <a href="/services" className="no-underline">
                  Executive Search
                </a>
              </li>
              <li>
                <a href="/services" className="no-underline">
                  Executive Interim Management
                </a>
              </li>
              <li>
                <a href="/services" className="no-underline">
                  Leadership Advisory and Performance
                </a>
              </li>
              <li>
                <a href="/services" className="no-underline">
                  Board Advisory Services
                </a>
              </li>
              <li>
                <a href="/services" className="no-underline">
                  Virtual Leadership Training
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-semibold mb-2 text-black">Sectors</h4>
            <ul className="space-y-2  text-[14px]">
              <li>Consumer Products</li>
              <li>Financial Services</li>
              <li>Digital and ICT</li>
              <li>Industrial</li>
              <li>Life Sciences</li>
              <li>Not For Profit Professional Services</li>
              <li>Real Estate</li>
            </ul>
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
