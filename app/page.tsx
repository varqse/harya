import Hero from "@/components/Hero";
import Timelineexp from "@/components/timelineExp";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-neutral-950">
        <div className="variable">
          <a
            className="navVariable"
          >
            Harya.id
          </a>
        </div>
        <div className="Nav">
          <Link href="/contact" className="navLink">
            Contacts
          </Link>
        </div>
      <div className="Herone">
        <Hero />
        {/* <Timelineexp /> */}
      </div>
      <div className="Timeline">
        <Timelineexp /> 
      </div>
    </main>
  );
}
