"use client";

import { Menubar } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCheck, Copy, Dot, Github, Instagram, Linkedin, Plus } from "lucide-react";
import Image from "next/image";
import avatar from "@/assets/img/avatar.svg";
import Link from "next/link";
import { useState } from "react";
import { WorkList } from "@/components/works-list";
import { LanguagesList } from "@/components/languages-list";
import { FrameworksList } from "@/components/frameworks-list";
import { OthersList } from "@/components/other-list";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  function emailCopy() {
    navigator.clipboard.writeText("alves04.larissa@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-5">
      <Menubar />
      <div className="w-full py-10 bg-secondary text-white flex border-0 rounded-3xl flex-col justify-between px-10">
        <div className="flex pb-8 items-center justify-between text-[#C0C0C0]  ">
          <p>Desenvovedora FullStack</p>
          <div className="flex items-center border-0 rounded-4xl gap-2 bg-primary p-2">
            <div className="border-0 rounded-full w-3 h-3 bg-green-500"></div>
            <p className="text-[0.65rem]">Disponível para oportunidades</p>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-2xl">Larissa Alves</h1>
              <p className="text-sm text-[#C0C0C0] ">
                Crio soluções digitais com foco <br /> em performance e usabilidade.
              </p>
            </div>
            <div className="flex h-full gap-2">
              <Button
                asChild
                variant={"ghost"}
                className="bg-[#5233ff] border-[0.01rem] h-9 border-black hover:brightness-105 hover:shadow-[0_0_20px_#36278b] hover:bg-[#5233ff] hover:text-white transition duration-300 flex items-center gap-2 text-white font-medium rounded-md  px-4"
              >
                <Link
                  target="_blank"
                  href="https://wa.me/5555996913627?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site"
                  className="flex items-center gap-2"
                >
                  Contate-me
                  <Separator
                    orientation="vertical"
                    className="bg-black min-h-9 "
                  />
                  <Plus />
                </Link>
              </Button>

              <Button
                onClick={emailCopy}
                variant={"ghost"}
                className="border-[0.01rem] bg-background h-9 text-zinc-300 border-zinc-700 hover:bg-zinc-950 hover:text-zinc-300 flex items-center gap-2 p-4"
              >
                Copiar email
                <Separator
                  orientation="vertical"
                  className="bg-zinc-700 min-h-9 "
                />
                {isCopied ? <CheckCheck className="text-violet-500" /> : <Copy />}
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" className="[&_svg:not([class*='size-'])]:size-7 px-0 py-0 hover:bg-transparent ">
                <Link
                  target="_blank"
                  href="https://github.com/larissa04alves"
                >
                  <Github className="text-[#C0C0C0] " />
                </Link>
              </Button>
              <Button variant="ghost" className="[&_svg:not([class*='size-'])]:size-7 px-0 py-0 hover:bg-transparent ">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/larissa-alvess/"
                >
                  <Linkedin className="text-[#C0C0C0] " />
                </Link>
              </Button>
              <Button variant="ghost" className="[&_svg:not([class*='size-'])]:size-7 px-0 py-0 hover:bg-transparent ">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/_alvesslari/"
                >
                  <Instagram className="text-[#C0C0C0] " />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex w-32 h-32">
            <Image src={avatar} className="" alt="larissa avatar" />
          </div>
        </div>
      </div>

      <div className="w-full flex gap-5">
        <div className="w-1/2 gap-8 py-10 bg-secondary text-white flex border-0 rounded-3xl flex-col px-10 ">
          <h1 className="flex items-center text-lg font-bold"> <Dot size={25} /> Experiências</h1>
          <WorkList />
        </div>

        <div className="w-1/2 flex flex-col gap-5">
          <div className=" bg-secondary flex flex-col gap-2 py-5 text-white  border-0 px-5 rounded-3xl">
            <h1 className="font-semibold text-lg">Linguagens</h1>
            <LanguagesList />
          </div>
          <div className=" flex gap-5">
            <div className="w-1/2 bg-secondary flex flex-col gap-2 text-white  py-5 px-5 border-0 rounded-3xl">
              <h1 className="font-semibold text-lg">Frameworks</h1>
              <FrameworksList />
            </div>
            <div className="w-1/2 bg-secondary flex flex-col gap-2 py-5 text-white px-5 border-0 rounded-3xl">
              <h1 className="font-semibold text-lg">Outros conhecimentos</h1>
              <OthersList />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
