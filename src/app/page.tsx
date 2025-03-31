'use client';

import '@/styles/styles.css';
import { Header } from '@/ui/header'
import { Sidebar, DrawMap, TestScope } from '@/ui/main'

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
