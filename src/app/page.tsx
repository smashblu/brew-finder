import '@/styles/page.css'
import { Header } from '@/ui/header.tsx'
import { Sidebar } from '@/ui/main.tsx'

export default function Page() {
  return (
    <div className="full-page">
      <Header />
      <Sidebar />
    </div>
  );
}
