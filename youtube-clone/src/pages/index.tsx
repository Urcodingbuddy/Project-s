import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div>
        <VideoCard
        thumbImage={"https://i.postimg.cc/MphsXFG1/image.png"}
        pfpImage={"https://i.postimg.cc/pr7Y9mBq/image.jpg"}
        title={"Natrure: Dolby Vision(4k) | The Most Beautiful Earth 4K HDR 60 FPS"}
        chName={"8K VISON"}
        views={"500K views"}
        uDate={"1 month ago"}
        >  
        </VideoCard>
      </div>
  )
}
