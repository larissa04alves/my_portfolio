import { Menubar } from "@/components/header"
import { Circle } from "lucide-react"


export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-10">
      <Menubar />
      <div className="w-full bg-secondary text-white flex border-0 rounded-3xl flex-col justify-between px-10">
        <div className="flex justify-between  ">
          <p>Desenvovedora FullStack</p>
          <div className="flex items-center border-0 rounded-4xl gap-2 bg-primary p-2">
            <Circle />
            <p className="text-xs">Disponível para oportunidades</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
