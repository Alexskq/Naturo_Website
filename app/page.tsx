import { Banner } from "./Components/Banner";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="h-full w-full relative">
      <Banner />
      <div className="fixed bottom-0 w-full opacity-90">
        <Navbar />
      </div>
    </div>
  );
}
