import Image from "next/image";
import { Inter } from "next/font/google";
import { SideBar } from "@/components/Sidebar";
import { Main } from "@/components/Main";
import { AppBar } from "@/components/Appbar";
import { VideoGrid } from "@/components/VideoGrid";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>
    <AppBar />
    <Main />
  </div>
}
