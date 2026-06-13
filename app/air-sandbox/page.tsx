import { AirNav, CrisisBar, AirFooter } from "@/app/air-sandbox/components/AirChrome";
import {
  AirHero,
  Stats,
  Mission,
  Programs,
  Story,
  GetInvolved,
} from "@/app/air-sandbox/components/AirSections";

export default function AirSandboxPage() {
  return (
    <>
      <CrisisBar />
      <AirNav />
      <main>
        <AirHero />
        <Stats />
        <Mission />
        <Programs />
        <Story />
        <GetInvolved />
      </main>
      <AirFooter />
    </>
  );
}
