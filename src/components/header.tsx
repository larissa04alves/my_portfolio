import Image from "next/image"
import logo from "@/assets/img/logo.svg"
import { Button } from "./ui/button"

export function Menubar() {
    return (
        <div className="flex w-full gap-2">
            <div className="flex flex-col items-center p-2 justify-center border-1 border-violet-500 rounded-full bg-secondary">
                <Image src={logo} alt="logo image" className="h-10 w-10" />
            </div>
            <div className="bg-secondary text-white w-full flex items-center justify-between border-0 px-14 rounded-3xl ">
                <Button variant="ghost" className="hover:bg-transparent hover:font-semibold hover:text-violet-500">SOBRE</Button>
                <Button variant="ghost" className="hover:bg-transparent hover:font-semibold hover:text-violet-500">PORTFÓLIO</Button>
                <Button variant="ghost" className="hover:bg-transparent hover:font-semibold hover:text-violet-500">CONTATO</Button>
            </div>
        </div>

    )
}
