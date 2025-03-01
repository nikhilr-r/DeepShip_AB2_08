import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  LineChart,
  PieChart,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  TrendingUp,
  ShoppingBag,
  Package,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function IncomeReportsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Income Reports</h1>
              <p className="text-gray-500">Track your sales and analyze performance</p>
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="thisMonth">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="thisWeek">This Week</SelectItem>
                  <SelectItem value="thisMonth">This Month</SelectItem>
                  <SelectItem value="lastMonth">Last Month</SelectItem>
                  <SelectItem value="thisQuarter">This Quarter</SelectItem>
                  <SelectItem value="thisYear">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export
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
                  <p className="text-sm font-medium text-gray-500">Total Revenue</p>
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
                  <p className="text-sm font-medium text-gray-500">Net Profit</p>
                  <h3 className="text-2xl font-bold mt-1">$8,742</h3>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="flex items-center text-green-600 mr-2">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      8%
                    </span>
                    <span className="text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Orders</p>
                  <h3 className="text-2xl font-bold mt-1">156</h3>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="flex items-center text-green-600 mr-2">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      15%
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
                  <p className="text-sm font-medium text-gray-500">Units Sold</p>
                  <h3 className="text-2xl font-bold mt-1">842</h3>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="flex items-center text-green-600 mr-2">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      18%
                    </span>
                    <span className="text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Package className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Charts */}
        <Tabs defaultValue="revenue" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="revenue">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[400px] flex items-center justify-center bg-gray-50 rounded-md border border-dashed">
                  <div className="text-center">
                    <LineChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Revenue chart would be displayed here</p>
                    <p className="text-sm text-gray-400">Showing monthly revenue data</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm font-medium text-gray-500">Online Sales</p>
                      <p className="text-xl font-bold mt-1">$8,245</p>
                      <div className="flex items-center mt-1 text-sm">
                        <span className="flex items-center text-green-600">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          24%
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm font-medium text-gray-500">Farmers Markets</p>
                      <p className="text-xl font-bold mt-1">$3,125</p>
                      <div className="flex items-center mt-1 text-sm">
                        <span className="flex items-center text-green-600">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          8%
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm font-medium text-gray-500">Farm Pickup</p>
                      <p className="text-xl font-bold mt-1">$1,056</p>
                      <div className="flex items-center mt-1 text-sm">
                        <span className="flex items-center text-red-600">
                          <ArrowDownRight className="h-3 w-3 mr-1" />
                          3%
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Product Performance</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md border border-dashed">
                    <div className="text-center">
                      <BarChart3 className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Product sales chart would be displayed here</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Top Selling Products</h3>
                    <div className="space-y-4">
                      {[
                        { name: "Organic Heirloom Tomatoes", sales: "$1,245", units: 249, growth: 18 },
                        { name: "Farm Fresh Eggs", sales: "$845", units: 130, growth: 12 },
                        { name: "Strawberries", sales: "$782", units: 156, growth: 24 },
                        { name: "Organic Kale", sales: "$645", units: 185, growth: 8 },
                        { name: "Bell Peppers", sales: "$520", units: 130, growth: -2 },
                      ].map((product, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                              <span className="text-xs text-gray-500">{index + 1}</span>
                            </div>
                            <span className="font-medium">{product.name}</span>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{product.sales}</p>
                            <div className="flex items-center text-sm">
                              <span
                                className={`flex items-center ${product.growth >= 0 ? "text-green-600" : "text-red-600"}`}
                              >
                                {product.growth >= 0 ? (
                                  <ArrowUpRight className="h-3 w-3 mr-1" />
                                ) : (
                                  <ArrowDownRight className="h-3 w-3 mr-1" />
                                )}
                                {Math.abs(product.growth)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Customer Insights</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-4">Customer Demographics</h3>
                    <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md border border-dashed">
                      <div className="text-center">
                        <PieChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Customer demographics chart would be displayed here</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Top Customers</h3>
                    <div className="space-y-4">
                      {[
                        { name: "Sarah Johnson", orders: 12, spent: "$485", lastOrder: "2 days ago" },
                        { name: "Michael Brown", orders: 8, spent: "$325", lastOrder: "1 week ago" },
                        { name: "Emily Davis", orders: 7, spent: "$290", lastOrder: "3 days ago" },
                        { name: "Robert Wilson", orders: 6, spent: "$245", lastOrder: "5 days ago" },
                        { name: "Jennifer Lee", orders: 5, spent: "$210", lastOrder: "1 day ago" },
                      ].map((customer, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-sm text-gray-500">{customer.orders} orders</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{customer.spent}</p>
                            <p className="text-sm text-gray-500">Last: {customer.lastOrder}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Monthly Breakdown */}
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Monthly Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium text-gray-500 pb-3">Month</th>
                    <th className="text-left font-medium text-gray-500 pb-3">Revenue</th>
                    <th className="text-left font-medium text-gray-500 pb-3">Expenses</th>
                    <th className="text-left font-medium text-gray-500 pb-3">Profit</th>
                    <th className="text-left font-medium text-gray-500 pb-3">Orders</th>
                    <th className="text-left font-medium text-gray-500 pb-3">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      month: "January",
                      revenue: "$2,845",
                      expenses: "$1,245",
                      profit: "$1,600",
                      orders: 72,
                      growth: 8,
                    },
                    {
                      month: "February",
                      revenue: "$3,125",
                      expenses: "$1,320",
                      profit: "$1,805",
                      orders: 85,
                      growth: 12,
                    },
                    { month: "March", revenue: "$3,845", expenses: "$1,520", profit: "$2,325", orders: 98, growth: 18 },
                    {
                      month: "April",
                      revenue: "$4,285",
                      expenses: "$1,685",
                      profit: "$2,600",
                      orders: 112,
                      growth: 14,
                    },
                    { month: "May", revenue: "$3,925", expenses: "$1,540", profit: "$2,385", orders: 105, growth: -5 },
                    { month: "June", revenue: "$4,125", expenses: "$1,620", profit: "$2,505", orders: 108, growth: 6 },
                  ].map((month, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-4 font-medium">{month.month}</td>
                      <td className="py-4">{month.revenue}</td>
                      <td className="py-4">{month.expenses}</td>
                      <td className="py-4">{month.profit}</td>
                      <td className="py-4">{month.orders}</td>
                      <td className="py-4">
                        <span className={`flex items-center ${month.growth >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {month.growth >= 0 ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {Math.abs(month.growth)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Expense Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Expense Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md border border-dashed mb-4">
                <div className="text-center">
                  <PieChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Expense breakdown chart would be displayed here</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { category: "Seeds & Plants", amount: "$845", percentage: 28 },
                  { category: "Fertilizer & Soil", amount: "$625", percentage: 21 },
                  { category: "Equipment", amount: "$520", percentage: 17 },
                  { category: "Packaging", amount: "$425", percentage: 14 },
                  { category: "Transportation", amount: "$320", percentage: 11 },
                  { category: "Other", amount: "$265", percentage: 9 },
                ].map((expense, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full bg-${["orange", "green", "blue", "purple", "yellow", "gray"][index]}-500 mr-2`}
                    ></div>
                    <span className="flex-1">{expense.category}</span>
                    <span className="font-medium">{expense.amount}</span>
                    <span className="text-gray-500 text-sm ml-2 w-12 text-right">{expense.percentage}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Sales Channels</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md border border-dashed mb-4">
                <div className="text-center">
                  <BarChart3 className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Sales channels chart would be displayed here</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { channel: "Online Marketplace", amount: "$6,245", percentage: 52, growth: 24 },
                  { channel: "Farmers Markets", amount: "$3,125", percentage: 26, growth: 8 },
                  { channel: "Farm Pickup", amount: "$1,056", percentage: 9, growth: -3 },
                  { channel: "Restaurant Sales", amount: "$845", percentage: 7, growth: 15 },
                  { channel: "CSA Subscriptions", amount: "$725", percentage: 6, growth: 12 },
                ].map((channel, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium">{channel.channel}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className={`bg-${["orange", "green", "blue", "purple", "yellow"][index]}-500 h-2 rounded-full`}
                          style={{ width: `${channel.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-medium">{channel.amount}</p>
                      <span
                        className={`flex items-center text-sm justify-end ${channel.growth >= 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {channel.growth >= 0 ? (
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 mr-1" />
                        )}
                        {Math.abs(channel.growth)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

