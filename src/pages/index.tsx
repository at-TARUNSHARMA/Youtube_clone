import Image from 'next/image'
import { Inter } from 'next/font/google'
import { VideoCard } from '@/components/VideoCard'
import { VIDEOS } from '@/videos'
import { VideoGrid } from '@/components/VideoGrid'
import { AppBar } from '@/components/AppBar'
import { LeftBar } from '@/components/LeftBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <AppBar/>
      <div className="flex">
        <LeftBar />
        <VideoGrid />
      </div>
    </main>
  )
}