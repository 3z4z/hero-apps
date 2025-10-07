export default function SectionTitleComponent({ title, subtitle }) {
  return (
    <div className="text-center">
      <h3 className="font-bold md:text-5xl text-2xl text-gray-900">{title}</h3>
      <h4 className="md:text-xl text-gray-500 mb-10 mt-4">{subtitle}</h4>
    </div>
  );
}
