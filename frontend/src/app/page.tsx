import Image from "next/image";
import Slider from "@/components/Slider";
import Offer from "@/components/Offer";
import Featured from "@/components/Featured";


export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <Slider/>
      <Offer/>
    </main>
  );
}
