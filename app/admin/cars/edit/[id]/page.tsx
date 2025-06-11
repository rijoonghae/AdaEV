"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save, Upload } from "lucide-react"
import Link from "next/link"

// Mock data (should be replaced with real fetch in real app)
const mockCars = [
  {
    id: "1",
    merek: "Tesla",
    model: "Model 3",
    harga: "800",
    baterai: "75",
    tenaga: "283",
    jarak: "448",
    kecepatan_maks: "225",
    image: "",
  },
  {
    id: "2",
    merek: "Hyundai",
    model: "IONIQ 5",
    harga: "750",
    baterai: "72.6",
    tenaga: "225",
    jarak: "384",
    kecepatan_maks: "185",
    image: "",
  },
  {
    id: "3",
    merek: "BMW",
    model: "iX3",
    harga: "950",
    baterai: "74",
    tenaga: "286",
    jarak: "460",
    kecepatan_maks: "180",
    image: "",
  },
]

export default function EditCarPage() {
  const router = useRouter()
  const params = useParams()
  const { id } = params

  const [formData, setFormData] = useState({
    merek: "",
    model: "",
    harga: "",
    baterai: "",
    tenaga: "",
    jarak: "",
    kecepatan_maks: "",
    image: "",
  })

  useEffect(() => {
    // In real app, fetch car by id
    const car = mockCars.find((c) => c.id === id)
    if (car) {
      setFormData({ ...car })
    }
  }, [id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, update in database
    console.log("Updating car:", formData)
    alert("Mobil berhasil diupdate!")
    router.push("/admin/dashboard")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-6">
          <Link href="/admin/dashboard">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Dashboard
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Edit Mobil Listrik</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="merek">Merek</Label>
                  <Input
                    id="merek"
                    placeholder="Hyundai"
                    value={formData.merek}
                    onChange={(e) => handleInputChange("merek", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="model">Model</Label>
                  <Input
                    id="model"
                    placeholder="IONIQ 5"
                    value={formData.model}
                    onChange={(e) => handleInputChange("model", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="harga">Harga (Juta)</Label>
                <Input
                  id="harga"
                  type="number"
                  placeholder="800"
                  value={formData.harga}
                  onChange={(e) => handleInputChange("harga", e.target.value)}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="baterai">Kapasitas Baterai (kWh)</Label>
                  <Input
                    id="baterai"
                    type="number"
                    step="0.1"
                    placeholder="75"
                    value={formData.baterai}
                    onChange={(e) => handleInputChange("baterai", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="tenaga">Tenaga (HP)</Label>
                  <Input
                    id="tenaga"
                    type="number"
                    placeholder="283"
                    value={formData.tenaga}
                    onChange={(e) => handleInputChange("tenaga", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="jarak">Jarak Tempuh (km)</Label>
                  <Input
                    id="jarak"
                    type="number"
                    placeholder="448"
                    value={formData.jarak}
                    onChange={(e) => handleInputChange("jarak", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="kecepatan_maks">Kecepatan Maksimal (km/h)</Label>
                  <Input
                    id="kecepatan_maks"
                    type="number"
                    placeholder="225"
                    value={formData.kecepatan_maks}
                    onChange={(e) => handleInputChange("kecepatan_maks", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image">Upload Gambar</Label>
                <div className="mt-2">
                  <Button type="button" variant="outline" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Pilih Gambar
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-[#F27E68]"
                >
                  Simpan Perubahan
                </Button>
                <Link href="/admin/dashboard" className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    Batal
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 