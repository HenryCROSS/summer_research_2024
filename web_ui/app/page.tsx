import Link from "next/link";
import { Button } from "./ui/button";
import { HeroIMG } from "./ui/hero_image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <main className="w-full h-full">
      <HeroIMG src="/images/bigstock-147279827.webp" alt="HeroIMG">
        <div className="grid grid-flow-rows auto-rows-fr">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          <Link
            href={"/login"}
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </HeroIMG>
      dasdadsadsds
    </main>
  );
}
