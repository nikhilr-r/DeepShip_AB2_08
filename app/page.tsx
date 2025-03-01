"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { NextPage } from 'next'
import type { Variants } from 'framer-motion'

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="w-full bg-gradient-to-r from-orange-50 to-orange-100 py-12 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="max-w-md" variants={fadeInUp} initial="initial" animate="animate">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            <span className="text-2xl md:text-3xl block text-orange-500">Welcome to</span>
            AGRI-CULTURE
          </h1>
          <p className="my-4 text-gray-600">Peer to Peer Bonds between Farmer and Consumer</p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium rounded-full px-6">
            Get Started
          </Button>

          </motion.div>
        <motion.div
          className="mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png?height=400&width=400&text=Farmer"
            width={400}
            height={400}
            alt="Farmer character holding plants"
            className="object-contain"
          />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Cactus", "Carrot", "Orange", "Broccoli"].map((plant, index) => (
            <motion.div
              key={plant}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white shadow-md rounded-xl overflow-hidden">
                <CardContent className="p-4 flex flex-col items-center">
                  <Image
                    src={`/placeholder.svg?height=80&width=80&text=${plant}`}
                    width={80}
                    height={80}
                    alt={plant}
                    className="object-contain mb-2"
                  />
                  <span className="text-gray-800 font-medium">{plant}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Sustainability Section */}
      <motion.section
        className="w-full py-12 px-4 md:px-8 lg:px-16 bg-orange-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Our Sustainability<span className="text-transparent"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Tomato", "Carrot", "Broccoli", "Cabbage"].map((vegetable, index) => (
              <motion.div
                key={vegetable}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-md rounded-xl overflow-hidden">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Image
                      src={`/placeholder.svg?height=80&width=80&text=${vegetable}`}
                      width={80}
                      height={80}
                      alt={vegetable}
                      className="object-contain mb-2"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gardening Section */}
      <motion.section
        className="w-full py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-400 to-orange-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div className="max-w-md text-white" variants={fadeInUp} initial="initial" animate="animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gardening is better together</h2>
            <p className="mb-6">Join our community of plant enthusiasts and grow together</p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium rounded-full px-6">
              Join Now
            </Button>
          </motion.div>
          <motion.div
            className="mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg?height=300&width=300&text=Community"
              width={300}
              height={300}
              alt="Farmer character with plants"
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Our Section */}
      <motion.section
        className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div className="max-w-md" variants={fadeInUp} initial="initial" animate="animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our</h2>
            <p className="mb-6 text-gray-600">Learn about our mission and values</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg?height=300&width=300&text=Mission"
              width={300}
              height={300}
              alt="Farmer character with plants"
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Cultivation Section */}
      <motion.section
        className="w-full py-12 px-4 md:px-8 lg:px-16 bg-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div className="max-w-md text-white" variants={fadeInUp} initial="initial" animate="animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cultivation Communities</h2>
            <p className="mb-6">Join local gardening groups in your area</p>
          </motion.div>
          <motion.div
            className="mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg?height=300&width=300&text=Community"
              width={300}
              height={300}
              alt="Farmer character with plants"
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="w-full py-8 px-4 md:px-8 lg:px-16 bg-blue-600 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Button className="bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-full px-8 py-2">
          View more
        </Button>
      </motion.footer>
    </main>
  )
}

export default Home

