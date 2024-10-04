import { Banner } from "./Components/Banner";
import Grid from "./Components/Grid";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main className="h-full w-full ">
      <Banner />
      <Navbar />
      <Grid />
    </main>
  );
}
