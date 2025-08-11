import SearchBody from "./search-body";
import { Metadata } from "next";

interface PageProps {
  searchParams: Promise<{ search?: string }>;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams; 
  const searchTerm = params.search || "";
  const displayQuery = searchTerm.replace(/-/g, " ");
  return {
    title: `Kết quả tìm kiếm cho "${displayQuery}" | Viettrip Tourist`,
    description: `Xem các bài viết liên quan đến ${displayQuery} tại Viettrip Tourist`,
  };
}

export default async function SearchPage({ searchParams }: PageProps) {
  const params = await searchParams; 
  const searchTerm = params.search || "";
  const displayQuery = searchTerm.replace(/-/g, " ");

  return <SearchBody searchString={displayQuery} />;
}
