"use client";
import Image from "next/image";
import logo from "../../assets/homePage/logo.png";
import Facebookicon from "../../assets/icons/facebook.png";
import Twittericon from "../../assets/icons/twitter.png";
import LinkedInicon from "../../assets/icons/linkdine.png";
import YoutubeIcon from "../../assets/icons/youtube.svg";
import WebIcon from "../../assets/icons/globe.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto px-2 md:max-w-7xl">
      {/* Top Section */}
      <div className="py-8 mb-4 flex flex-col md:flex-row justify-between items-start">
        {/* Logo & Social Links */}
        <div className="mb-6 md:mb-2">
          <Image src={logo} alt="The Taplow Group" className="h-14 mb-[2rem]" />

          <p className="mt-5 text-[14px] redhat">
            <span className="whitespace-nowrap">
              © 2025 THE TAPLOW GROUP S.A. ™
            </span>{" "}
            <br />
            Registration number: B10567
            <br />
            VAT number: LU20365422
          </p>
        </div>

        {/* Footer Links */}
        <div className="pl-2 md:pl-[6rem] grid grid-cols-2 md:grid-cols-4 gap-12 text-left">
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-2 text-black">Company</h4>
            <ul className="space-y-2  text-[14px] text-black">
              <li>
                <Link href="/" className="no-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/taplow" className="no-underline">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/insights" className="no-underline">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/countries" className="no-underline">
                  Global Locations
                </Link>
              </li>
              <li>
                <Link href="/consultant-directory" className="no-underline">
                  Consultant Directory
                </Link>
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
                <Link
                  href="/services/executive-search"
                  className="no-underline"
                >
                  Executive Search
                </Link>
              </li>
              <li>
                <Link
                  href="/services/executive-interim"
                  className="no-underline"
                >
                  Executive Interim Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/leadership-advisory-and-performance"
                  className="no-underline"
                >
                  Leadership Advisory and Performance
                </Link>
              </li>
              <li>
                <Link href="/services/board-services" className="no-underline">
                  Board Advisory Services
                </Link>
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
                <Link
                  href="/sectors/consumer-products"
                  className="no-underline"
                >
                  Consumer Products
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise/financial-services"
                  className="no-underline"
                >
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/sectors/ict" className="no-underline">
                  Digital and ICT
                </Link>
              </li>
              <li>
                <Link href="/sectors/industrial" className="no-underline">
                  Industrial
                </Link>
              </li>
              <li>
                <Link href="/sectors/life-sciences" className="no-underline">
                  Life Sciences and Pharma
                </Link>
              </li>
              <li>
                <Link href="/sectors/not-for-profit" className="no-underline">
                  Not for Profit
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/professional-services"
                  className="no-underline"
                >
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="/sectors/real-estate" className="no-underline">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>
          {/* contactUs */}
          <div>
            <h4 className="font-semibold mb-2 text-black">
              <Link href="/contact" className="no-underline">
                Contact Us
              </Link>
            </h4>
            <div className="flex flex-wrap gap-3 md:gap-2 mb-[2rem]">
              <a
                href="https://www.linkedin.com/company/taplow-group-s-a1/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={LinkedInicon}
                  alt="LinkedIn"
                  className="h-5 md:h-6 cursor-pointer"
                />
              </a>

              <a
                href="https://www.facebook.com/TheTaplowGroup/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Facebookicon}
                  alt="Facebook"
                  className="h-5 md:h-6 cursor-pointer"
                />
              </a>

              <a
                href="https://x.com/TaplowGroup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Twittericon}
                  alt="Twitter"
                  className="h-5 md:h-6 cursor-pointer"
                />
              </a>

              <a
                href="https://www.youtube.com/channel/UC6l4j3YS0bIbYiCY9dsD06w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={YoutubeIcon}
                  alt="YouTube"
                  className="h-5 md:h-6 cursor-pointer"
                />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src={WebIcon}
                  alt="Website"
                  className="w-6 h-5 md:h-6 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#96A94A] text-white px-3 py-4 text-xs rounded-t-[2rem]">
        <p className="text-redhat text-md text-center pb-3">
          <Link href="/disclaimer">Disclaimer</Link> |
          <Link href="/privacy">Privacy & GDPR Statement</Link>|{" "}
          <a
            href="https://huntscanlon.com/global-40/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white decoration-none"
          >
            Ranked by Hunt Scanlon, as a Global Top 40 Search Provider 2015 -
            2025
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
