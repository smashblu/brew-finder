import '@/styles/page.css'
import { Header } from '@/ui/header.tsx'
import { Sidebar, Mapbox } from '@/ui/main.tsx'

export default function Page() {
  return (
    <div className="full-page">
      <Header />
      <div className='main'>
        <Sidebar />
        <Mapbox />
      </div>
    </div>
  );
}
