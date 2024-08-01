import BannerSlider from "@/components/BannerSlider";
import BuildingSpecification from "@/components/BuildingSpecifikaction";
import FooterContact from "@/components/FooterContact";
import Navbar from "@/components/Navbar";
import PropertyList from "@/components/PropertyList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <main>
        <PropertyList />
        <BuildingSpecification/>
        {/* Konten utama website Anda */}
      </main>
      <FooterContact />
    </div>
  );
}
