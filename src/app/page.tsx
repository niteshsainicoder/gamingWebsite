import HeroPage from "./components/HeroPage"
import Nav from "./components/Nav"

export default function Home() {
  return (
    <div className="w-full  caret-transparent flex flex-col justify-center items-center   ">
      <Nav/>
      <HeroPage/>
      <h1> this is a gaming tournament website</h1>
    </div>
  );
}
