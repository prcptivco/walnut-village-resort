import DiningView from "../components/DiningView";
import { HOTEL_DATA } from "../data/hotel";

export const metadata = {
  title: "Dining",
  description: `Experience ${HOTEL_DATA.about.cafe.name}, our ${HOTEL_DATA.about.cafe.type.toLowerCase()}. ${HOTEL_DATA.about.cafe.tagline}`,
};

export default function DiningPage() {
  return <DiningView />;
}
