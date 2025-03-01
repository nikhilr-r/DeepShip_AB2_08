import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Truck, Calendar, Heart, Minus, Plus, MessageCircle } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  // This would normally fetch the product based on the ID
  const product = {
    id: params.id,
    name: "Organic Heirloom Tomatoes",
    price: 4.99,
    unit: "lb",
    description:
      "These organic heirloom tomatoes are grown without synthetic pesticides or fertilizers. They are picked at peak ripeness for maximum flavor and nutrition. Perfect for salads, sandwiches, or cooking.",
    images: ["tomato1", "tomato2", "tomato3", "tomato4"],
    rating: 4.8,
    reviews: 24,
    farmer: {
      name: "Green Valley Farm",
      location: "Riverside, CA",
      rating: 4.9,
      reviews: 156,
      image: "farmer1",
    },
    harvest_date: "2 days ago",
    available: true,
    organic: true,
    delivery: "Available for delivery or pickup",
    nutrition: {
      calories: 22,
      fat: "0.2g",
      carbs: "4.8g",
      protein: "1.1g",
      vitamins: ["Vitamin C", "Vitamin K", "Potassium", "Folate"],
    },
  }

  return (
    <main className="min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="mb-6">
          <Link href="/marketplace" className="text-orange-500 hover:underline">
            ← Back to Marketplace
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden border">
              <Image
                src={`/placeholder.svg?height=400&width=600&text=${product.images[0]}`}
                fill
                alt={product.name}
                className="object-cover"
              />
              <Button variant="outline" size="icon" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                <Heart className="h-5 w-5 text-gray-600" />
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <div key={i} className="relative h-24 rounded-md overflow-hidden border cursor-pointer">
                  <Image
                    src={`/placeholder.svg?height=100&width=100&text=${img}`}
                    fill
                    alt={`${product.name} view ${i + 1}`}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Organic</span>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  In Season
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="ml-1 text-lg text-gray-500">/{product.unit}</span>
              </div>
            </div>

            <div className="border-t border-b py-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=50&width=50&text=${product.farmer.image}`}
                    fill
                    alt={product.farmer.name}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Grown by {product.farmer.name}</h3>
                  <p className="text-sm text-gray-500">{product.farmer.location}</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  View Farm
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Harvested: {product.harvest_date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-gray-500" />
                  <span>{product.delivery}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border rounded-md">
                  <Button variant="ghost" size="icon" className="rounded-r-none">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-12 text-center">1</div>
                  <Button variant="ghost" size="icon" className="rounded-l-none">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-sm text-gray-500">Available: 24 {product.unit}</div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
                <Button variant="outline" className="flex-1">
                  Buy Now
                </Button>
              </div>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="flex-1">
                  Description
                </TabsTrigger>
                <TabsTrigger value="nutrition" className="flex-1">
                  Nutrition
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">
                  Reviews
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p className="text-gray-700">{product.description}</p>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Growing Practices</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>No synthetic pesticides or fertilizers</li>
                    <li>Sustainable water management</li>
                    <li>Crop rotation to maintain soil health</li>
                    <li>Hand-picked at peak ripeness</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="nutrition" className="pt-4">
                <div className="space-y-4">
                  <h4 className="font-medium">Nutrition Facts (per 100g)</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between border-b pb-1">
                      <span>Calories</span>
                      <span className="font-medium">{product.nutrition.calories}</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span>Total Fat</span>
                      <span className="font-medium">{product.nutrition.fat}</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span>Total Carbs</span>
                      <span className="font-medium">{product.nutrition.carbs}</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span>Protein</span>
                      <span className="font-medium">{product.nutrition.protein}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Vitamins & Minerals</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.nutrition.vitamins.map((vitamin, i) => (
                        <span key={i} className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded">
                          {vitamin}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="pt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{product.rating}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">{product.reviews} reviews</div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center mb-1">
                          <span className="w-4 text-xs text-gray-500">{rating}</span>
                          <div className="flex-1 h-2 mx-2 bg-gray-200 rounded">
                            <div
                              className="h-2 bg-yellow-400 rounded"
                              style={{ width: rating === 5 ? "70%" : rating === 4 ? "20%" : "10%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">
                            {rating === 5 ? "70%" : rating === 4 ? "20%" : "10%"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Write a Review
                  </Button>

                  <div className="space-y-4 mt-6">
                    {[
                      {
                        name: "Sarah J.",
                        rating: 5,
                        date: "2 weeks ago",
                        comment:
                          "These tomatoes are incredible! So much flavor compared to store-bought. Will definitely order again.",
                      },
                      {
                        name: "Michael T.",
                        rating: 4,
                        date: "1 month ago",
                        comment:
                          "Great quality and freshness. Arrived in perfect condition. Only wish they were available year-round!",
                      },
                    ].map((review, i) => (
                      <div key={i} className="border-b pb-4">
                        <div className="flex justify-between mb-2">
                          <div className="font-medium">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Organic Bell Peppers",
                price: "$3.99",
                unit: "lb",
                farmer: "Green Valley Farm",
                image: "peppers",
              },
              { name: "Fresh Basil", price: "$2.50", unit: "bunch", farmer: "Herb Haven", image: "basil" },
              { name: "Garlic Bulbs", price: "$1.99", unit: "each", farmer: "Sunny Acres", image: "garlic" },
              { name: "Red Onions", price: "$1.49", unit: "lb", farmer: "Root Farm", image: "onions" },
            ].map((product, index) => (
              <Link href={`/marketplace/product/${index + 10}`} key={index}>
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
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="text-orange-500 font-bold">
                        {product.price}
                        <span className="text-sm text-gray-500">/{product.unit}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">From {product.farmer}</p>
                    <div className="mt-auto">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

