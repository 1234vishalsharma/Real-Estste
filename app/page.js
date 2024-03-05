import Image from "next/image";
import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-600 justify-center items-center">
      <Header/>
      <Banner/>
      <Footer/>
    </div> 
  );
}
