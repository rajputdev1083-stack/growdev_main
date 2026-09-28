"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
// `;
const words = `We work remotely in the digital era, delivering software and accounting services with speed and accuracy. Helping businesses grow smarter with modern digital solutions.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
