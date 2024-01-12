import TrendingCard from "@/app/ui/components/TrendingCard";
import {getTrending} from "@/app/lib/db";

const Trending = async () => {
  const trendingData = await getTrending();
  if (!trendingData) return;

  return (
    <div className="ml-4 overflow-scroll text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:text-3xl md:mb-6">Trending</h1>
      <div
        className="flex mb-8 gap-4 flex-nowrap md:gap-10 w-max"
        id="carousel"
      >
        {trendingData.map((selection) => {
          return <TrendingCard selection={selection} key={selection.id} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
