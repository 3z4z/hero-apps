import { gradientPrimaryBg } from "../../utils/classNames";

export default function ImpactsComponent() {
  const impacts = [
    {
      title: "Total Downloads",
      count: "29.6M",
      comment: "21% more than last month",
    },
    {
      title: "Total Reviews",
      count: "906K",
      comment: "46% more than last month",
    },
    { title: "Active Apps", count: "132+", comment: "31 more will Launch" },
  ];
  return (
    <div className={`py-20 ${gradientPrimaryBg} rounded-md text-center mb-20`}>
      <p className="font-bold text-5xl mb-12">
        Trusted by Millions, Built for You
      </p>
      <div className="grid grid-cols-3">
        {impacts.map((impact, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <p className="text-gray-300">{impact.title}</p>
            <p className="font-extrabold text-6xl">{impact.count}</p>
            <p className="text-gray-300">{impact.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
