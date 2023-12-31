import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
import './globals.css'

export const metadata: Metadata = {
  title: "Arnab's blog",
  description: 'Created by Arnab Kundu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
