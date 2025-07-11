"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, ExternalLink, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { tokens, type Token } from "@/lib/tokens"

export function TokenSelector() {
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [recipientAddress, setRecipientAddress] = useState("")
  const [amount, setAmount] = useState("1000")
  const [isSending, setIsSending] = useState(false)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleTokenSelect = (tokenSymbol: string) => {
    const token = tokens.find((t) => t.symbol === tokenSymbol)
    if (token) {
      setSelectedToken(token)
    }
  }

  const handleCopyAddress = async () => {
    if (!selectedToken) return

    try {
      await navigator.clipboard.writeText(selectedToken.address)
      setCopied(true)
      toast({
        title: "Address Copied! 📋",
        description: "Contract address copied to clipboard",
        duration: 2000,
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy address to clipboard",
        variant: "destructive",
      })
    }
  }

  const isValidAddress = (address: string) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address)
  }

  const handleSend = async () => {
    if (!selectedToken || !amount || !recipientAddress) return

    if (!isValidAddress(recipientAddress)) {
      toast({
        title: "Invalid Address",
        description: "Please enter a valid Ethereum address",
        variant: "destructive",
      })
      return
    }

    setIsSending(true)

    try {
      // Placeholder for faucet backend call
      // In production: call faucet API to send tokens
      // await sendTokens(selectedToken.address, recipientAddress, amount)
      await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulate transaction

      toast({
        title: "Tokens Sent Successfully! 🎉",
        description: `${amount} ${selectedToken.symbol} sent to ${recipientAddress.slice(0, 6)}...${recipientAddress.slice(-4)}`,
        duration: 5000,
      })

      // Reset form
      setRecipientAddress("")
      setAmount("1000")
    } catch (error) {
      toast({
        title: "Send Failed",
        description: "Failed to send tokens. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Card className="w-full shadow-xl border border-slate-200 bg-white">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-bold text-slate-900 text-center">Request Test Tokens</CardTitle>
        <p className="text-slate-600 text-center">
          Select a token, enter your address, and receive test tokens instantly
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Token Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Select Token</label>
          <Select onValueChange={handleTokenSelect}>
            <SelectTrigger className="w-full h-14 text-lg">
              <SelectValue placeholder="Choose a test token..." />
            </SelectTrigger>
            <SelectContent>
              {tokens.map((token) => (
                <SelectItem key={token.symbol} value={token.symbol} className="h-16">
                  <div className="flex items-center space-x-3 py-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: token.color }}
                    >
                      {token.symbol.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">{token.name}</div>
                      <div className="text-sm text-slate-500">{token.symbol} • ERC20</div>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Selected Token Details */}
        {selectedToken && (
          <div className="bg-slate-50 rounded-lg p-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: selectedToken.color }}
              >
                {selectedToken.symbol.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 text-lg">{selectedToken.name}</h3>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{selectedToken.symbol}</Badge>
                  <Badge variant="outline" className="text-xs">
                    {selectedToken.decimals} decimals
                  </Badge>
                </div>
              </div>
            </div>

            {/* Contract Address */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Contract Address</label>
              <div className="flex items-center space-x-2 bg-white rounded-lg border p-3">
                <code className="flex-1 text-sm font-mono text-slate-800 break-all">{selectedToken.address}</code>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyAddress}
                    className="h-8 w-8 p-0 hover:bg-slate-100"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-slate-600" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-slate-100"
                    onClick={() => {
                      // Open block explorer - placeholder for now
                      toast({
                        title: "Block Explorer",
                        description: "Would open contract in block explorer",
                      })
                    }}
                  >
                    <ExternalLink className="h-4 w-4 text-slate-600" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recipient Address Input */}
        {selectedToken && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Recipient Address</label>
            <Input
              type="text"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              placeholder="0x... (Enter your wallet address)"
              className="text-sm font-mono h-12"
            />
            <p className="text-xs text-slate-500">Enter the address where you want to receive the test tokens</p>
          </div>
        )}

        {/* Amount Input */}
        {selectedToken && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Amount to Send</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="text-lg font-semibold h-14"
              min="1"
              max={selectedToken.maxMint.toString()}
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>Minimum: 1 {selectedToken.symbol}</span>
              <span>
                Maximum: {selectedToken.maxMint.toLocaleString()} {selectedToken.symbol}
              </span>
            </div>
          </div>
        )}

        {/* Quick Amount Buttons */}
        {selectedToken && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Quick Select</label>
            <div className="grid grid-cols-4 gap-2">
              {[100, 1000, 5000, selectedToken.maxMint].map((quickAmount) => (
                <Button
                  key={quickAmount}
                  variant="outline"
                  size="sm"
                  onClick={() => setAmount(quickAmount.toString())}
                  className="text-xs hover:bg-yellow-50 hover:border-yellow-300"
                >
                  {quickAmount >= 1000 ? `${quickAmount / 1000}K` : quickAmount}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Send Button */}
        {selectedToken && (
          <Button
            onClick={handleSend}
            disabled={
              !selectedToken ||
              !amount ||
              !recipientAddress ||
              !isValidAddress(recipientAddress) ||
              isSending ||
              Number.parseInt(amount) > selectedToken.maxMint
            }
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 text-lg transition-all duration-200 disabled:opacity-50 h-14"
          >
            {isSending ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending {selectedToken.symbol}...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>
                  Send {amount} {selectedToken.symbol}
                </span>
              </div>
            )}
          </Button>
        )}

        {/* Rate Limiting Info */}
        {selectedToken && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs">ℹ</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-blue-900 mb-1">Faucet Limits</h4>
                <p className="text-xs text-blue-700">
                  • Maximum {selectedToken.maxMint.toLocaleString()} {selectedToken.symbol} per request
                  <br />• One request per address every 24 hours
                  <br />• Tokens are sent directly to your specified address
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
