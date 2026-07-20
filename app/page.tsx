import ProfileCard from "@/components/ProfileCard";
import EmptySearch from "@/components/EmptySearch";
import PromotionRail from "@/components/PromotionRail";

export default function Home() {
  return (
    <main className="feed-page">
      <div className="feed-layout">
        <ProfileCard />
        <EmptySearch />
        <PromotionRail />
      </div>
    </main>
  );
}
