import RegularCard from "@/app/ui/components/RegularCard";
import { RegularData } from "@/app/lib/definitions";
import { FC } from "react";

interface SectionComponentProps {
    data: RegularData[]
    sectionTitle: string
}

const SectionComponent: FC<SectionComponentProps> = ({sectionTitle, data}) => {
  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:text-3xl md:mb-6 lg:mb-8">
        {sectionTitle}
      </h1>
      {/* <div className="mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit md:gap-x-10 md:gap-y-8"> */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 mb-8">
        {data.map((selection) => {
          return <RegularCard selection={selection} key={selection.id} />;
        })}
      </div>
    </div>
  );
}

export default SectionComponent