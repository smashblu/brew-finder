import '@/styles/page.css'
import { Header } from '@/ui/header.tsx'
import { Sidebar, Mapbox, CreateMap } from '@/ui/main.tsx'

export default function Page() {
  return (
    <div className="full-page">
      <Header />
      <div className="main">
        <Sidebar />
        <div id="map"><CreateMap /></div>
      </div>
    </div>
  );
}
