import Footer from "@/components/sections/footer/Footer";
import Banner from "@/components/sections/navbar/Banner";
import Navbar from "@/components/sections/navbar/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen border ">
      <Banner />
      <Navbar />
      <div className="h-screen w-full flex justify-center items-center border">
        <h1>This is the main page...</h1>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
