import MainContent from "@/components/MainContent";

export default async function Home() {
  const res = await fetch(`${process.env.DATA_URL}?t=${Date.now()}` || "");
  const channels = await res.json();
  return <MainContent channels={channels || []} />;
}
