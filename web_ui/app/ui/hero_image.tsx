import { ReactNode } from "react";
import Image from "next/image";

interface HeroIMGProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  src: string;
  alt: string;
}

export function HeroIMG({
  children,
  className,
  src,
  alt,
  ...rest
}: HeroIMGProps) {
  console.log(src);

  return (
    <div className="relative w-full h-[505px]">
      <div className="absolute inset-0 z-[-1]">
        <Image className="object-cover" src={src} alt={alt} fill priority />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
}
