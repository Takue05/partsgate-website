import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'
import Footer from './Footer'
import TopBar from './TopBar'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}