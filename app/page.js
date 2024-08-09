import AboutSection from "@/components/About";
import BannerSlider from "@/components/BannerSlider";
import BuildingSpecification from "@/components/BuildingSpecifikaction";
import FooterContact from "@/components/FooterContact";
import Navbar from "@/components/Navbar";
import PropertyList from "@/components/PropertyList";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <main>
        <AboutSection/>
        <PropertyList/>
        {/* <BuildingSpecification/> */}
      </main>
      <FooterContact />
    </div>
  );
}
