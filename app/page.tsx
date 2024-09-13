import MainContent from "@/components/MainContent";
import Servers from "@/components/Sidebar/Servers";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-none">
        <Servers />
      </div>
      <div className="flex-auto">
        <MainContent />
      </div>
    </div>
  );
}
