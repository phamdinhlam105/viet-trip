import { getAllHotel } from "@/components/api/hotel-api";
import { getAllPost } from "@/components/api/post-api";
import { getAllTour } from "@/components/api/tour-api";
import { Hotel, Post, Tour } from "@/components/models/app-models";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://viettriptourist.com";

  // Lấy dữ liệu động
  const tours = await getAllTour();
  const hotels = await getAllHotel();
  const posts = await getAllPost();

  // Trang tĩnh
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/hotel`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/tour`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/tin-tuc`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/com-bo`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/gioi-thieu`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/lien-he`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/policy`, changeFrequency: "yearly", priority: 0.4 },
  ];

  // Trang động
  const tourPages = tours.map((tour: Tour) => ({
    url: `${baseUrl}/tour/${tour.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const hotelPages = hotels.map((hotel:Hotel) => ({
    url: `${baseUrl}/hotel/${hotel.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const postPages = posts.map((post:Post) => ({
    url: `${baseUrl}/tin-tuc/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...tourPages, ...hotelPages, ...postPages];
}
