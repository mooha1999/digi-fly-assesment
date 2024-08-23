import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import Part1 from "@/components/custom/Part1/Part1";
import Part2 from "@/components/custom/Part2/Part2";
import Part3 from "@/components/custom/Part3/Part3";

export default function Page() {
  return (
    <>
      <Navbar />
      <Part1 />
      <Part2 />
      <Part3 />
      <Footer />
    </>
  );
}
