import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-4 hover:text-zinc-500">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-4 hover:text-zinc-500">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
          <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/tomcapa.jpg" width={104} height={104} alt=" capa da banda x" />
              <strong> As melhores de Tom Zé</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/pinkcapa.png" width={104} height={104} alt=" capa da banda x" />
              <strong> The Division</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/queencapa.jpg" width={104} height={104} alt=" capa da banda x" />
              <strong> Queen II</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/cashcapa.webp" width={104} height={104} alt=" capa da banda x" />
              <strong> Johnny Cash American IV: The Man Comes Around</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/teatrocapa.jpg" width={104} height={104} alt=" capa da banda x" />
              <strong> A Sociedade Do Espetáculo</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/vancapa.webp" width={104} height={104} alt=" capa da banda x" />
              <strong> 1984 - Van Halen</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Allan Diamante</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10 ">
              <Image src="/summer.jpg" className=" w-full" width={104} height={104} alt=" capa da banda x" />
              <strong>Summer Eletrohits 2020</strong>
              <span className="text-sm text-zinc-400">MOJJO, Bhaskar, Vitorio and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10 ">
              <Image src="/queencapa.jpg" className=" w-full" width={104} height={104} alt=" capa da banda x" />
              <strong>Nevermore</strong>
              <span className="text-sm text-zinc-400">Brian May, Freddie Mercury, John Deacon e Roger Taylor</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10 ">
              <Image src="/tomcapa.jpg" className=" w-full" width={104} height={104} alt=" capa da banda x" />
              <strong>Xique Xique</strong>
              <span className="text-sm text-zinc-400">Tom zé</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10 ">
              <Image src="/teatrocapa.jpg" className=" w-full" width={104} height={104} alt=" capa da banda x" />
              <strong>O Anjo Mais Velho</strong>
              <span className="text-sm text-zinc-400">	Rafael dos Santos, Maria Fernanda e Emerson Marciano</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10 ">
              <Image src="/pinkcapa.png" className=" w-full" width={104} height={104} alt=" capa da banda x" />
              <strong>Keep Talking</strong>
              <span className="text-sm text-zinc-400">Nick Mason, Roger Waters, Bob Klose, Richard Wright ...</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
