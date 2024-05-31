import { FlipWords } from "@/components/Opening";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="overflow-x-hidden overflow-y-hidden">
      <FlipWords
        className={`justify-center items-center w-[100vw] flex h-44 font-bold text-5xl ${playfair.className}`}
        words={["Nothing"]}
      />
    </main>
  );
}
