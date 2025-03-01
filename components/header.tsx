"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useAppContext } from "@/app/context/AppContext"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, User } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const { isAuthenticated, user, setUser, setIsAuthenticated } = useAppContext()

  const handleLogout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 w-full border-b bg-white"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            width={40}
            height={40}
            alt="Cultivating Co Logo"
            className="rounded-full"
          />
          <span className="text-xl font-bold text-orange-500">Cultivating Co</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/marketplace" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Marketplace
          </Link>
          <Link href="/farmers" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Find Farmers
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-orange-500 transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-medium text-white">
              3
            </span>
          </Link>

          {isAuthenticated ? (
            <>
              <Link href="/dashboard" className="hidden md:block">
                <Button variant="outline" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  {user?.name}
                </Button>
              </Link>
              <Button onClick={handleLogout} size="sm" className="bg-orange-500 hover:bg-orange-600">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden md:block">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/signup" className="hidden md:block">
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                  Sign Up
                </Button>
              </Link>
            </>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/marketplace" className="text-lg font-medium hover:text-orange-500 transition-colors">
                  Marketplace
                </Link>
                <Link href="/farmers" className="text-lg font-medium hover:text-orange-500 transition-colors">
                  Find Farmers
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-orange-500 transition-colors">
                  About Us
                </Link>
                <Link href="/blog" className="text-lg font-medium hover:text-orange-500 transition-colors">
                  Blog
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard" className="text-lg font-medium hover:text-orange-500 transition-colors">
                      My Account
                    </Link>
                    <Button onClick={handleLogout} className="bg-orange-500 hover:bg-orange-600">
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-lg font-medium hover:text-orange-500 transition-colors">
                      Login
                    </Link>
                    <Link href="/signup" className="text-lg font-medium hover:text-orange-500 transition-colors">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

