import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar(){
    return(
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full "/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full "/>
            <div className="w-3 h-3 bg-green-500 rounded-full "/>
            
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibolt text-zinc-200">
              Home
              <HomeIcon/>
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibolt text-zinc-200">
              Search
              <Search/>
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibolt text-zinc-200">
              Your Library
              <Library/>
            </a>
          </nav>
          <nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1 </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 2</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 3</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 4</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 5</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
          </nav>



        </aside>
    )
}