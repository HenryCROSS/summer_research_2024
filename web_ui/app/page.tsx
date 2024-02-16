import { Button } from "./ui/button";
import { HeroIMG } from "./ui/hero_image";

export default function Home() {
  return (
    <main>
      <HeroIMG src="/images/bigstock-147279827.webp" alt="HeroIMG">
        {/* <h1 className="text-4xl font-bold">Welcome to My Website</h1> */}
        {/* <p className="text-lg">Discover amazing things here!</p> */}
        {/* gggggg */}
        <div className="grid grid-flow-col auto-cols-max">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <div>015</div>
          <div>025</div>
          <div>035</div>
        </div>
      </HeroIMG>
      dasdadsadsds
    </main>
  );
}
