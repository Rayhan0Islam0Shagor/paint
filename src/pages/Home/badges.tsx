import { CircleCheck } from 'lucide-react';

const Badges = ({ badges }: { badges?: string[] }) => {
  return (
    <div className="flex items-center gap-3 flex-wrap max-w-[655px]">
      {badges?.map((item, index) => (
        <Badge name={item} key={index} />
      ))}
    </div>
  );
};

const Badge = ({ name }: { name: string }) => {
  return (
    <div className="bg-[#FFFFFF] text-foreground font-semibold py-3 px-3.5 flex items-center gap-2 rounded-full">
      <CircleCheck className="text-website-yellow" />
      {name}
    </div>
  );
};

export default Badges;
