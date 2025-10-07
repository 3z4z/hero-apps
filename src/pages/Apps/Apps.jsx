import AllAppsContainerComponent from "../../components/AllAppsContainer/AllAppsContainer";
import SectionTitleComponent from "../../components/SectionTitle/SectionTitle";

export default function AppsPage() {
  return (
    <div className="mt-10">
      <SectionTitleComponent
        title={"Our All Applications"}
        subtitle={
          "Explore All Apps on the Market developed by us. We code for Millions"
        }
      />
      <AllAppsContainerComponent />
    </div>
  );
}
