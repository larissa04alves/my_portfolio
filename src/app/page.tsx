import { MenubarDemo } from "@/components/header"
import LogoSite from "@/components/logo";


export default function Home() {
  return (
    <div className="flex w-full items-center justify-center border-0 rounded-full gap-10 py-6">
      <LogoSite />
      <MenubarDemo />

    </div>
  );
}
