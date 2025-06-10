"use client"

import Link from "next/link"
import { Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-white rounded-lg p-2">
              <Car className="h-6 w-6 text-orange-500" />
            </div>
            <span className="text-xl font-bold">Ada-EV</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-orange-200 transition-colors">
              Beranda
            </Link>
            <Link href="/cars" className="hover:text-orange-200 transition-colors">
              Daftar Mobil
            </Link>
            <Link href="/recommendation" className="hover:text-orange-200 transition-colors">
              Rekomendasi
            </Link>
            <Link href="/admin/login">
              <Button variant="outline" size="sm" className="text-orange-500 border-white hover:bg-white">
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
