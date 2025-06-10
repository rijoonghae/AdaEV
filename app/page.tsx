import Link from "next/link"
import { Car, Zap, Search, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mb-6">
              <Car className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Selamat datang di Ada-EV</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ada-EV kini bantu kamu cari mobil listrik terbaik</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recommendation">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500"
              >
                <Search className="mr-2 h-5 w-5" />
                Cari Rekomendasi
              </Button>
            </Link>
            <Link href="/cars">
              <Button size="lg" variant="outline" className="border-orange-400 text-orange-600 hover:bg-orange-50">
                <List className="mr-2 h-5 w-5" />
                Lihat Semua Mobil
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rekomendasi Cerdas</h3>
                <p className="text-gray-600">Dapatkan rekomendasi mobil listrik sesuai kebutuhan dan budget Anda</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Spesifikasi Lengkap</h3>
                <p className="text-gray-600">
                  Informasi detail tentang baterai, tenaga, jarak tempuh, dan kecepatan maksimal
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Database Terlengkap</h3>
                <p className="text-gray-600">Koleksi mobil listrik terbaru dari berbagai merek ternama</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
