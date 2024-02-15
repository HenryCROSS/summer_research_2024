import { ReactNode } from "react";
import "../globals.css";
import Image from "next/image";

export function HeroIMG(children) {
  return (
    <div
      className=""
      style={{ position: "relative", width: "100%", height: "505px" }}
    >
      <div style={{ zIndex: -1 }}>
        <Image
          priority
          src={"/images/bigstock-147279827.webp"}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
