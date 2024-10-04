"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Star, Shield, Zap } from "lucide-react"
import { client } from "./client"
import { ConnectButton, lightTheme, MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react"
import { defineChain, getContract, PreparedTransaction } from "thirdweb"
import { getContractMetadata } from "thirdweb/extensions/common"
import { claimTo } from "thirdweb/extensions/erc721"
import { log } from "node:console"


export default function NFTClaimLandingPage() {
  const account = useActiveAccount();


  const contract = getContract({
    client: client,
    chain: defineChain(12227332),
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
  });

  const { data: contractMetadata } = useReadContract(
    getContractMetadata,{
      contract: contract,
    }
  );
  console.log(getContractMetadata);

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="flex justify-between items-center p-4 bg-white text-gray-800 shadow-sm">
        <div className="text-2xl font-bold">NFT Claim</div>
        {/* <Button variant="outline" className="flex items-center gap-2 text-blue-600 border-blue-600 hover:bg-blue-50">
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button> */}
        <ConnectButton client={client}
          theme={lightTheme()}
          connectButton={
            {
              label: "Connect Wallet"
            }
          }
        />
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/2">
            {/* <img
              src="/placeholder.svg?height=400&width=400"
              alt="NFT Preview"
              className="rounded-lg shadow-md w-full max-w-md mx-auto"
            /> */}
            <MediaRenderer 
                  client={client}
                  src={contractMetadata?.image}
                  width="400"
                  height="400"
                  style={
                    {
                      borderRadius: "1rem",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }
                  }
                />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">{contractMetadata?.name}</h1>
            <p className="text-lg text-gray-600">
              {contractMetadata?.description}
            </p>
            
            <TransactionButton
            transaction={()=> claimTo({
              contract: contract,
              to: account?.address as string,
              quantity: BigInt(1),})}
            onTransactionConfirmed={async ()=> alert("transaction have confirmed")}
            >
              Claim 1 NFT
            </TransactionButton>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Features & Benefits for Holders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Star className="w-8 h-8 text-blue-600" />}
              title="Exclusive Access"
              description="Get VIP access to virtual gallery openings and artist meet-and-greets."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Ownership Rights"
              description="Full commercial rights to your NFT, enabling various use cases and monetization opportunities."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-600" />}
              title="Community Perks"
              description="Join a vibrant community of collectors and participate in governance decisions."
            />
          </div>
        </section>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-gray-200">
      <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}