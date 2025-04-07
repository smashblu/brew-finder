'use client';

import '@/styles/styles.css';
import { Header } from '@/ui/header'
import { Main } from '@/ui/main'

export default function Page() {
  return (
    <div className="full=page">
      <Header />
      <div className="main">
        <Main />
      </div>
    </div>
  )
}
