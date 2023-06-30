import Link from "next/link";
import {ChevronLeft, ChevronRight, Home as HomeIcon, Laptop2, LayoutList, Library, Maximize2, Mic2, Play, Repeat, Search, Shuffle, SkipBack, SkipForward, Volume } from 'lucide-react'
import Image from "next/image";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
      <Sidebar/>        
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-4">
              <ChevronLeft/>
            </button>
            <button  className="rounded-full bg-black/40 p-4">
              <ChevronRight/>
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/10  group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/tomcapa.jpg" width={104} height={104} alt=" capa da banda x"/>
              <strong> As melhores de Tom Zé</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/pinkcapa.png" width={104} height={104} alt=" capa da banda x"/>
              <strong> As melhores de PinkFloyd</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>              
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/tomcapa.jpg" width={104} height={104} alt=" capa da banda x"/>
              <strong> As melhores de Tom Zé</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/pinkcapa.png" width={104} height={104} alt=" capa da banda x"/>
              <strong> As melhores de PinkFloyd</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>  
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/tomcapa.jpg" width={104} height={104} alt=" capa da banda x"/>
              <strong> As melhores de Tom Zé</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/pinkcapa.png" width={104} height={104} alt=" capa da banda x"/>
              <strong> As melhores de PinkFloyd</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Allan Diamante</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10 ">
              <Image src="/pinkcapa.png" className=" w-full" width={104} height={104} alt=" capa da banda x"/>
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10 ">
              <Image src="/pinkcapa.png" className=" w-full" width={104} height={104} alt=" capa da banda x"/>
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10 ">
              <Image src="/pinkcapa.png" className=" w-full" width={104} height={104} alt=" capa da banda x"/>
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10 ">
              <Image src="/pinkcapa.png" className=" w-full" width={104} height={104} alt=" capa da banda x"/>
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10 ">
              <Image src="/pinkcapa.png" className=" w-full" width={104} height={104} alt=" capa da banda x"/>
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
          </div>         
        </main>
      </div>
      <Footer/>
    </div>
  )
}
