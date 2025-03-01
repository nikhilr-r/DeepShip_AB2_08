import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AppProvider } from "./context/AppContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cultivating Co - Farm to Table Marketplace",
  description: "Connect directly with local farmers and buy fresh produce",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}



import './globals.css'