import { useState } from "react"
import CategoryPills from "./components/CategoryPills"
import { categories, videos } from "./data/home"
import PageHeader from "./layout/PageHeader"
import VideoGridItem from "./components/VideoGridItem"


function App() {

  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className="flex flex-col max-h-screen">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr]  overflow-auto">
        <div>Sidebar</div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 pb-4 bg-white z-10 ">
          <CategoryPills categories={categories} onSelect = {setSelectedCategory} selectedCategory={selectedCategory}  />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 ">
          {videos.map(video=> (
            <VideoGridItem key={video.id} {...video} />
          ))}
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
