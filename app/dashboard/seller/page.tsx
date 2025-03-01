import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, ShoppingBag, Users, ArrowUpRight, Package, DollarSign, Star } from "lucide-react"

export default function SellerDashboard() {
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Farmer Dashboard</h1>
              <p className="text-gray-500">Welcome back, Green Valley Farm</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                View Your Store
              </Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Add New Product
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Sales</p>
                  <h3 className="text-2xl font-bold mt-1">$12,426</h3>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="flex items-center text-green-600 mr-2">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      12%
                    </span>
                    <span className="text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Orders</p>
                  <h3 className="text-2xl font-bold mt-1">156</h3>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="flex items-center text-green-600 mr-2">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      8%
                    </span>
                    <span className="text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <ShoppingBag className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Products</p>
                  <h3 className="text-2xl font-bold mt-1">24</h3>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="flex items-center text-green-600 mr-2">
                      <ArrowUpRight className="h-3 w-3 mr-1" />4
                    </span>
                    <span className="text-gray-500">new this month</span>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Package className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Customers</p>
                  <h3 className="text-2xl font-bold mt-1">89</h3>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="flex items-center text-green-600 mr-2">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      15%
                    </span>
                    <span className="text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Sales Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md border border-dashed">
                <div className="text-center">
                  <BarChart3 className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Sales chart would be displayed here</p>
                  <p className="text-sm text-gray-400">Showing monthly sales data</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm font-medium text-gray-500">This Month</p>
                  <p className="text-xl font-bold mt-1">$4,285</p>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="flex items-center text-green-600">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      18%
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Last Month</p>
                  <p className="text-xl font-bold mt-1">$3,825</p>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="flex items-center text-green-600">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      12%
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm font-medium text-gray-500">This Year</p>
                  <p className="text-xl font-bold mt-1">$12,426</p>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="flex items-center text-green-600">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      24%
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { id: "ORD-7829", customer: "Sarah Johnson", amount: "$42.50", status: "Delivered", date: "Today" },
                  { id: "ORD-7828", customer: "Michael Brown", amount: "$28.75", status: "Processing", date: "Today" },
                  { id: "ORD-7827", customer: "Emily Davis", amount: "$65.20", status: "Shipped", date: "Yesterday" },
                  {
                    id: "ORD-7826",
                    customer: "Robert Wilson",
                    amount: "$19.99",
                    status: "Delivered",
                    date: "Yesterday",
                  },
                  {
                    id: "ORD-7825",
                    customer: "Jennifer Lee",
                    amount: "$37.45",
                    status: "Delivered",
                    date: "2 days ago",
                  },
                ].map((order, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{order.amount}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-orange-500">
                View All Orders
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Products and Inventory */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium">Product Inventory</CardTitle>
              <Button variant="outline" size="sm">
                Manage Products
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium text-gray-500 pb-3">Product</th>
                      <th className="text-left font-medium text-gray-500 pb-3">Price</th>
                      <th className="text-left font-medium text-gray-500 pb-3">Stock</th>
                      <th className="text-left font-medium text-gray-500 pb-3">Status</th>
                      <th className="text-left font-medium text-gray-500 pb-3">Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Organic Heirloom Tomatoes",
                        price: "$4.99/lb",
                        stock: "24 lb",
                        status: "In Season",
                        sales: 86,
                      },
                      { name: "Fresh Bell Peppers", price: "$3.99/lb", stock: "18 lb", status: "In Season", sales: 42 },
                      {
                        name: "Organic Kale",
                        price: "$3.49/bunch",
                        stock: "15 bunches",
                        status: "In Season",
                        sales: 38,
                      },
                      {
                        name: "Strawberries",
                        price: "$5.99/basket",
                        stock: "10 baskets",
                        status: "Limited",
                        sales: 65,
                      },
                      {
                        name: "Farm Fresh Eggs",
                        price: "$6.50/dozen",
                        stock: "8 dozen",
                        status: "In Stock",
                        sales: 52,
                      },
                    ].map((product, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">
                              <span className="text-xs text-gray-500">{product.name.substring(0, 2)}</span>
                            </div>
                            <span className="font-medium">{product.name}</span>
                          </div>
                        </td>
                        <td className="py-4">{product.price}</td>
                        <td className="py-4">{product.stock}</td>
                        <td className="py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              product.status === "In Season"
                                ? "bg-green-100 text-green-800"
                                : product.status === "Limited"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {product.status}
                          </span>
                        </td>
                        <td className="py-4">{product.sales} units</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Customer Feedback</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-100 p-4 rounded-full">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-sm text-gray-500">Average Rating</p>
                </div>
                <div className="ml-auto">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">156 reviews</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Sarah J.",
                    rating: 5,
                    comment: "The tomatoes were incredible! So much flavor compared to store-bought.",
                    date: "2 days ago",
                  },
                  {
                    name: "Michael T.",
                    rating: 4,
                    comment: "Great quality and freshness. Arrived in perfect condition.",
                    date: "1 week ago",
                  },
                  {
                    name: "Emily R.",
                    rating: 5,
                    comment: "The eggs are amazing! Will definitely order again.",
                    date: "2 weeks ago",
                  },
                ].map((review, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>

              <Button variant="ghost" className="w-full mt-4 text-orange-500">
                View All Reviews
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

