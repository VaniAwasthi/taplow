import { AboutBanner, ItAllStarted } from "../component/aboutUs/AboutBanner";
import {
  OurFoundingPartner,
  VissionSec,
} from "../component/aboutUs/OurFoundingPartner";
import ValuesSection from "../component/aboutUs/ValueSec";
import {
  Ethical,
  Approach,
  Partners,
} from "../component/aboutUs/EthicalApproachPartners";

export default function About() {
  return (
    <>
      <AboutBanner />
      <ItAllStarted />
      <OurFoundingPartner />
      <VissionSec />
      <ValuesSection />
      <Ethical />
      <Approach />
      <Partners />
    </>
  );
}
