'use client';

import '@/styles/styles.css';
import { Header } from '@/ui/header'
import { DrawMap } from '@/ui/map'
import { Sidebar } from '@/ui/sidebar'

export default function Page() {
  return (
    <div className="full=page">
      <Header />
      <div className="main">
        <Sidebar />
        <DrawMap />
      </div>
    </div>
  )
}
