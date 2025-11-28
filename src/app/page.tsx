import Footer from "@/components/sections/footer/Footer";
import Banner from "@/components/sections/navbar/Banner";
import Navbar from "@/components/sections/navbar/Navbar";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen border ">
      <Banner />
      <Navbar />
      <div className="h-screen w-full flex flex-col justify-center items-center border">
        <h1>This is the main page...</h1>
        <section>
          <Link href="https://www.amd.com/en/products/processors/workstations/ryzen-threadripper.html">
            This is the design of the main page...
          </Link>
        </section>
        <Link href="/items">Items</Link>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
