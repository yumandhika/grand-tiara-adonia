import BannerSlider from "@/components/BannerSlider";
import BuildingSpecification from "@/components/BuildingSpecifikaction";
import FooterContact from "@/components/FooterContact";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <main>
        <BuildingSpecification/>
      </main>
      <FooterContact />
    </div>
  );
}
