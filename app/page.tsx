import { FlipWords } from "@/components/Opening";
import { Playfair_Display } from "next/font/google";
import Search from "@/components/Search";
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function FlipWordsDemo() {
  const words = ["#UnFiltered", "#UnCensored", "#Beautiful", "#Modern"];

  return (
    <div className="h-[35rem] flex flex-col justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 ">
        <div className="m-2 ">
          <div className="text-[#dadada] relative inline">Let </div>your words
          danlge. Let the world
          <p className="text-[#dadada] relative inline m-2">listen</p>
        </div>
        <FlipWords
          className={`items-center text-align-center justify-center ml-72 font-medium ${playfair.className}`}
          words={words}
        />
        <br />
        <div className="text-[#dadada] relative inline m-2">Thoughts</div>
        and Tales. Journey Through
        <p className="text-[#dadada] relative inline m-2">Words</p>
      </div>
      <div className="mt-20 w-full">
        <Search />
      </div>

      <div className="w-36 h-36 bg-white rounded-full blur-[175px] absolute left-0"></div>
      <div className="w-36 h-36 bg-white rounded-full blur-[175px] absolute right-0"></div>
    </div>
  );
}
