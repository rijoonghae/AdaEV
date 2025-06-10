"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Plus, Edit, Trash2, LogOut, Users, Database } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockCars = [
  {
    id: "1",
    merek: "Tesla",
    model: "Model 3",
    harga: 800000000,
    baterai: 75,
    tenaga: 283,
    jarak: 448,
    kecepatanMaks: 225,
  },
  {
    id: "2",
    merek: "Hyundai",
    model: "IONIQ 5",
    harga: 750000000,
    baterai: 72.6,
    tenaga: 225,
    jarak: 384,
    kecepatanMaks: 185,
  },
  {
    id: "3",
    merek: "BMW",
    model: "iX3",
    harga: 950000000,
    baterai: 74,
    tenaga: 286,
    jarak: 460,
    kecepatanMaks: 180,
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
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
              <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-lg p-2">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, Admin</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Mobil</p>
                  <p className="text-3xl font-bold">{mockCars.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Merek Tersedia</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pengunjung Hari Ini</p>
                  <p className="text-3xl font-bold">127</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Car Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Daftar Mobil Listrik</CardTitle>
              <Link href="/admin/cars/add">
                <Button className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500">
                  <Plus className="mr-2 h-4 w-4" />
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
                  <TableHead>Harga</TableHead>
                  <TableHead>Baterai</TableHead>
                  <TableHead>Tenaga</TableHead>
                  <TableHead>Jarak</TableHead>
                  <TableHead>Kecepatan Maks</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCars.map((car) => (
                  <TableRow key={car.id}>
                    <TableCell>{car.id}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{car.merek}</Badge>
                    </TableCell>
                    <TableCell className="font-medium">{car.model}</TableCell>
                    <TableCell>{formatPrice(car.harga)}</TableCell>
                    <TableCell>{car.baterai} kWh</TableCell>
                    <TableCell>{car.tenaga} HP</TableCell>
                    <TableCell>{car.jarak} km</TableCell>
                    <TableCell>{car.kecepatanMaks} km/h</TableCell>
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
