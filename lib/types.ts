export interface ElectricCar {
  id: string
  merek: string // Brand
  model: string
  harga: number // Price
  baterai: number // Battery capacity (kWh)
  tenaga: number // Power (HP)
  jarak: number // Range (km)
  kecepatanMaks: number // Max speed (km/h)
  image?: string
  createdAt: Date
  updatedAt: Date
}

export interface RecommendationCriteria {
  budgetMin: number
  budgetMax: number
  jarakMin: number // Minimum range needed
  penggunaanHarian: "kota" | "highway" | "campuran" // Daily usage
  prioritas: "harga" | "jarak" | "tenaga" | "efisiensi" // Priority
}

export interface Admin {
  id: string
  username: string
  password: string
}
