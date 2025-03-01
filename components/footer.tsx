import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                width={40}
                height={40}
                alt="Cultivating Co Logo"
                className="rounded-full bg-white"
              />
              <span className="text-xl font-bold">Cultivating Co</span>
            </Link>
            <p className="text-blue-100 max-w-xs">
              Connecting farmers directly with customers for fresher produce and fairer prices.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-blue-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/marketplace" className="hover:text-white">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/farmers" className="hover:text-white">
                  Find Farmers
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">For Farmers</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/dashboard/seller" className="hover:text-white">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard/seller/products" className="hover:text-white">
                  Manage Products
                </Link>
              </li>
              <li>
                <Link href="/dashboard/seller/orders" className="hover:text-white">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/dashboard/seller/reports" className="hover:text-white">
                  Income Reports
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white">
                  Farmer Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Newsletter</h3>
            <p className="mb-4 text-blue-100">Stay updated with seasonal produce and farmer stories.</p>
            <form className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-300"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-500 pt-6 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Cultivating Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

