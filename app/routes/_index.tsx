import type { MetaFunction } from "@remix-run/node";
import LandingPage from "~/components/landing/landing";

export const meta: MetaFunction = () => {
  return [
    { title: "Rahim's Seafood" },
    {
      name: "Rahim's Seafood & Variety Store",
      content: "Welcome to Rahim's Seafood & Variety Store!",
    },
  ];
};

export default function Index() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
