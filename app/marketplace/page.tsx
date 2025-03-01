import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search, Star } from "lucide-react"

export default function MarketplacePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Fresh From The Farm</h1>
              <p className="text-lg text-gray-600 mb-6">
                Browse seasonal produce directly from local farmers. Support sustainable agriculture and enjoy fresher,
                tastier food.
              </p>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search for fruits, vegetables, dairy..."
                  className="pl-10 py-6 rounded-full border-gray-300"
                />
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              width={400}
              height={300}
              alt="Fresh produce basket"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Browse Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Vegetables",
              "Fruits",
              "Dairy",
              "Eggs",
              "Meat",
              "Honey",
              "Herbs",
              "Flowers",
              "Preserves",
              "Baked Goods",
              "Specialty",
              "Organic",
            ]
              .slice(0, 6)
              .map((category, index) => (
                <Link href={`/marketplace/category/${category.toLowerCase()}`} key={index}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Image
                        src={`/placeholder.svg?height=80&width=80&text=${category}`}
                        width={80}
                        height={80}
                        alt={category}
                        className="mb-3 rounded-full bg-orange-100 p-2"
                      />
                      <span className="font-medium">{category}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Product Listings */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
                  <TabsTrigger value="organic">Organic</TabsTrigger>
                  <TabsTrigger value="local">Local</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Organic Tomatoes", price: "$4.99", unit: "lb", farmer: "Green Valley Farm", image: "tomatoes" },
              {
                name: "Fresh Strawberries",
                price: "$5.99",
                unit: "basket",
                farmer: "Berry Fields",
                image: "strawberries",
              },
              { name: "Farm Eggs", price: "$6.50", unit: "dozen", farmer: "Happy Hens", image: "eggs" },
              { name: "Honey", price: "$8.99", unit: "jar", farmer: "Busy Bees Apiary", image: "honey" },
              { name: "Organic Kale", price: "$3.49", unit: "bunch", farmer: "Leafy Greens", image: "kale" },
              { name: "Artisan Cheese", price: "$7.99", unit: "8 oz", farmer: "Dairy Delights", image: "cheese" },
              { name: "Fresh Apples", price: "$1.99", unit: "lb", farmer: "Orchard Hills", image: "apples" },
              { name: "Grass-fed Beef", price: "$12.99", unit: "lb", farmer: "Meadow Ranch", image: "beef" },
            ].map((product, index) => (
              <Link href={`/marketplace/product/${index}`} key={index}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=${product.image}`}
                    width={300}
                    height={200}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <div className="text-orange-500 font-bold">
                        {product.price}
                        <span className="text-sm text-gray-500">/{product.unit}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">From {product.farmer}</p>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">(24)</span>
                    </div>
                    <div className="mt-auto">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Farmer Spotlight */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Farmers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Green Valley Farm",
                specialty: "Organic Vegetables",
                location: "Riverside, CA",
                image: "farmer1",
              },
              { name: "Sunny Acres", specialty: "Fruits & Berries", location: "Portland, OR", image: "farmer2" },
              { name: "Heritage Ranch", specialty: "Grass-fed Meats", location: "Austin, TX", image: "farmer3" },
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
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">{farmer.name}</h3>
                    <p className="text-gray-600 mb-1">{farmer.specialty}</p>
                    <p className="text-gray-500 text-sm mb-4">{farmer.location}</p>
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

