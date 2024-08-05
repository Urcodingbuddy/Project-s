import {VideoCard} from "../components/VideoCard";
const Videos = [
    {
        thumbImage: "https://i.postimg.cc/MphsXFG1/image.png",
        pfpImage: "https://i.postimg.cc/pr7Y9mBq/image.jpg",
        title: "Natrure: Dolby Vision(4k) | The Most Beautiful Earth 4K HDR 60 FPS",
        chName: "8K VISON",
        views: "500K views",
        uDate: "1 month ago"
    },
    {
        thumbImage: "https://i.postimg.cc/MphsXFG1/image.png",
        pfpImage: "https://i.postimg.cc/pr7Y9mBq/image.jpg",
        title: "Natrure: Dolby Vision(4k) | The Most Beautiful Earth 4K HDR 60 FPS",
        chName: "8K VISON",
        views: "500K views",
        uDate: "1 month ago"
    },
    {
        thumbImage: "https://i.postimg.cc/MphsXFG1/image.png",
        pfpImage: "https://i.postimg.cc/pr7Y9mBq/image.jpg",
        title: "Natrure: Dolby Vision(4k) | The Most Beautiful Earth 4K HDR 60 FPS",
        chName: "8K VISON",
        views: "500K views",
        uDate: "1 month ago"
    },
    {
        thumbImage: "https://i.postimg.cc/MphsXFG1/image.png",
        pfpImage: "https://i.postimg.cc/pr7Y9mBq/image.jpg",
        title: "Natrure: Dolby Vision(4k) | The Most Beautiful Earth 4K HDR 60 FPS",
        chName: "8K VISON",
        views: "500K views",
        uDate: "1 month ago"
    }
]


export const VideoGrid = () =>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5" >
        {Videos.map(Video => <div>
            <VideoCard
        thumbImage={Video.thumbImage}
        pfpImage={Video.pfpImage}
        title={Video.title}
        chName={Video.chName}
        views={Video.views}
        uDate={Video.uDate}
        >  
        </VideoCard>
        </div>)}
    </div>
}