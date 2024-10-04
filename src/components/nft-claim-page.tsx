'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Star, Shield, Zap } from "lucide-react"

export function NftClaimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <nav className="flex justify-between items-center p-4 bg-black text-white">
        <div className="text-2xl font-bold">NFT Claim</div>
        <Button variant="outline" className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-black">
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="NFT Preview"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold text-black">Exclusive NFT Collection</h1>
            <p className="text-lg text-gray-700">
              Be part of this groundbreaking digital art collection. Claim your unique NFT now and join our
              community of art enthusiasts and collectors.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Claim Your NFT
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <Card className="border-black">
            <CardContent className="flex flex-col md:flex-row items-center gap-8 p-6">
              <div className="w-full md:w-1/2">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="NFT Collection Preview"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-semibold text-black">About the Collection</h2>
                <p className="text-gray-700">
                  This exclusive NFT collection features unique digital artworks that blend contemporary
                  themes with cutting-edge technology. Each piece is a one-of-a-kind creation, minted on the
                  blockchain to ensure authenticity and ownership.
                </p>
                <p className="text-gray-700">
                  Our collection explores the intersection of art and technology, pushing the boundaries of
                  digital creativity. By owning one of these NFTs, you're not just acquiring a piece of art,
                  but also becoming part of a forward-thinking community at the forefront of the digital art
                  revolution.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="border-black">
            <CardContent className="flex flex-col md:flex-row-reverse items-center gap-8 p-6">
              <div className="w-full md:w-1/2">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Creator in Studio"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-semibold text-black">Meet the Creator</h2>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Creator Avatar"
                    className="rounded-full w-16 h-16"
                  />
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-sm text-gray-600">Digital Artist & Blockchain Enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Jane Doe is a renowned digital artist known for her innovative approach to blending
                  traditional art techniques with cutting-edge technology. With over a decade of experience
                  in the digital art world, Jane has been at the forefront of the NFT revolution.
                </p>
                <p className="text-gray-700">
                  Her work has been featured in virtual galleries worldwide and has garnered attention from
                  both art critics and tech enthusiasts alike. This exclusive NFT collection represents
                  Jane's vision of the future of digital ownership and creativity.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black mb-8 text-center">
            Features & Benefits for Holders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Star className="w-8 h-8 text-gray-700" />}
              title="Exclusive Access"
              description="Get VIP access to virtual gallery openings and artist meet-and-greets."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-gray-700" />}
              title="Ownership Rights"
              description="Full commercial rights to your NFT, enabling various use cases and monetization opportunities."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-gray-700" />}
              title="Community Perks"
              description="Join a vibrant community of collectors and participate in governance decisions."
            />
          </div>
        </section>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="border-black">
      <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
        {icon}
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  )
}