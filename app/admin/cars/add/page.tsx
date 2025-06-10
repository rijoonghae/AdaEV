"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save, Upload } from "lucide-react"
import Link from "next/link"

export default function AddCarPage() {
  const [formData, setFormData] = useState({
    merek: "",
    model: "",
    harga: "",
    baterai: "",
    tenaga: "",
    jarak: "",
    kecepatanMaks: "",
    image: "",
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, save to database
    console.log("Saving car:", formData)
    alert("Mobil berhasil ditambahkan!")
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
            <CardTitle>Tambah Mobil Listrik Baru</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="merek">Merek</Label>
                  <Input
                    id="merek"
                    placeholder="Tesla, BMW, Hyundai, dll"
                    value={formData.merek}
                    onChange={(e) => handleInputChange("merek", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="model">Model</Label>
                  <Input
                    id="model"
                    placeholder="Model 3, IONIQ 5, dll"
                    value={formData.model}
                    onChange={(e) => handleInputChange("model", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="harga">Harga (Rp)</Label>
                <Input
                  id="harga"
                  type="number"
                  placeholder="800000000"
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
                  <Label htmlFor="kecepatanMaks">Kecepatan Maksimal (km/h)</Label>
                  <Input
                    id="kecepatanMaks"
                    type="number"
                    placeholder="225"
                    value={formData.kecepatanMaks}
                    onChange={(e) => handleInputChange("kecepatanMaks", e.target.value)}
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
                  className="flex-1 bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Simpan Mobil
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
