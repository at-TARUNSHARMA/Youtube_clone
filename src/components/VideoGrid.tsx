import { VIDEOS } from "@/videos"
import { VideoCard } from "./VideoCard"

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {VIDEOS.map(video => <div className="p-2"> <VideoCard video={video} /> </div>)}
    </div>
}
