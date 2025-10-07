import AllAppsContainerComponent from "../AllAppsContainer/AllAppsContainer";
import SectionTitleComponent from "../SectionTitle/SectionTitle";

export default function AppsComponent() {
  return (
    <>
      <SectionTitleComponent
        title={"Trending Apps"}
        subtitle={"Explore All Trending Apps on the Market developed by us"}
      />
      <AllAppsContainerComponent />
    </>
  );
}
