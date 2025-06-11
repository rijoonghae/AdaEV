"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Plus, Edit, Trash2, Users, Database } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockCars = [
  {
    id: "1",
    merek: "Tesla",
    model: "Model 3",
    harga: 800,
    baterai: 75,
    tenaga: 283,
    jarak: 448,
    kecepatan_maks: 225,
  },
  {
    id: "2",
    merek: "Hyundai",
    model: "IONIQ 5",
    harga: 750,
    baterai: 72.6,
    tenaga: 225,
    jarak: 384,
    kecepatan_maks: 185,
  },
  {
    id: "3",
    merek: "BMW",
    model: "iX3",
    harga: 950,
    baterai: 74,
    tenaga: 286,
    jarak: 460,
    kecepatan_maks: 180,
  },
]

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/admin/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }


  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-xl font-bold">Dashboard Admin</h1>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Car Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Daftar Mobil Listrik</CardTitle>
              <Link href="/admin/cars/add">
                <Button className="bg-[#F27E68]">
                  Tambah Mobil
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Merek</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Harga (Juta)</TableHead>
                  <TableHead>Baterai (kWh)</TableHead>
                  <TableHead>Tenaga (HP)</TableHead>
                  <TableHead>Jarak (km)</TableHead>
                  <TableHead>Kecepatan Maks (km/h)</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCars.map((car) => (
                  <TableRow key={car.id}>
                    <TableCell>{car.id}</TableCell>
                    <TableCell>{car.merek}</TableCell>
                    <TableCell className="font-medium">{car.model}</TableCell>
                    <TableCell>{car.harga}</TableCell>
                    <TableCell>{car.baterai}</TableCell>
                    <TableCell>{car.tenaga}</TableCell>
                    <TableCell>{car.jarak}</TableCell>
                    <TableCell>{car.kecepatan_maks}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/cars/edit/${car.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
