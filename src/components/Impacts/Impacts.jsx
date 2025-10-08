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
      <p className="font-bold md:text-5xl text-4xl mb-12 px-3">
        Trusted by Millions,
        <span className="sm:ms-2 sm:inline-block block">Built for You</span>
      </p>
      <div className="grid md:grid-cols-3 md:gap-0 gap-10">
        {impacts.map((impact, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:gap-4 gap-1"
          >
            <p className="text-gray-300 mb-3 md:mb-0">{impact.title}</p>
            <p className="font-extrabold lg:text-6xl md:text-5xl text-3xl">
              {impact.count}
            </p>
            <p className="text-gray-300">{impact.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
