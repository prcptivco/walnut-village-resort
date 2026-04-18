import tariffData from "../tarrif.json";

export default function sitemap() {
  const baseUrl = "https://www.walnutvillageresort.com";

  // Define core static routes
  const staticRoutes = ["", "/rooms", "/dining", "/contact", "/amenities", "/gallery", "/story"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Define dynamic room routes based on tarrif.json
  const roomRoutes = tariffData.rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...roomRoutes];
}
