import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Filter, Star, Truck } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FarmersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Local Farmers</h1>
              <p className="text-lg text-gray-600 mb-6">
                Connect directly with farmers in your area. Support local agriculture and build relationships with the
                people who grow your food.
              </p>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your location to find nearby farmers"
                  className="pl-10 py-6 rounded-full border-gray-300"
                />
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=300&width=400&text=Local+Farmers"
              width={400}
              height={300}
              alt="Local farmers"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <div className="relative h-[400px] rounded-lg overflow-hidden border">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Interactive map would be displayed here</p>
            </div>
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-medium mb-2">Farmers Near You</h3>
              <p className="text-sm text-gray-600 mb-4">15 farmers found within 25 miles</p>
              <div className="flex gap-2">
                <Select defaultValue="25">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Distance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 miles</SelectItem>
                    <SelectItem value="10">10 miles</SelectItem>
                    <SelectItem value="25">25 miles</SelectItem>
                    <SelectItem value="50">50 miles</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Listings */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Farmers in Your Area</h2>
            <div className="flex items-center gap-2">
              <Select defaultValue="distance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance: Nearest</SelectItem>
                  <SelectItem value="rating">Rating: Highest</SelectItem>
                  <SelectItem value="products">Products: Most</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Green Valley Farm",
                distance: "3.2 miles",
                specialty: "Organic Vegetables & Fruits",
                description:
                  "Family-owned farm specializing in heirloom vegetables and seasonal fruits. All produce is grown using organic practices.",
                products: ["Tomatoes", "Peppers", "Lettuce", "Strawberries"],
                delivery: true,
                pickup: true,
                markets: ["Downtown Farmers Market", "Westside Community Market"],
                image: "farm1",
              },
              {
                name: "Sunny Acres",
                distance: "5.7 miles",
                specialty: "Fruits & Berries",
                description:
                  "Specializing in a wide variety of berries and tree fruits. Our orchards have been producing quality fruits for over 30 years.",
                products: ["Apples", "Peaches", "Blueberries", "Raspberries"],
                delivery: true,
                pickup: true,
                markets: ["County Fair Market", "Eastside Farmers Market"],
                image: "farm2",
              },
              {
                name: "Heritage Ranch",
                distance: "8.1 miles",
                specialty: "Grass-fed Meats & Dairy",
                description:
                  "Pasture-raised livestock with a focus on humane practices and sustainable land management. Offering beef, pork, and artisanal cheeses.",
                products: ["Beef", "Pork", "Cheese", "Eggs"],
                delivery: true,
                pickup: true,
                markets: ["Premium Meats Market", "Downtown Farmers Market"],
                image: "farm3",
              },
              {
                name: "Honey Hill Apiary",
                distance: "4.3 miles",
                specialty: "Honey & Bee Products",
                description:
                  "Small-scale apiary producing raw honey, beeswax products, and pollinator-friendly plants. Educational tours available.",
                products: ["Honey", "Beeswax", "Pollen", "Honey Comb"],
                delivery: false,
                pickup: true,
                markets: ["Artisan Foods Market"],
                image: "farm4",
              },
              {
                name: "Fresh Roots Farm",
                distance: "6.9 miles",
                specialty: "Root Vegetables & Herbs",
                description:
                  "Specializing in high-quality root vegetables and culinary herbs. Offering CSA shares and bulk orders for restaurants.",
                products: ["Potatoes", "Carrots", "Onions", "Herbs"],
                delivery: true,
                pickup: true,
                markets: ["Chef's Market", "Westside Community Market"],
                image: "farm5",
              },
              {
                name: "Meadow Creek Dairy",
                distance: "10.2 miles",
                specialty: "Artisan Dairy Products",
                description:
                  "Small-batch dairy producing artisanal cheeses, yogurt, and butter from grass-fed cows. Award-winning cheese selection.",
                products: ["Cheese", "Yogurt", "Butter", "Cream"],
                delivery: true,
                pickup: true,
                markets: ["Gourmet Foods Market", "Downtown Farmers Market"],
                image: "farm6",
              },
            ].map((farmer, index) => (
              <Link href={`/farmers/${index}`} key={index}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${farmer.image}`}
                      fill
                      alt={farmer.name}
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                      {farmer.distance}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl">{farmer.name}</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-orange-500 font-medium mb-2">{farmer.specialty}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{farmer.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {farmer.products.slice(0, 4).map((product, i) => (
                        <span key={i} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded">
                          {product}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      {farmer.delivery && (
                        <div className="flex items-center gap-1">
                          <Truck className="h-4 w-4" />
                          <span>Delivery</span>
                        </div>
                      )}
                      {farmer.pickup && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Pickup</span>
                        </div>
                      )}
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">View Farm Profile</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Farmers
            </Button>
          </div>
        </div>
      </section>

      {/* Become a Seller */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Are You a Farmer?</h2>
              <p className="mb-6">
                Join our platform to connect with customers directly, manage your products, and grow your business. No
                middlemen, higher profits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-orange-500 hover:bg-gray-100">Become a Seller</Button>
                <Button variant="outline" className="text-white border-white hover:bg-orange-600">
                  Learn More
                </Button>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=300&width=400&text=Join+Our+Network"
              width={400}
              height={300}
              alt="Join our network"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

