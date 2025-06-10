import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Battery, Zap, Route, Gauge } from "lucide-react"

// Mock data - in real app this would come from database
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
    image: "/placeholder.svg?height=200&width=300",
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
    image: "/placeholder.svg?height=200&width=300",
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
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    merek: "Nissan",
    model: "Leaf",
    harga: 600000000,
    baterai: 40,
    tenaga: 150,
    jarak: 270,
    kecepatanMaks: 144,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function CarsPage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Daftar Mobil Listrik</h1>
          <p className="text-gray-600">Temukan mobil listrik yang sesuai dengan kebutuhan Anda</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCars.map((car) => (
            <Card key={car.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={`${car.merek} ${car.model}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
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
