import Link from "next/link";
import Contact from "./components/Contact"
import HeroPage from "./components/HeroSection"
import Nav from "./components/Nav"
import { TournamentSection } from "./components/TournamentSection"

export default async function Home() {
    

  return (
    <div className="w-full   caret-transparent flex flex-col justify-center items-center  bg-neutral-900  ">
      <Nav/>
      <HeroPage/>
      <TournamentSection/>
      <Contact/>
      <h1 className=" w-full  text-center after:content-['↗'] capitalize after:p-[2px] text-slate-400 border-t-[1px]  after:text-blue-300"> this is a gaming tournament website Developed by <Link href={'https://niteshdev.vercel.app' } > Nitesh Saini</Link></h1>
    </div>
  );
}
