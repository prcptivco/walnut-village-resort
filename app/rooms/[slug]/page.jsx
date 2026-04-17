import RoomDetailView from "../../components/RoomDetailView";
import tariffData from "../../../tarrif.json";
import { notFound } from "next/navigation";

// Generate clean SEO metadata dynamically based on the room data
export async function generateMetadata({ params }) {
  // Await params to ensure compatibility with Next 15+ async params tracking
  const resolvedParams = await params;
  const room = tariffData.rooms.find(r => r.slug === resolvedParams.slug);

  if (!room) return { title: "Room Not Found | Walnut Village Resort" };

  return {
    title: room.name,
    description: room.short_description,
    openGraph: {
      type: "website",
      title: `${room.name} | Walnut Village Resort`,
      description: room.short_description,
      url: `https://www.walnutvillageresort.com/rooms/${room.slug}`,
      siteName: "Walnut Village Resort",
      images: [
        {
          url: "https://www.walnutvillageresort.com" + room.images[0]?.src, // Fallback if image isn't absolute
          width: 1200,
          height: 800,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${room.name} | Walnut Village Resort`,
      description: room.short_description,
    },
  };
}

// Generate static routes at build time for speed
export function generateStaticParams() {
  return tariffData.rooms.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomPage({ params }) {
  const resolvedParams = await params;
  const room = tariffData.rooms.find((r) => r.slug === resolvedParams.slug);

  if (!room) {
    notFound();
  }

  return <RoomDetailView room={room} />;
}
