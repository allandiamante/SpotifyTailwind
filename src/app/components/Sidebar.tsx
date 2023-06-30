import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar(){
    return(
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2 ">
            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400"/>
            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400"/>
            
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibolt text-zinc-200 hover:text-zinc-400">
              Home
              <HomeIcon/>
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibolt text-zinc-200 hover:text-zinc-400">
              Search
              <Search/>
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibolt text-zinc-200 hover:text-zinc-400">
              Your Library
              <Library/>
            </a>
          </nav>
          <nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Poison Heart</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Another Brick In The Wall</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Hurt</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Fear Of The Dark</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Somebody To Love</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Folson Prison Blues</a>
          </nav>



        </aside>
    )
}