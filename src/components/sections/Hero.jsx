import React from "react";
import Image from "next/image";
import { Badge } from "@radix-ui/themes";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-y-auto">
      <Image
        src="/images/hero_cover_1.png"
        alt="hero background dark photo of"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Badge variant="secondary">Case Studies</Badge>
            <Badge variant="secondary">Oil & Gas</Badge>
          </div>

          <h1 className="font-title font-normal leading-[1.2] text-4xl md:text-6xl text-white max-w-3xl tracking-wide">
            Digitalizing Oil & Gas: SUPCON's Role in Operational Excellence
          </h1>
        </div>
      </div>
    </section>
  );
}
