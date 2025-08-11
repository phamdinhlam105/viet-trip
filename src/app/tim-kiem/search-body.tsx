
import TopBanner from "@/components/side-page/top-banner";
import SearchResult from "./search-result";

export default function SearchBody({ searchString }: { searchString: string }) {
  return (
    <div className="md:pt-28 pt-20">
      <TopBanner breadcrumbs={[{ title: "Tìm kiếm", slug: "/tim-kiem" }]} />
        <SearchResult searchString={searchString} />
    </div>
  );
}
