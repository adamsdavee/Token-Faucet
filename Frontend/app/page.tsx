"use client"

import { Navbar } from "@/components/navbar"
import { TokenSelector } from "@/components/token-selector"
import { Toaster } from "@/components/ui/toaster"

export default function FaucetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Core Testnet Faucet</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get test tokens for development and testing on Core Testnet. Select a token, enter your address, and receive
            tokens instantly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <TokenSelector />
        </div>

        {/* Information section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">How it works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Select Token</h4>
                <p className="text-sm text-slate-600">Choose from available test tokens</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Enter Details</h4>
                <p className="text-sm text-slate-600">Paste your address and specify amount</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold">3</span>
                </div>
                <h4 className="font-semibent text-slate-900 mb-2">Receive Tokens</h4>
                <p className="text-sm text-slate-600">Tokens sent directly to your address</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">More Tokens Coming Soon</h3>
            <p className="text-slate-600">
              We're constantly adding new test tokens to support your development needs. Stay tuned for more ERC20 test
              tokens on Core Testnet.
            </p>
          </div>
        </div>
      </main>

      <Toaster />
    </div>
  )
}
