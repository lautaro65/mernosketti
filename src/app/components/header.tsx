"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Award, Menu, ShoppingBag, User, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "/store" },
    { name: "Clasificación", href: "/leaderboard" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className=" flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-500">Mernosketti</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-purple-500 ${
                pathname === item.href ? "text-purple-500" : "text-gray-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/leaderboard">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-500">
              <Award className="h-5 w-5" />
              <span className="sr-only">Clasificación</span>
            </Button>
          </Link>
          <Link href="/store">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-500">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Tienda</span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="outline" className="border-purple-500 text-purple-300 font-bold hover:bg-purple-950">
              <User className="mr-2 h-4 w-4" />
              Mi Cuenta
            </Button>
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden text-gray-400 " onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black md:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-purple-500">Mernosketti</span>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400" onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 px-4 py-6 text-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 font-medium ${
                  pathname === item.href ? "text-purple-500" : "text-gray-400"
                }`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/profile" className="flex items-center gap-2 font-medium text-gray-400 " onClick={toggleMenu}>
              <User className="h-5 w-5" />
              Mi Cuenta
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
