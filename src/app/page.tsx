import { Metadata } from "next";
import HomeMain from "@/pages/homes/home-1";

export const metadata: Metadata = {
  title: "Classic Painting Decorating - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeMain />
    </>
  );
}
