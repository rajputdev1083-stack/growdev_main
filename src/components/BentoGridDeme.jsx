 "use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <div className="w-full min-h-screen bg-black py-20 px-6">
      
      {/* Optional Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Our Services
        </h2>
        <p className="text-neutral-400 mt-3">
          Powerful software and digital solutions for your business
        </p>
      </div>

      {/* Grid */}
      <BentoGrid className="max-w-5xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

/* Skeleton (card top area) */
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-800"></div>
);

/* Items */
const items = [
  {
    title: "Software Development",
    description: "We build scalable web and mobile applications.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Digital Marketing",
    description: "Grow your business with data-driven marketing strategies.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "UI/UX Design",
    description: "Modern, clean, and conversion-focused design systems.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Brand Strategy",
    description: "Build a powerful brand identity and online presence.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "SEO Optimization",
    description: "Rank higher and drive organic traffic to your website.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Web Performance",
    description: "Optimize speed and performance for better user experience.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Growth Solutions",
    description: "End-to-end solutions to scale your business fast.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-400" />,
  },
];