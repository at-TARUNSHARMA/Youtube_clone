import { useRouter } from "next/router"
import type { Video } from "../videos"
import { Line } from "./Line"

export const VideoCard = ({video}: {video: Video}) => {
    const router = useRouter();
    return <div className="cursor-pointer" onClick={() => {
        router.push("/video/1");
    }}>
        <div className="rounded-xl overflow-hidden">
            <div>
                <img src={video.thumb} />
                <Line progress={10} />
            </div>
        </div>

          <div className="grid grid-cols-12 pt-2">
          <div className="col-span-2">
            <img
              className="rounded-full w-16 h-16 mt-3"
              src={video.thumb}
              alt="Thumbnail"
            />
          </div>
          <div className="col-span-10 pl-2">
            <div className={"text-white-800 text-xl font-medium"}>
              {video.title}
          </div>
          <div className={"text-gray-400 text-md font-normal		"}>
              {video.description}
          </div>
          <div className="flex">
              <div className={"text-gray-400 text-md font-normal	pr-2	"}>
                  {video.viewCount} 
              </div>
              <div className={"text-gray-400 text-md font-normal		"}>
              • {video.timestamp}
              </div>
          </div>
        </div>
      </div>
    </div>
}

