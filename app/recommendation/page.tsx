"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Battery, Zap, Route, Gauge, Search } from "lucide-react"

const mockCars = [
  {
    id: "1",
    merek: "Tesla",
    model: "Model 3",
    harga: 800,
    baterai: 75,
    tenaga: 283,
    jarak: 448,
    kecepatanMaks: 225,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    merek: "Hyundai",
    model: "IONIQ 5",
    harga: 750,
    baterai: 72.6,
    tenaga: 225,
    jarak: 384,
    kecepatanMaks: 185,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    merek: "Nissan",
    model: "Leaf",
    harga: 600,
    baterai: 40,
    tenaga: 150,
    jarak: 270,
    kecepatanMaks: 144,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function RecommendationPage() {
  const [showResults, setShowResults] = useState(false)
  const [formData, setFormData] = useState({
    harga: "",
    battery: "",
    power: "",
    distance: "",
    max_speed: "",
  })

  const formatPrice = (harga: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(harga)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Berikut hasil rekomendasi mobil listrik</h1>
            <p className="text-gray-600">Berdasarkan kriteria yang Anda pilih</p>
            <Button variant="outline" onClick={() => setShowResults(false)} className="mt-4">
              Ubah Kriteria
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCars.map((car, index) => (
              <Card key={car.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 relative">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={`${car.merek} ${car.model}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {index === 0 && <Badge className="absolute top-2 left-2 bg-green-500">Rekomendasi Terbaik</Badge>}
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">
                      {car.merek} {car.model}
                    </CardTitle>
                    <Badge variant="secondary">{car.merek}</Badge>
                  </div>

                  <div className="text-2xl font-bold text-orange-600 mb-4">{formatPrice(car.harga)}</div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Battery className="h-4 w-4 text-green-500" />
                      <span>{car.baterai} kWh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-blue-500" />
                      <span>{car.tenaga} HP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Route className="h-4 w-4 text-purple-500" />
                      <span>{car.jarak} km</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4 text-red-500" />
                      <span>{car.kecepatanMaks} km/h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mt-20 mb-2">Apa yang ingin kamu inginkan?</h1>
          <p className="text-gray-600">Isi form berikut untuk mendapatkan rekomendasi mobil listrik terbaik</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Form Rekomendasi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="harga">Harga</Label>
                  <Select
                    value={formData.harga}
                    onValueChange={(value) => handleInputChange("harga", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori harga" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Ekonomis</SelectItem>
                      <SelectItem value="2">Menengah</SelectItem>
                      <SelectItem value="3">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="battery">Kapasitas Baterai</Label>
                  <Select
                    value={formData.battery}
                    onValueChange={(value) => handleInputChange("battery", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori baterai" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Standar</SelectItem>
                      <SelectItem value="2">Jarak Jauh</SelectItem>
                      <SelectItem value="3">Performa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="power">Tenaga</Label>
                  <Select
                    value={formData.power}
                    onValueChange={(value) => handleInputChange("power", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori tenaga" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Perkotaan</SelectItem>
                      <SelectItem value="2">Responsif</SelectItem>
                      <SelectItem value="3">Performa Tinggi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="distance">Jarak Tempuh</Label>
                  <Select
                    value={formData.distance}
                    onValueChange={(value) => handleInputChange("distance", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori jarak" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Dekat</SelectItem>
                      <SelectItem value="2">Menengah</SelectItem>
                      <SelectItem value="3">Jauh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="max_speed">Kecepatan Maksimum</Label>
                  <Select
                    value={formData.max_speed}
                    onValueChange={(value) => handleInputChange("max_speed", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori kecepatan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Standar</SelectItem>
                      <SelectItem value="2">Cepat</SelectItem>
                      <SelectItem value="3">Sangat Cepat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500"
              >
                <Search className="mr-2 h-4 w-4" />
                Cari Rekomendasi
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
